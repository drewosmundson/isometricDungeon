





// place rooms random size and location

// create a delunty Triangulation graph between the rooms

//  use boyerwatson algorithm for this triangulation

// from  triangulation graph create  a Minnimum spanning tree

// use prims algorithim to create this MST

// randomly pick some of the edges not in the MST to also be hallways to allow for loops 10 - 20% chance

// use A*  search to find the optimal path between the points connected by the MST and randomly chosen points in on a grid


export class Level {
  constructor(scene, minRooms, maxRooms, levelWidth, levelHeight) {
    this.scene = scene;
    this.minRooms = minRooms;
    this.maxRooms = maxRooms;
    this.levelSize = levelWidth;
    this.levelHeight = levelHeight;
  }

  getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }
  placeRooms() {
    const numberOfRooms = this.getRandomInt(this.minRooms, this.maxRooms)
    for(let i = 0; i < numberOfRooms; i++){
      const geometry = new THREE.BoxGeometry( 1, 1, 1 ); 
      const material = new THREE.MeshBasicMaterial( {color: 0x00ff00} ); 
      const cube = new THREE.Mesh( geometry, material );
      const x = this.getRandomInt(0, this.levelSize);
      const y = this.getRandomInt(0, this.levelHeight);
      const z = this.getRandomInt(0, this.levelSize);
      cube.position.set(x, y, z);
      this.scene.add( cube );
    }
  }
}
