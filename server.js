import express from 'express';
import http from 'http';
import { Server } from 'socket.io';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const server = http.createServer(app);
const io = new Server(server);

const PORT = process.env.PORT || 3000;
app.use(express.static(path.join(__dirname, 'public')));

server.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

const lobbies = {};

function generateLobbyCode() {
  return Math.random().toString(36).substring(2, 8).toUpperCase();
}

io.on("connection", (socket) => {
  console.log(`Player connected: ${socket.id}`);

  socket.on("debug", () => {
    console.log("debug")
  });

});
