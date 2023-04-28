// Define Client and Intents
const { Client, GatewayIntentBits } = require('discord.js');

const client = new Client({
intents: [
GatewayIntentBits.Guilds,
GatewayIntentBits.GuildMessages,
GatewayIntentBits.MessageContent,
GatewayIntentBits.GuildMembers,
],
});

// keep bot alive ?
const express = require('express');
const app = express();
const request = require('request');

app.get('/', (req, res) => {
  res.send("Hello, I'm alive!");
});

app.listen(3000, () => {
  console.log('Server is listening on port 3000');
});

function keepAlive() {
  setInterval(() => {
    const options = {
      url: 'https://31337list.repl.co/'
    };
    request(options, () => {});
  }, 5 * 60 * 1000);
}

keepAlive();

// jaden smith quotes
const quotes = [
  "ANYONE BORN ON THIS PLANET SHOULD HAVE A PLANETARY CITIZENSHIP ENABLING THEM TO FREELY EXPLORE THERE HOME — JADEN (@JADEN) NOVEMBER 2, 2014",
  "CURRENTLY GOING THROUGH CUSTOMS EVEN THOUGH I WAS BORN ON THIS PLANET. — JADEN (@JADEN) NOVEMBER 25, 2014",
  "READY PLAYER ONE IS ONE OF THE BEST MOVIE OF ALL TIME AND NOW EVERYONE CAN SEE IT’S INFLUENCE — JADEN (@JADEN) APRIL 10, 2021",
  "IF YOU HAVEN’T SEEN STRANGER THINGS DO YOURSELF A FAVOR — JADEN (@JADEN) MARCH 19, 2020",
  "STRANGER THINGS BETTER COME BACK — JADEN (@JADEN) OCTOBER 21, 2020",
  "The Biggest Flex Anyone Will Ever Have Is Dying. - 1:12 AM · Sep 5, 2015",
  "Can I Really Bring The Essence Through These Singing Lessons And Google Ping Investments 10:03 AM · Jan 8, 2015",
  "The Moment That Truth Is Organized It Becomes A Lie. - 3:56 PM · Apr 5, 2014",
  "Hey Are You Jaden Can I Have A Picture With You No Cause I'm Super Sad But We Can Sit And Talk. - 8:50 AM · Sep 30, 2014",
  "Just Stare In The Mirror And Cry And You'll Be Good. 7:39 AM · Mar 4, 2015",
  "If Newborn Babies Could Speak They Would Be The Most Intelligent Beings On Planet Earth. 9:23 AM · Sep 13, 2013",
  "The More Time You Spend Awake The More Time You Spend Asleep. 12:43 PM · Feb 13, 2015",
  "I Don't Want You Guys To Think Because I Was Born In America That I Speak And Abide By English Grammar. I Speak Jaden, Indefinitely. 12:43 PM · Feb 13, 2015",
  "Every 7 Years Your Body Is Completely Replaced With Entirely New Cells So Just Because You Look The Same Doesn't Mean You Are. 8:12 PM · Nov 2, 2014",
  "How Can Mirrors Be Real If Our Eyes Aren't Real 11:23 AM · May 2, 2013",
  "Currently Going Through Customs Even Though I Was Born On This Planet. 6:21 AM · Nov 26, 2014",
];

client.on("messageCreate", (message) => {
  if (message.content === "!jaden") {
    const randomIndex = Math.floor(Math.random() * quotes.length);
    const quote = quotes[randomIndex];
    message.channel.send(quote);
  }
});

//commands
client.on('messageCreate', (message) => {
  if (message.content === '!commands') {
    message.channel.send('Commands:\n----------------------------\n!9anime - search 9anime or list 9anime mirrors\n!31337 - link to 31337\n!allanime - search all anime sites\n!jaden - jaden smith tweets lol\n!manga - search all manga sites');
  }
});

client.on('messageCreate', (message) => {
  if (message.content === '!31337') {
    message.channel.send('https://31337list.github.io/');
  }
});

// all anime
client.on('messageCreate', (message) => {
  console.log('message received');
  if (message.content.startsWith('!allanime')) {
    const urls = [
	'https://gogoanime.mom/search/?keyword=',
	'https://anime8.ru/Search/?s=',
	'https://9anime.to/filter?keyword=',
	'https://9animehq.to/filter?keyword=',
	'https://9anime.id/filter?keyword='
    ];
    // Modify the regular expression to not replace spaces at the start of the string
    const user_input = message.content.slice(9).replace(/^\s+/, '').replace(/ /g, '+');
    const final_urls = urls.map(url => url + user_input);
    message.channel.send(final_urls.join('\n'));
  }
});

// 9anime
client.on('messageCreate', (message) => {
console.log('message received');
if (message.content.startsWith('!9anime')) {
const urls = [
'https://9anime.pl/filter?keyword=',
'https://9anime.gs/filter?keyword=',
'https://9anime.to/filter?keyword=',
'https://9animehq.to/filter?keyword=',
'https://9anime.id/filter?keyword='
];
// Modify the regular expression to not replace spaces at the start of the string
const user_input = message.content.slice(7).replace(/^\s+/, '').replace(/ /g, '-');
const final_urls = urls.map(url => url + user_input);
message.channel.send(final_urls.join('\n'));
}
});

// manga
client.on('messageCreate', (message) => {
console.log('message received');
if (message.content.startsWith('!manga')) {
const urls = [
'https://mangafire.to/filter?keyword=',
'https://mangareader.to/search?keyword=',
'https://www.mangahere.cc/search?title=',
];
// Modify the regular expression to not replace spaces at the start of the string
const user_input = message.content.slice(6).replace(/^\s+/, '').replace(/ /g, '-');
const final_urls = urls.map(url => url + user_input);
message.channel.send(final_urls.join('\n'));
}
});



client.login(process.env.DISCORD_TOKEN);
