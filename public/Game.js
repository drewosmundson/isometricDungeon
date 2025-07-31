// Game.js - Core game class with enhanced camera controls

import * as THREE from 'https://cdn.jsdelivr.net/npm/three@0.176.0/build/three.module.js';
import { OrbitControls } from 'https://cdn.jsdelivr.net/npm/three@0.176.0/examples/jsm/controls/OrbitControls.js';
import { Level } from './levels/Level.js'

export class Game {
  constructor(canvas) {
    this.canvas = canvas;
    this.scene = new THREE.Scene();

    this.initRenderer();
    this.initCamera();
    this.initLighting();
    this.initControls();

    this.initPlane();
    this.createLevel();


    window.addEventListener('resize', this.handleWindowResize);
    this.handleWindowResize();
  }

  initRenderer() {
    this.renderer = new THREE.WebGLRenderer({
      canvas: this.canvas,
      antialias: true
    });
    this.renderer.setPixelRatio(window.devicePixelRatio);
  }

  initCamera() {
    const aspect = this.canvas.clientWidth / this.canvas.clientHeight;
    this.camera = new THREE.PerspectiveCamera(75, aspect, 0.1, 1000);
    this.camera.position.set(0, 30, 50);
    this.camera.lookAt(0, 0, 0);
  }

  initLighting() {
    const directionalLight = new THREE.DirectionalLight(0xFFF5EE, 1);
    directionalLight.position.set(50, 50, 50);
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.4);
    this.scene.add(directionalLight);
    this.scene.add(ambientLight);
  }

  initControls() {
    this.controls = new OrbitControls(this.camera, this.renderer.domElement);
    this.controls.enableDamping = true;
    this.controls.dampingFactor = 0.05;
    this.controls.rotateSpeed = 0.5;
    this.controls.zoomSpeed = 0.5;
    this.controls.update();
  }


  
  createStartingArea() {
    const geometry = new THREE.PlaneGeometry(100, 100);
    const material = new THREE.MeshStandardMaterial({
      color: 0x808080,
      side: THREE.DoubleSide
    });
    const plane = new THREE.Mesh(geometry, material);
    plane.rotation.x = -Math.PI / 2; // rotate to make it horizontal
    plane.receiveShadow = true;
    this.scene.add(plane);
  }

  createLevel() { 
    const minRooms = 2;
    const maxRooms = 30;
    const levelWidth = 128;
    const levelHeight = 50;
    const level = new Level();
    level.placeRooms();
  }
    










  // game update loop
  update(time) {

  }
  // need to preserve "this" it is safer for callbacks and animation loops
  animate = (time) => {
    this.update(time);
    this.renderer.render(this.scene, this.camera);
  }

  start() {
    this.renderer.setAnimationLoop(this.animate);
  }

  stop() {
    this.renderer.setAnimationLoop(null);
  }

  handleWindowResize = () => {
    const windowWidth = window.innerWidth;
    const windowHeight = window.innerHeight;

    let width = windowWidth;
    let height = (width * 9) / 16;

    if (height > windowHeight) {
      height = windowHeight;
      width = (height * 16) / 9;
    }

    this.canvas.style.width = `${width}px`;
    this.canvas.style.height = `${height}px`;

    this.renderer.setSize(width, height, false);
    this.camera.aspect = width / height;
    this.camera.updateProjectionMatrix();
  }
}