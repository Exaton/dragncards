import React, { useState, useEffect } from "react";
import { CARDSCALE } from "./Constants";
import { faChevronLeft, faChevronRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
//import cx from "classnames";

var delayBroadcast;

export const Token = ({
    type,
    card,
    left,
    top,
    showButtons,
    gameBroadcast,
    chatBroadcast,
    groupID,
    stackIndex,
    cardIndex,
}) => {
    console.log('rendering tokens on ',groupID,stackIndex)
    //console.log(gameUI.game.groups[groupID].stacks)
    const [buttonLeftVisible, setButtonLeftVisible] = useState(false);
    const [buttonRightVisible, setButtonRightVisible] = useState(false);
    const [amount, setAmount] = useState(card.tokens[type]);

    useEffect(() => {    
        if (card.tokens[type] !== amount) setAmount(card.tokens[type]);
    }, [card.tokens[type]]);

    function clickArrow(event,delta) {
        event.stopPropagation();
        setAmount(amount+delta);

        const newTokens = {
            ...card.tokens,
            [type]: amount+delta,
        }
        const newCard = {
            ...card,
            tokens: newTokens,
        }

        // Get card name
        const cardName = newCard["sides"][newCard["currentSide"]].printname;
        // Determine total number of tokens added or removed since last broadcast
        const totalDelta = newCard.tokens[type]-card.tokens[type];
        // Set up a delayed broadcast to update the game state that interupts itself if the button is clicked again shortly after.
        if (delayBroadcast) clearTimeout(delayBroadcast);
        delayBroadcast = setTimeout(function() {
            gameBroadcast("update_card", {card: newCard, group_id: groupID, stack_index: stackIndex, card_index:cardIndex});
            if (delta > 0) {
                if (delta === 1) {
                    chatBroadcast("game_update",{message: "added "+totalDelta+" "+type+" token to "+cardName+"."});
                } else {
                    chatBroadcast("game_update",{message: "added "+totalDelta+" "+type+" tokens to "+cardName+"."});
                }
            } else {
                if (delta === -1) {
                    chatBroadcast("game_update",{message: "removed "+(-totalDelta)+" "+type+" token from "+cardName+"."});
                } else {
                    chatBroadcast("game_update",{message: "removed "+(-totalDelta)+" "+type+" tokens from "+cardName+"."});
                }                
            }
        }, 500);
        


    }
    function handleDoubleClick(event) {
        event.stopPropagation();
    }

    // document.onkeydown = function(evt) {
    //     evt = evt || window.event;
    //     if (evt.shiftKey) {
    //         setAdjustVisible(true);
    //     }
    // };

    // document.onkeyup = function(evt) {
    //     evt = evt || window.event;
    //     if (evt.shiftKey) {
    //         setAdjustVisible(false);
    //     }
    // };

    return(
        <div
            
            style={{
                position: "absolute",
                left: `${left}`,
                top: `${top}`,
                height: `${CARDSCALE/0.72/4}vw`,
                width: `${CARDSCALE/0.72/4}vw`,
                backgroundImage: `url(${process.env.PUBLIC_URL + '/images/tokens/'+type+'.png'})`,
                backgroundSize: "contain",
                //zIndex: 1e6,
                display: showButtons || amount!==0 ? "block" : "none",
            }}
        >

            <p 
                className="text-center text-sm"
                style={{
                    position: "absolute",
                    color: "white", 
//                    textShadow: "2px 0 0 #000, 0 -2px 0 #000, 0 2px 0 #000, -2px 0 0 #000", 
                    textShadow: "rgb(0, 0, 0) 2px 0px 0px, rgb(0, 0, 0) 1.75517px 0.958851px 0px, rgb(0, 0, 0) 1.0806px 1.68294px 0px, rgb(0, 0, 0) 0.141474px 1.99499px 0px, rgb(0, 0, 0) -0.832294px 1.81859px 0px, rgb(0, 0, 0) -1.60229px 1.19694px 0px, rgb(0, 0, 0) -1.97999px 0.28224px 0px, rgb(0, 0, 0) -1.87291px -0.701566px 0px, rgb(0, 0, 0) -1.30729px -1.51361px 0px, rgb(0, 0, 0) -0.421592px -1.95506px 0px, rgb(0, 0, 0) 0.567324px -1.91785px 0px, rgb(0, 0, 0) 1.41734px -1.41108px 0px, rgb(0, 0, 0) 1.92034px -0.558831px 0px",
                    top: "17%",
                    width: "100%",
            }}>
                {(type==="threat" || type==="willpower" || type==="attack" || type==="defense") && amount>0 ? "+"+amount : amount}
            </p>

            <div
                className="text-center text-sm"
                style={{
                    position: "absolute",
                    height: "100%",
                    width: "50%",
                    backgroundColor: "black",
                    opacity: buttonLeftVisible ? "65%" : "0%",
                    display: showButtons ? "block" : "none",
                }}
                onMouseOver={() => setButtonLeftVisible(true)}
                onMouseLeave={() => setButtonLeftVisible(false)}
                onClick={(event) => clickArrow(event,-1)}
                onDoubleClick={(event) => handleDoubleClick(event)}
            >
                <FontAwesomeIcon 
                    className="text-white" 
                    style={{
                        position:"absolute", 
                        top:"25%", 
                        left:"20%",
                    }}  
                    icon={faChevronLeft}/>
            </div>

            <div
                className="text-center text-sm"
                style={{
                    position: "absolute",
                    height: "100%",
                    width: "50%",
                    left: "50%",
                    backgroundColor: "black",
                    opacity: buttonRightVisible ? "65%" : "0%",
                    display: showButtons ? "block" : "none",
                }}
                onMouseOver={() => setButtonRightVisible(true)}
                onMouseLeave={() => setButtonRightVisible(false)}
                onClick={(event) => clickArrow(event,1)}
                onDoubleClick={(event) => handleDoubleClick(event)}
            >
                <FontAwesomeIcon 
                    className="text-white" 
                    style={{
                        position:"absolute", 
                        top:"25%", 
                        left:"30%",
                    }} 
                    icon={faChevronRight}/>
            </div>
        </div>
    )
  }
  
  export default Token;