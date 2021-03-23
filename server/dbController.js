const MongoClient = require('mongodb').MongoClient;
const args = process.argv.slice(2);

const dbUser = args[0];
const dbPass = args[1];
const dbAddress = args[2];

const uri = `mongodb+srv://${dbUser}:${dbPass}@${dbAddress}`;


// Load all messages from the database. Returns a promise which,
// once fulfilled, contains all the messages in the database.
async function loadMessages() {
  const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });
  await client.connect();
  
  const collection = client.db("chat-db").collection("chat");
  const options = { projection: { _id: 0, user: 1, content: 1 } };
  
  const messages = await collection.find({}, options).toArray();
  console.log("Loaded messages from database.");
  
  await client.close();
  return messages;
}

// Upload a message to the database.
async function insertMesage(message) {
  const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });
  await client.connect();
  
  await client.db("chat-db").collection("chat").insertOne(message);
  console.log("Message sent to the database.");
  await client.close();
}

module.exports = { loadMessages, insertMesage };