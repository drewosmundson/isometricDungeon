import { Game } from './Game.js';

document.addEventListener('DOMContentLoaded', () => {

  // Main Menu
  const homeScreen = document.getElementById('homeScreen');
  const mainMenuScreen = document.getElementById('mainMenuScreen');
  const singlePlayerMenuButton = document.getElementById('singlePlayerMenuButton');

  // Single Player
  const singlePlayerMenuScreen = document.getElementById('singlePlayerMenuScreen');
  const singlePlayerStartButton = document.getElementById('singlePlayerStartButton');

  // Game Canvas
  const gameCanvas = document.getElementById('gameCanvas');

  const instantStart = 1;
  if (instantStart == 1){
    hideAllScreens();
    homeScreen.style.display = 'none';
    gameCanvas.style.display = 'block';
    // pass in socket for multiplayer
    game = new Game(gameCanvas);
    game.start();
    window.game = game; // For debugging
  }

  // multiplayer setup
  let socket = null;
  try {
    socket = io();
  } catch (error) {
    console.error('Error initializing socket:', error);
  }

  let game;

  // Single Player
  singlePlayerMenuButton?.addEventListener('click', () => {
    hideAllScreens();
    singlePlayerMenuScreen.classList.remove('hidden');
  });

  singlePlayerStartButton?.addEventListener('click', () => {
    hideAllScreens();
    homeScreen.style.display = 'none';
    gameCanvas.style.display = 'block';
    // pass in socket for multiplayer
    game = new Game(gameCanvas);
    game.start();
    window.game = game; // For debugging
  });


  //Util functions
  function hideAllScreens() {
    [ mainMenuScreen, singlePlayerMenuScreen ].forEach(screen => {
      if (screen) screen.classList.add('hidden');
    });
  }

});