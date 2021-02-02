const Discord = require('discord.js');
const client = new Discord.Client();
const express = require('express')
require('dotenv').config()


client.on('message', msg => {
    if (msg.content === '$invite') {
      msg.reply('My invite is https://discord.com/api/oauth2/authorize?client_id=779060232344043530&permissions=8&scope=bot');
    }
  });

client.once('ready', () => {
    (`Logged in as ${client.user.tag}!`);
    memberCounter(client);
});
 
['command_handler', 'event_handler'].forEach(handler => {
    require('./handlers/command_handler')(client, Discord)
})

client.login('process.env.DISCORD_TOKEN');

const app = express()
const port = 3030

app.get('/', (req, res) => {
    res.send('<script>window.close();</script>');
    if (req.query.col && req.query.row) {
        minesweeper.makeMove(parseInt(req.query.col), parseInt(req.query.row));
    }
})

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
})