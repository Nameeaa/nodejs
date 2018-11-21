const Discord = require('discord.js');
const cevaplar = [
    "Counter Strike: Global Ofensive",
    "Minecraft",
    "Roblox",
    "Just Cause 3",
    "Phantom Forces"
];

exports.run = function(client, message, args) {
    var cevap = cevaplar[Math.floor(Math.random() * cevaplar.length)];
    message.channel.send("**"+cevap+"**");

};  

exports.conf = {
  enabled: true, 
  guildOnly: true, 
  aliases: [],
  permLevel: 0 
};

exports.help = {
  name: 'oyunseç', 
  description: 'Oyun seçer',
  usage: 'oyunseç'
};