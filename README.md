# 🐚📄✂️ Game of Drones - API

The application was created with NodeJS and MongoDB.

You can:
* Clone this Repository
* npm install
* npm start
* See localhost:8080

The API expose 4 services:
- **Healthy Check**: Endpoint that notify if the server is running in the path `/`.
- **Notify Rounds**: Endpoint that's useful to notify the rounds games of the players in the path `/statistics/:player/rounds` and receive in the body the state that only can be wins, defeats or tie.
- **Notify Game**: Endpoint that's useful to notify the winner of the game in the path `/statistics/:player/games` and receive in the body the state that only can be wins or defeats.
- **Read Stistics**: Endpoint is useful to read the players statistics in the path `/statistics`.

>**Note**: The application use an instance of mongoDB with Mlab provider.