# Description
Multiplayer online game built using Socket.io

This project is a simple demonstration of how an MMORPG can be built using React, web sockets, and sprites. At a high level, this repo generates a Zelda-style grid where you control a character that can traverse around the screen and into other sections of the map. A few things I want to highlight...

First, the real-time character movements - i.e., when you move your character with arrow keys, other people connected to the game will see your movements on their screen instantly. This is achieved by storing one central grid (for each section of the map) in the web socket server. Each grid is just an m x n matrix storing values that represent an image to display on the screen (e.g., a tree, rock, or character). When a user presses an arrow key, this sends a "moveCharacter" event to the web socket, which then clears out the corresponding square in the matrix before populating the next square with the client's character. This updated matrix is then emitted out to every client connected to the socket so that everyone sees the same screen at the same time. Some logic was built in on the front-end as well to prevent characters from walking into rocks or trees.

Secondly, a character can walk through entrances into a different section of the map (similarly to the original Zelda games). This is implemented using the rooms functionality built into Socket.io, which lets you emit some data only to a specific subset of clients at a time. In this case, we only want to send the matrix corresponding to the room each client is currently in. When they step into an entrance to a new map, this sends a "switchRooms" event to the web socket, which forces the client to leave their previous room and join the new room before sending back the new room's matrix.

Third, a basic walking sprite animation was built with nothing but React. I used a larger image that contains every frame the character could possibly show throughout its walking motions and used a React state and CSS's overflow: hidden property to only show one frame of that image at a time. A resource that I found useful to help understand: https://medium.freecodecamp.org/learn-advanced-react-patterns-by-developing-a-game-with-sprite-animation-5dc072886975.

# TL;DR
I used React, Socket.io, and sprites to build a simple Zelda-style MMORPG.

# GIF DEMOS
- Real time multiplayer movement and walking animations: https://s3-us-west-1.amazonaws.com/gitbuckets/chatter-party/gifs/chatter_party_demo.gif
- Rooms demo 1: https://s3-us-west-1.amazonaws.com/gitbuckets/chatter-party/gifs/chatter_party_rooms_demo.gif
- Rooms demo 2: https://s3-us-west-1.amazonaws.com/gitbuckets/chatter-party/gifs/chatter_party_rooms_demo2.gif
