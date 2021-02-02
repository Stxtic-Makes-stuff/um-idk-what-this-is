const Discord = require('discord.js');
const config = require('./config');
const SnakeGame = require('./snake-game');
const HangmanGame = require('./hangman-game');
const MinesweeperGame = require('./minesweeper');
const Connect4 = require('./connect4');
const Chess = require('./chess');
const express = require('express');

const client = new Discord.Client(["MANAGE_MESSAGES"]);

const snakeGame = new SnakeGame(client);
const hangman = new HangmanGame(client);
const minesweeper = new MinesweeperGame(client);
const connect4 = new Connect4(client);
const chess = new Chess(client);

client.on('ready', () => {
    console.log(`Logged in as ${client.user.tag}!`);
});



