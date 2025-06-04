$(function () {
  // initialize canvas and context when able to
  canvas = document.getElementById("canvas");
  ctx = canvas.getContext("2d");
  window.addEventListener("load", loadJson);

  function setup() {
    if (firstTimeSetup) {
      halleImage = document.getElementById("player");
      projectileImage = document.getElementById("projectile");
      cannonImage = document.getElementById("cannon");
      $(document).on("keydown", handleKeyDown);
      $(document).on("keyup", handleKeyUp);
      firstTimeSetup = false;
      //start game
      setInterval(main, 1000 / frameRate);
    }

    // Create walls - do not delete or modify this code
    createPlatform(-50, -50, canvas.width + 100, 50); // top wall
    createPlatform(-50, canvas.height - 10, canvas.width + 100, 200, "navy"); // bottom wall
    createPlatform(-50, -50, 50, canvas.height + 500); // left wall
    createPlatform(canvas.width, -50, 50, canvas.height + 100); // right wall

    //////////////////////////////////
    // ONLY CHANGE BELOW THIS POINT //
    //////////////////////////////////

    // TODO 1 - Enable the Grid
    toggleGrid();


    // TODO 2 - Create Platforms
createPlatform(700, 0, 20, 300);
createPlatform(700, 450, 20, 300);
createPlatform(450, 510, 20, 300);
createPlatform(210, 350, 20, 700);
createPlatform(1100, 0, 20, 650);
createPlatform(450, 0, 20, 300);
createPlatform(0, 700, 50, 50, "red");
createPlatform(130, 650, 50, 50, "red");
createPlatform(0, 530, 50, 50, "red");
createPlatform(130, 450, 50, 50, "red");
createPlatform(395, 600, 50, 50, "blue");
createPlatform(260, 500, 50, 50, "blue");
createPlatform(580, 550, 50, 50, "yellow");
createPlatform(1050, 600, 50, 50, "green");
createPlatform(880, 350, 50, 50, "orange");





    // TODO 3 - Create Collectables
createCollectable("steve", 1350, 50);
createCollectable("diamond", 200, 170, 0.5, 0.7);
createCollectable("max", 699, 410, 0.5, 0.7);
createCollectable("database", 900, 290, 0.5, 0.7);

    
    // TODO 4 - Create Cannons
createCannon("top", 300, 2000);
createCannon("top", 700, 2000);
createCannon("top", 1000, 2000);
createCannon("right", 200, 2000);
createCannon("right", 400, 2000);
createCannon("right", 750, 2000);
    
    
    //////////////////////////////////
    // ONLY CHANGE ABOVE THIS POINT //
    //////////////////////////////////
  }

  registerSetup(setup);
});
