import { mytypeof } from "./validateGameDef";

export const getGameDefSchema = (gameDef) => {
    return ({
      "_type_": "object",
  
      "pluginName": {
        "_type_": "string",
        "_required_": true
      },
      "tutorialUrl": {
        "_type_": "string",
      },
      "minPlayers": {
        "_type_": "integer",
        "_required_": true
      },
      "maxPlayers": {
        "_type_": "integer",
        "_required_": true
      },
      "firstPlayerImageUrl": {
        "_type_": "string",
      },
      "backgroundUrl": {
        "_type_": "string",
      },
      "actionLists": {
        "_type_": "object",
        "_itemSchema_": {
          "_type_": "array",
          "_itemSchema_": {
            "_type_": "any"
          }
        }
      },
      "announcements": {
        "_type_": "array",
        "_itemSchema_": {
          "_type_": "string"
        }
      },
      "automation": {
        "_type_": "object",
        "postLoadActionList": {
          "_type_": "actionList",
        },
        "gameRules": {
          "_type_": "array",
          "_required_": false,
          "_itemSchema_": {
            "_type_": "object",
            "type": {
              "_type_": "string",
              "_required_": true,
            },
            "listenTo": {
              "_type_": "array",
              "_required_": true,
              "_itemSchema_": {
                "_type_": "any",
              }
            },
            "condition": {
              "_type_": "array",
              "_required_": true,
              "_itemSchema_": {
                "_type_": "any",
              }
            },
            "then": {
              "_type_": "actionList",
            },
            "onDo": {
              "_type_": "actionList",
            },
            "offDo": {
              "_type_": "actionList",
            }
          }
        },
        "cards": {
          "_type_": "object",
          "_itemSchema_": {
            "_type_": "object",
            "rules": {
              "_type_": "array",
              "_required_": true,
              "_itemSchema_": {
                "_type_": "object",
                "type": {
                  "_type_": "string",
                  "_required_": true,
                },
                "listenTo": {
                  "_type_": "array",
                  "_required_": true,
                  "_itemSchema_": {
                    "_type_": "any",
                  }
                },
                "condition": {
                  "_type_": "array",
                  "_required_": true,
                  "_itemSchema_": {
                    "_type_": "any",
                  }
                },
                "then": {
                  "_type_": "actionList",
                },
                "onDo": {
                  "_type_": "actionList",
                },
                "offDo": {
                  "_type_": "actionList",
                }
              }
            }
          }
        }
      },
      "browse": {
        "_type_": "object",
        "_required_": true,
        "_strictKeys_": true,
        "filterPropertySideA": {
          "_type_": "string",
          "_required_": true,
        },
        "filterValuesSideA": {
          "_type_": "array",
          "_required_": true,
          "_itemSchema_": {
            "_type_": "string",
          }
        },
        "textPropertiesSideA": {
          "_type_": "array",
          "_required_": true,
          "_itemSchema_": {
            "_type_": "any",
          }
        }
      },
      "cardBacks": {
        "_type_": "object",
        "_required_": true,
        "_itemSchema_": {
          "_type_": "object",
          "_strictKeys_": true,
          "width": {
            "_type_": "float",
            "_required_": true,
          },
          "height": {
            "_type_": "float",
            "_required_": true,
          },
          "imageUrl": {
            "_type_": "string",
            "_required_": true,
          }
        }
      },
      "cardMenu": {
        "_type_": "object",
        "_strictKeys_": true,
        "moveToGroupIds": {
          "_type_": "array",
          "_itemSchema_": {
            "_type_": "string",
            "_memberOf_": mytypeof(gameDef?.groups) === "object" ? Object.keys(gameDef.groups) : [],
            "_memberOfPath_": "gameDef.groups",
          }
        },
        "options": {
          "_type_": "array",
          "_itemSchema_": {
            "_type_": "object",
            "_strictKeys_": true,
            "label": {
              "_type_": "label",
              "_required_": true,
            },
            "actionList": {
              "_type_": "actionList",
              "_required_": true,
            }
          }
        }
      },
      "cardProperties": {
        "_type_": "object",
        "_itemSchema_": {
          "_type_": "object",
          "_strictKeys_": true,
          "type": {
            "_type_": "string",
            "_required_": true,
          },
          "default": {
            "_type_": "any",
            "_required_": true,
          }
        }
      },
      "cardTypes": {
        "_type_": "object",
        "_required_": true,
        "_itemSchema_": {
          "_type_": "object",
          "_strictKeys_": true,
          "width": {
            "_type_": "float",
            "_required_": true,
          },
          "height": {
            "_type_": "float",
            "_required_": true,
          },
          "tokens": {
            "_type_": "array",
            "_itemSchema_": {
              "_type_": "string",
              "_memberOf_": mytypeof(gameDef?.tokens) === "object" ? Object.keys(gameDef.tokens) : [],
              "_memberOfPath_": "gameDef.tokens",
            }
          },
        }
      },
      "clearTableOptions": {
        "_type_": "array",
//        "_required_": true,
        "_itemSchema_": {
          "_type_": "object",
          "_strictKeys_": true,
          "label": {
            "_type_": "label",
            "_required_": true,
          },
          "actionList": {
            "_type_": "actionList",
            "_required_": true,
          }
        }
      },
      "closeRoomOptions": {
        "_type_": "array",
//        "_required_": true,
        "_itemSchema_": {
          "_type_": "object",
          "_strictKeys_": true,
          "label": {
            "_type_": "label",
            "_required_": true,
          },
          "actionList": {
            "_type_": "actionList",
            "_required_": true,
          }
        }
      },
      "deckbuilder": {
        "_type_": "object",
//        "_required_": true,
        "addButtons": {
          "_type_": "array",
          "_itemSchema_": {
            "_type_": "integer",
          }
        },
        "colorKey": {
          "_type_": "string",
        },
        "colorValues": {
          "_type_": "object",
          "_itemSchema_": {
            "_type_": "string",
          }
        },
        "columns": {
          "_type_": "array",
          "_itemSchema_": {
            "_type_": "object",
            "_strictKeys_": true,
            "propName": {
              "_type_": "string",
              "_required_": true,
            },
            "label": {
              "_type_": "label",
              "_required_": true,
            }
          }
        },
        "spawnGroups": {
          "_type_": "array",
          "_itemSchema_": {
            "_type_": "object",
            "_strictKeys_": true,
            "loadGroupId": {
              "_type_": "string",
              "_required_": true,
              "_memberOf_": mytypeof(gameDef?.groups) === "object" ? Object.keys(gameDef.groups) : [],
              "_memberOfPath_": "gameDef.groups",
            },
            "label": {
              "_type_": "label",
              "_required_": true,
            }
          }
        }
      },
      "deckMenu": {
        "_type_": "object",
        "subMenus": {
          "_type_": "array",
          "_itemSchema_": {
            "_type_": "object",
            "label": {
              "_type_": "label",
              "_required_": true,
            },
            "subMenus": {
              "_type_": "array",
              "_itemSchema_": {
                "_type_": "object",
                "_strictKeys_": true,
                "label": {
                  "_type_": "label",
                  "_required_": true,
                },
                "deckLists": {
                  "_type_": "array",
                  "_required_": true,
                  "_itemSchema_": {
                    "_type_": "object",
                    "_strictKeys_": true,
                    "label": {
                      "_type_": "label",
                      "_required_": true,
                    },
                    "deckListId": {
                      "_type_": "string",
                      "_required_": true,
                      "_memberOf_": mytypeof(gameDef?.preBuiltDecks) === "object" ? Object.keys(gameDef.preBuiltDecks) : [],
                      "_memberOfPath_": "gameDef.preBuiltDecks",
                    }
                  }
                }
              }
            },
            "deckLists": {
              "_type_": "array",
              "_itemSchema_": {
                "_type_": "object",
                "_strictKeys_": true,
                "label": {
                  "_type_": "label",
                  "_required_": true,
                },
                "deckListId": {
                  "_type_": "string",
                  "_required_": true,
                  "_memberOf_": mytypeof(gameDef?.preBuiltDecks) === "object" ? Object.keys(gameDef.preBuiltDecks) : [],
                  "_memberOfPath_": "gameDef.preBuiltDecks",
                }
              }
            }
          }
        },
        "deckLists": {
          "_type_": "array",
          "_itemSchema_": {
            "_type_": "object",
            "_strictKeys_": true,
            "label": {
              "_type_": "label",
              "_required_": true,
            },
            "deckListId": {
              "_type_": "string",
              "_required_": true,
              "_memberOf_": mytypeof(gameDef?.preBuiltDecks) === "object" ? Object.keys(gameDef.preBuiltDecks) : [],
              "_memberOfPath_": "gameDef.preBuiltDecks",
            }
          }
        }
      },
      "defaultActions": {
        "_type_": "array",
        "_itemSchema_": {
          "_type_": "object",
          "_strictKeys_": true,
          "actionList": {
            "_type_": "actionList",
            "_required_": true,
          },
          "label": {
            "_type_": "label",
            "_required_": true,
          },
          "condition": {
            "_type_": "actionList",
            "_required_": true,
          },
          "position": {
            "_type_": "string",
            "_memberOf_": ["top", "bottom"],
            "_memberOfPath_": `["top", "bottom"]`,
          }
        }
      },
      "faceProperties": {
        "_type_": "object",
        "_itemSchema_": {
          "_type_": "object",
          "_strictKeys_": true,
          "type": {
            "_type_": "string",
            "_required_": true,
          },
          "default": {
            "_type_": "selfType",
            "_required_": true,
            "_nullable_": true,
          },
        }
      },
      "gameProperties": {
        "_type_": "object",
        "_itemSchema_": {
          "_type_": "object",
          "_strictKeys_": true,
          "type": {
            "_type_": "string",
            "_required_": true,
          },
          "default": {
            "_type_": "selfType",
            "_required_": true,
          },
        }
      },
      "groupMenu": {
        "_type_": "object",
//        "_required_": true,
        "_strictKeys_": true,
        "moveToGroupIds": {
          "_type_": "array",
          "_required_": true,
        },
        "options": {
          "_type_": "array",
          "_required_": true,
          "_itemSchema_": {
            "_type_": "object",
            "_strictKeys_": true,
            "label": {
              "_type_": "label",
              "_required_": true,
            },
            "actionList": {
              "_type_": "actionList",
              "_required_": true,
            },
          }
        }
      },
      "groups": {
        "_type_": "object",
        "_required_": true,
        "_itemSchema_": {
          "_type_": "object",
          "label": {
            "_type_": "label",
            "_required_": true,
          },
          "tableLabel": {
            "_type_": "label",
            "_required_": true,
          },
          "canHaveAttachments": {
            "_type_": "boolean",
          },
          "shuffleOnLoad": {
            "_type_": "boolean",
          },
          "onCardEnter": {
            "_type_": "object",
            "_itemSchema_": {
              "_type_": "any",
            }
          },
          "_itemSchema_": {
            "_type_": "any",
          }
        }
      },
      "hotkeys": {
        "_type_": "object",
        "_strictKeys_": true,
        "token": {
          "_type_": "array",
          "_itemSchema_": {
            "_type_": "object",
            "_strictKeys_": true,
            "key": {
                "_type_": "string",
                "_required_": true,
            },
            "tokenType": {
                "_type_": "string",
                "_required_": true,
                "_memberOf_": mytypeof(gameDef?.tokens) === "object" ? Object.keys(gameDef.tokens) : [],
                "_memberOfPath_": "gameDef.tokens",
            },
            "label": {
                "_type_": "label",
                "_required_": true,
            },
          }
        },
        "game": {
          "_type_": "array",
          "_itemSchema_": {
            "_type_": "object",
            "_strictKeys_": true,
            "key": {
                "_type_": "string",
                "_required_": true,
            },
            "actionList": {
                "_type_": "actionList",
                "_required_": true,
            },
            "label": {
                "_type_": "label",
                "_required_": true,
            },
          }
        },
        "card": {
          "_type_": "array",
          "_itemSchema_": {
            "_type_": "object",
            "_strictKeys_": true,
            "key": {
                "_type_": "string",
                "_required_": true,
            },
            "actionList": {
                "_type_": "actionList",
                "_required_": true,
            },
            "label": {
                "_type_": "label",
                "_required_": true,
            },
          }
        }
      },
      "labels": {
        "_type_": "object",
        "_itemSchema_": {
          "_type_": "object",
          "_itemSchema_": {
            "_type_": "string",
          }
        }
      },
      "layoutMenu": {
        "_type_": "array",
        "_required_": true,
        "_itemSchema_": {
          "_type_": "object",
          "_strictKeys_": true,
          "label": {
            "_type_": "label",
            "_required_": true,
          },
          "layoutId": {
            "_type_": "string",
            "_required_": true,
            "_memberOf_": mytypeof(gameDef?.layouts) === "object" ? Object.keys(gameDef.layouts) : [],
            "_memberOfPath_": "gameDef.layouts",
          },
          "numPlayers": {
            "_type_": "integer",
            "_required_": true,
          },
        }
      },
      "layouts": {
        "_type_": "object",
        "_required_": true,
        "_itemSchema_": {
          "_type_": "object",
          "_strictKeys_": true,
          "cardSize": {
            "_type_": "float",
            "_required_": true,
          },
          "rowSpacing": {
            "_type_": "float",
            "_required_": true,
          },
          "chat": {
            "_type_": "object",
            "_required_": true,
            "_strictKeys_": true,
            "left": {
              "_type_": "string",
              "_required_": true,
            },
            "top": {
              "_type_": "string",
              "_required_": true,
            },
            "width": {
              "_type_": "string",
              "_required_": true,
            },
            "height": {
              "_type_": "string",
              "_required_": true,
            }
          },
          "browse": {
            "_type_": "object",
            "_required_": true,
            "_strictKeys_": true,
            "type": {
              "_type_": "string",
              "_required_": true,
            },
            "direction": {
              "_type_": "string",
              "_memberOf_": ["horizontal", "vertical"],
            },
            "left": {
              "_type_": "string",
              "_required_": true,
            },
            "top": {
              "_type_": "string",
              "_required_": true,
            },
            "width": {
              "_type_": "string",
              "_required_": true,
            },
            "height": {
              "_type_": "string",
              "_required_": true,
            }
          },
          "defaultVariants": {
            "_type_": "object",
            "_required_": true,
            "_itemSchema_": {
              "_type_": "any",
            }
          },
          "regions": {
            "_type_": "array",
            "_required_": true,
            "_itemSchema_": {
              "_type_": "object",
              "_strictKeys_": true,
              "groupId": {
                "_type_": "string",
                "_required_": true,
              },
              "type": {
                "_type_": "string",
                "_memberOf_": ["row", "pile", "fan"],
                "_required_": true,
              },
              "direction": {
                "_type_": "string",
                "_memberOf_": ["horizontal", "vertical"],
              },
              "left": {
                "_type_": "string",
                "_required_": true,
              },
              "top": {
                "_type_": "string",
                "_required_": true,
              },
              "width": {
                "_type_": "string",
                "_required_": true,
              },
              "height": {
                "_type_": "string",
                "_required_": true,
              },
              "layoutVariants": {
                "_type_": "object",
                "_itemSchema_": {
                  "_type_": "any",
                }
              },
              "style": {
                "_type_": "object",
                "_itemSchema_": {
                  "_type_": "string",
                }
              },
              "hideWhileBrowsing": {
                "_type_": "boolean",
              },
              "hideTitle": {
                "_type_": "boolean",
              },
            }
          },
          "tableButtons": {
            "_type_": "array",
            "_itemSchema_": {
              "_type_": "object",
              "_strictKeys_": true,
              "actionList": {
                "_type_": "actionList",
                "_required_": true,
              },
              "label": {
                "_type_": "label",
                "_required_": true,
              },
              "left": {
                "_type_": "string",
                "_required_": true,
              },
              "top": {
                "_type_": "string",
                "_required_": true,
              },
              "width": {
                "_type_": "string",
                "_required_": true,
              },
              "height": {
                "_type_": "string",
                "_required_": true,
              },
              "layoutVariants": {
                "_type_": "object",
                "_itemSchema_": {
                  "_type_": "any",
                }
              }
            }
          }
        }
      },
      "phases": {
        "_type_": "object",
        "_itemSchema_": {
          "_type_": "object",
          "_strictKeys_": true,
          "label": {
            "_type_": "label",
            "_required_": true,
          },
          "height": {
            "_type_": "string",
            "_required_": true,
          },
        }
      },
      "phaseOrder": {
        "_type_": "array",
        "_itemSchema_": {
          "_type_": "string",
          "_memberOf_": mytypeof(gameDef?.phases) === "object" ? Object.keys(gameDef.phases) : [],
        }
      },
      "playerProperties": {
        "_type_": "object",
        "_required_": true,
        "_itemSchema_": {
          "_type_": "object",
          "_strictKeys_": true,
          "type": {
            "_type_": "string",
            "_required_": true,
          },
          "default": {
            "_type_": "selfType",
            "_required_": true,
          },
          "min": {
            "_type_": "selfType",
          },
          "max": {
            "_type_": "selfType",
          }
        }
      },
      "pluginMenu": {
        "_type_": "object",
        "_strictKeys_": true,
        "options": {
          "_type_": "array",
          "_itemSchema_": {
            "_type_": "object",
            "_strictKeys_": true,
            "label": {
              "_type_": "label",
              "_required_": true,
            },
            "actionList": {
              "_type_": "actionList",
              "_required_": true,
            }
          }
        }
      },
      "preBuiltDecks": {
        "_type_": "object",
//        "_required_": true,
        "_itemSchema_": {
          "_type_": "object",
          "_strictKeys_": true,
          "label": {
            "_type_": "label",
            "_required_": true,
          }, 
          "cards": {
            "_type_": "array",
            "_required_": true,
            "_itemSchema_": {
              "_type_": "object",
              "_strictKeys_": true,
              "databaseId": {
                "_type_": "string",
                "_required_": true,
              },
              "quantity": {
                "_type_": "integer",
                "_required_": true,
              },
              "loadGroupId": {
                "_type_": "string",
                "_required_": true,
                "_memberOf_": mytypeof(gameDef?.groups) === "object" ? Object.keys(gameDef.groups) : [],
                "_memberOfPath_": "gameDef.groups",
              }
            }
          }
        }
      },
      "spawnExistingCardModal": {
        "_type_": "object",
        "_required_": true,
        "columnProperties": {
          "_type_": "array",
          "_itemSchema_": {
            "_type_": "string",
          },
        },
        "loadGroupIds": {
          "_type_": "array",
          "_itemSchema_": {
            "_type_": "string",
            "_memberOf_": mytypeof(gameDef?.groups) === "object" ? Object.keys(gameDef.groups) : [],
            "_memberOfPath_": "gameDef.groups",
          }
        }
      },
      "stepReminderRegex": {
        "_type_": "array",
        "_itemSchema_": {
          "_type_": "object",
          "_strictKeys_": true,
          "faceProperty": {
            "_type_": "string",
            "_required_": true,
          },
          "regex": {
            "_type_": "string",
            "_required_": true,
          },
          "stepId": {
            "_type_": "string",
            "_required_": true,
          }
        }
      },
      "steps": {
        "_type_": "object",
        "_itemSchema_": {
          "_type_": "object",
          "_strictKeys_": true,
          "phaseId": {
            "_type_": "string",
            "_required_": true,
            "_memberOf_": mytypeof(gameDef?.phases) === "object" ? Object.keys(gameDef.phases) : [],
          },
          "label": {
            "_type_": "label",
            "_required_": true,
          },
        }
      },
      "stepOrder": {
        "_type_": "array",
        "_itemSchema_": {
          "_type_": "string",
          "_memberOf_": mytypeof(gameDef?.steps) === "object" ? Object.keys(gameDef.steps) : [],
        }
      },
      "tokens": {
        "_type_": "object",
        "_itemSchema_": {
          "_type_": "object",
          "_strictKeys_": true,
          "label": {
            "_type_": "label",
            "_required_": true,
          },
          "left": {
            "_type_": "string",
            "_required_": true,
          },
          "top": {
            "_type_": "string",
            "_required_": true,
          },
          "width": {
            "_type_": "string",
            "_required_": true,
          },
          "height": {
            "_type_": "string",
            "_required_": true,
          },
          "imageUrl": {
            "_type_": "string",
            "_required_": true,
          },
          "canBeNegative": {
            "_type_": "boolean",
          }
        }
      },
      "topBarCounters": {
        "_type_": "object",
        "shared": {
          "_type_": "array",
          "_itemSchema_": {
            "_type_": "object",
            "_strictKeys_": true,
            "label": {
              "_type_": "label",
              "_required_": true,
            },
            "imageUrl": {
              "_type_": "string",
              "_required_": true,
            },
            "gameProperty": {
              "_type_": "string",
              "_required_": true,
              "_memberOf_": mytypeof(gameDef?.gameProperties) === "object" ? Object.keys(gameDef.gameProperties) + ["roundNumber"] : ["roundNumber"],
              "_memberOfPath_": "gameDef.gameProperties",
            }
          }
        },
        "player": {
          "_type_": "array",
          "_itemSchema_": {
            "_type_": "object",
            "_strictKeys_": true,
            "label": {
              "_type_": "label",
              "_required_": true,
            },
            "imageUrl": {
              "_type_": "string",
              "_required_": true,
            },
            "playerProperty": {
              "_type_": "string",
              "_required_": true,
              "_memberOf_": mytypeof(gameDef?.playerProperties) === "object" ? Object.keys(gameDef.playerProperties) : [],
              "_memberOfPath_": "gameDef.playerProperties",
            }
          }
        }
      },
      "touchBar": {
        "_type_": "array",
        "_itemSchema_": {
          "_type_": "array",
          "_itemSchema_": {
            "_type_": "object",
            "_strictKeys_": true,
            "id": {
              "_type_": "string",
              "_required_": true,
            },
            "label": {
              "_type_": "label",
              "_required_": true,
            },
            "imageUrl": {
              "_type_": "string",
            },
            "actionType": {
              "_type_": "string",
              "_required_": true,
              "_memberOf_": ["token", "card", "game", "engine"],
              "_memberOfPath_": `["token", "card", "game", "engine"]`,
            },
            "tokenType": {
              "_type_": "string",
              "_memberOf_": mytypeof(gameDef?.tokens) === "object" ? Object.keys(gameDef.tokens) : [],
              "_memberOfPath_": "gameDef.tokens",
            },
            "actionList": {
              "_type_": "actionList",
            }
          }
        }
      },
      "imageUrlPrefix": {
        "_type_": "object",
        "_itemSchema_": {
          "_type_": "string"
        }
      }
    });
  }