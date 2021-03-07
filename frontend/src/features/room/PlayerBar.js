import React from "react";
import { Group } from "./Group";

export const PlayerBar = React.memo(({
  groups,
  observingPlayerN,
  gameBroadcast,
  chatBroadcast,
  playerN,
  browseGroupID,
  setBrowseGroupID,
  setBrowseGroupTopN,
}) => {
  if (!observingPlayerN) return null;
  return (
    <div className="h-full w-full">
      <Group
        groupId={observingPlayerN+'Hand'} 
        width="80%"
        gameBroadcast={gameBroadcast} 
        chatBroadcast={chatBroadcast}
        playerN={playerN}
        browseGroupID={browseGroupID}
        setBrowseGroupID={setBrowseGroupID}
        setBrowseGroupTopN={setBrowseGroupTopN}
      ></Group>
      <Group
        groupId={observingPlayerN+'Deck'} 
        width="10%"
        gameBroadcast={gameBroadcast} 
        chatBroadcast={chatBroadcast}
        playerN={playerN}
        browseGroupID={browseGroupID}
        setBrowseGroupID={setBrowseGroupID}
        setBrowseGroupTopN={setBrowseGroupTopN}
      ></Group>
      <Group
        groupId={observingPlayerN+'Discard'} 
        width="10%"
        gameBroadcast={gameBroadcast} 
        chatBroadcast={chatBroadcast}
        playerN={playerN}
        browseGroupID={browseGroupID}
        setBrowseGroupID={setBrowseGroupID}
        setBrowseGroupTopN={setBrowseGroupTopN}
      ></Group>
    </div>
  )
})