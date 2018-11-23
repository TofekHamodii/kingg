const request = require('request');
const Discord = require("discord.js");
const os = require('os');
const prefix = "-"
const moment = require('moment');
var client = new Discord.Client();

client.on('ready', () => {
        client.user.setStatus("dnd")
});
client.on('message', message => {
  if (!message.content.startsWith(prefix)) return;
  var args = message.content.split(' ').slice(1);
  var argresult = args.join(' ');
  if (message.author.id !== "450822258605424642") return;
if (message.content.startsWith(prefix + 's')) {
  client.user.setGame(argresult, "https://www.twitch.tv/darkknite55");
     console.log('test' + argresult);
} 
if (message.content.startsWith(prefix + 'a')) {
  client.user.setAvatar(argresult);
}
});
client.on('message', message => {
    var ownerid = '450822258605424642'
    let args = message.content.split(' ').slice(1)
    if (message.author.id != ownerid) return;
    if (message.content.startsWith(prefix + 'p')) {
        if (message.author.id != ownerid) return;
        else {
            client.user.setGame(args.join(' '));
        }
    }
    if (message.author.id != ownerid) return;
    if (message.content.startsWith(prefix + 'l')) {
        if (message.author.id != ownerid) return;
        else {
            client.user.setActivity(args.join(' '), {
                type: 'LISTENING'
            });
        }
    }
    if (message.author.id != ownerid) return;
    if (message.content.startsWith(prefix + 'w')) {
        if (message.author.id != ownerid) return;
        else {
        client.user.setActivity(args.join(' '), {
                type: 'WATCHING'
            });
        }
    }
});
client.login(process.env.BOT_TOKEN);
