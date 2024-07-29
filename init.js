const mongoose = require("mongoose");
const Chat = require("./models/chat.js");

main()
 .then(() => {
    console.log("Connection Successful");
 })
 .catch((err) => {
    console.log(err);
 });

async function main() {
    await mongoose.connect("mongodb://127.0.0.1:27017/whatsapp");
}

let Allchats = [
    {
        from: "A",
        to: "B",
        msg: "message1",
        created_at: new Date(),
    },
    {
        from: "C",
        to: "D",
        msg: "message2",
        created_at: new Date(),
    },
    {
        from: "E",
        to: "F",
        msg: "message3",
        created_at: new Date(),
    },
    {
        from: "G",
        to: "H",
        msg: "message4",
        created_at: new Date(),
    },
    {
        from: "I",
        to: "J",
        msg: "message5",
        created_at: new Date(),
    }
]
Chat.insertMany(Allchats);

