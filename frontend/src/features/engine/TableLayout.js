import React, { useContext, useState } from "react";
import { useSelector } from 'react-redux';
import { Group } from "./Group";
import { Browse } from "./Browse";
import MessageBox from "../messages/MessageBox";
import "../../css/custom-misc.css"; 
import { QuickAccess } from "./QuickAccess";
import { SideGroup } from "./SideGroup";
import BroadcastContext from "../../contexts/BroadcastContext";

var delayBroadcast;

export const TableRegion = React.memo(({
  region,
  registerDivToArrowsContext,
}) => {
  console.log("Rendering TableRegion", region);
  const observingPlayerN = useSelector(state => state?.playerUi?.observingPlayerN);
  const browseGroupId = useSelector(state => state?.playerUi?.browseGroup?.id);
  const groupId = region.id.replace(/playerN/g, observingPlayerN);
  const beingBrowsed = groupId === browseGroupId;
  return (
    <div
      className="absolute"
      style={{
        top: region.top,
        left: region.left,
        width: region.width,
        height: region.height,
        background: (region.style === "shaded") ? "rgba(0, 0, 0, 0.3)" : "",
        MozBoxShadow: (region.boxShadow) ? '0 10px 10px 5px rgba(0,0,0,0.3)' : "",
        WebkitBoxShadow: (region.boxShadow) ? '0 10px 10px 5px rgba(0,0,0,0.3)' : "",
        boxShadow: (region.boxShadow) ? '0 10px 10px 5px rgba(0,0,0,0.3)' : "",
      }}>
      {beingBrowsed ? null :
        <Group
          groupId={groupId}
          groupType={region.type}
          hideTitle={region.hideTitle}
          registerDivToArrowsContext={registerDivToArrowsContext}
        />
      }
    </div>
  )
})

export const TableLayout = React.memo(({
  registerDivToArrowsContext,
}) => {
  const {gameBroadcast, chatBroadcast} = useContext(BroadcastContext);
  console.log("Rendering TableLayout");
  const sideGroupId = useSelector(state => state?.playerUi?.sideGroupId);
  const browseGroupId = useSelector(state => state?.playerUi?.browseGroup?.id);
  const [chatHover, setChatHover] = useState(false);
  const layout = useSelector(state => state?.gameUi?.game?.layout);
  const numRows = layout.length;
  const rowHeight = `${100/numRows}%`; 

  if (!layout) return;

  const handleStartChatHover = () => {
    if (delayBroadcast) clearTimeout(delayBroadcast);
    delayBroadcast = setTimeout(function() {
        setChatHover(true);
    }, 1000);
  }
  const handleStopChatHover = () => {
    if (delayBroadcast) clearTimeout(delayBroadcast);
    setChatHover(false);
  }

  var middleRowsWidth = 100;
  if (sideGroupId !== "") {
    if (numRows >= 6) middleRowsWidth = 93;
    else middleRowsWidth = 91;
  }

  return (
    <>
      {layout.regions.map((region, regionIndex) => {
        return(
          <TableRegion
            key={regionIndex}
            region={region}
            registerDivToArrowsContext={registerDivToArrowsContext}
          />
        )
      })}
      <div className="absolute" style={{left: layout.chat.left, top: layout.chat.top, width: layout.chat.width, height: layout.chat.height}}>
        <div 
          className="absolute bottom-0 left-0" 
          style={{height: chatHover ? "100vh" : "100%", width:'100%', opacity: 0.7, zIndex: chatHover ? 1e6 : 1e3}}
          onMouseEnter={() => handleStartChatHover()}
          onMouseLeave={() => handleStopChatHover()}>
          <MessageBox hover={chatHover} chatBroadcast={chatBroadcast}/>
        </div>
        {/* <QuickAccess/> */}
      </div>
      {/* Top row
      <div 
        className="relative w-full" 
        style={{height: rowHeight}}>
        {layout[0].regions.map((region, regionIndex) => (
          <TableRegion
            key={regionIndex}
            region={region}
            registerDivToArrowsContext={registerDivToArrowsContext}
          />
        ))}
      </div>
      {/* Middle rows
      <div 
        className="relative float-left"
        style={{height: `${100-2*(100/numRows)}%`, width:`${middleRowsWidth}%`}}>
        {layout.map((row, rowIndex) => {  
          if (browseGroupId && rowIndex === numRows - 2) {
            return(
              <div 
                className="relative bg-gray-700 rounded-lg w-full" 
                style={{height: `${100/(numRows-2)}%`}}>
                <Browse
                  groupId={browseGroupId}/>
              </div>
            )
          } else if (rowIndex > 0 && rowIndex < numRows - 1) {
            return(
              <div 
                key={rowIndex}
                className="relative w-full" 
                style={{height: `${100/(numRows-2)}%`}}>
                {row.regions.map((region, regionIndex) => (
                  <TableRegion
                    key={regionIndex}
                    region={region}
                    registerDivToArrowsContext={registerDivToArrowsContext}
                  />
                ))}
              </div>
            )
          } else return null;
        })}
      </div>
      <SideGroup
        registerDivToArrowsContext={registerDivToArrowsContext}/>
      {/* Bottom row
      <div 
        className="relative float-left w-full" 
        style={{height: rowHeight}}>
        {layout[numRows-1].regions.map((region, regionIndex) => (
          <TableRegion
            key={regionIndex}
            region={region}
            registerDivToArrowsContext={registerDivToArrowsContext}
          />
        ))}
      </div> */}
    </>
  )
})
