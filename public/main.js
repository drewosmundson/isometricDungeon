import { Game } from './Game.js';

document.addEventListener('DOMContentLoaded', () => {

  const homeScreen = document.getElementById('homeScreen');
  const singlePlayerMenuButton = document.getElementById('singlePlayerMenuButton');
  const settingsMenuButton = document.getElementById('settingsMenuButton');
  // const createLobbyMenuButton = document.getElementById('createLobbyMenuButton');

  // Game Canvas
  const gameCanvas = document.getElementById('gameCanvas');

  // State Variables


  let socket = null;
  let game;

  singlePlayerStartButton?.addEventListener('click', () => {
    startGameForSinglePlayer();
  });



});