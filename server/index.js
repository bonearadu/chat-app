const express = require("express");
const path = require("path");
const { loadMessages, insertMesage } = require("./dbController");
const app = express();
const httpServer = require("http").createServer(app);
const io = require("socket.io")(httpServer);

const PORT = process.env.PORT || 3001;

// Serve all files from the React build dir.
app.use(express.static(path.resolve(__dirname, "../client/build")));
app.use(express.json());

// Loads messages from the database.
var messages;
loadMessages().then(res => { messages = res });

// On client connection, sends the messages from the board to the client
// and listens for disconnect event.
io.on("connect", socket => {
  console.log("Client connected");
  socket.emit("loadMessages", messages);
  socket.on("disconnect", () => {
    console.log("Client disconnected");
  });
});

// When a message is submitted, it gets pushed to the messages list,
// inserted in the database and emitted to all connected users.
app.post("/messages", (req, _) => {
  console.log(req.body);
  messages.push(req.body.message);
  insertMesage(req.body.message);
  io.emit("message", req.body.message);
});

// Serve front end index.html for any get request.
app.get("*", (_, res) => {
  res.sendFile(path.resolve(__dirname, "../client/build", "index.html"));
});

// Starts HTTP server on given port.
httpServer.listen(PORT, () => {
  console.log(`Server listening on ${PORT}.`);
});