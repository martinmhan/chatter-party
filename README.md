# Description
Multiplayer online game built using Socket.io

This project is a simple demonstration of how an MMORPG-style game can be built using React, web sockets, and sprites. At a high level, this repo basically generates a pokemon game-style grid map where you control a character that can traverse around the screen and into other sections of the map. There are a few things at play here...

First, when you move your character with one of the arrow buttons, other players connected to the web socket will see your movements instantly. This is achieved by storing in the web socket server a central grid, which is basically an m x n matrix of values, each representing a different item image to display on the screen (e.g., tree, rock, or a character). When a user presses the arrow key, this sends a "moveCharacter" event to the web socket, which then clears out the character's current square and rerenders it on the new adjacent square. This updated matrix is then emitted out to every client connected to the socket so that everyone sees the same screen at the same time.

Secondly, a character can traverse off the current screen into a different section of the map (similarly to the original Zelda games). This is implemented using the rooms functionality built into Socket.io,which lets you emit some data only to a specifc subset of clients at a time. In this case, we only want to send the grid matrix corresponding to the room each client is currently in. When they step into an entrance to a new map, this sends a "switchRooms" event to the web socket, which leaves the previous room and joins the new room for the client before sending back the new room's grid matrix.

Third, a basic walking animation is  