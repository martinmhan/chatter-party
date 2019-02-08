# Description
Multiplayer online game built using Socket.io

This side project (still a work in progress) is an example of a simple MMORPG built using React, web sockets, and sprites. At a high level, it generates a Zelda/Pokemon-style grid where you control a character that can traverse around the screen and into other sections of the map. A few things I want to highlight...

First, the real-time character movements is achieved by storing one central grid (for each section of the map) in the socket server. Each grid is just an m x n matrix storing values that represent an image to display on the screen (e.g., a tree, rock, or character). When a user presses an arrow key, this sends a "moveCharacter" event to the web socket, which then updates the matrix before emitting it out to every connected client. Some logic was also added on the front-end to prevent characters from walking into rocks or trees.

Second, a character can walk through entrances to different sections of the map (similarly to the original Zelda games). This is implemented using the rooms feature built into Socket.io, which lets you emit some data only to a specific subset of clients at a time. In this case, I only send the matrix corresponding to the room each client is currently in. When they step into an entrance to a new map, this sends a "switchRooms" event to the web socket, which forces the client to leave their previous socket room and join the new room before sending back the new room's matrix.

Third, a basic walking sprite animation was built with nothing but React. I used a larger image containing every frame of the character's walking animation and used a React state and CSS's "overflow: hidden" property to only show one frame/snippet of that image at a time.

# GIF DEMOS
Two browser windows shown to demonstrate multiple clients
- Real time multiplayer movement and walking animations: https://s3-us-west-1.amazonaws.com/gitbuckets/chatter-party/gifs/chatter_party_demo.gif
- Rooms demo 1: https://s3-us-west-1.amazonaws.com/gitbuckets/chatter-party/gifs/chatter_party_rooms_demo.gif
- Rooms demo 2: https://s3-us-west-1.amazonaws.com/gitbuckets/chatter-party/gifs/chatter_party_rooms_demo2.gif
