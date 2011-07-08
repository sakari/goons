Crafty.scene("main", function () {
		 function generateWorld() {
		     Crafty.sprite(16, "sprites/ground.png", {
				       ground0 : [0, 0],
				       ground1 : [1, 0],
				       ground2 : [2, 0],
				       ground3 : [3, 0],
				       ground4 : [4, 0],
				       ground5 : [5, 0],
				       ground6 : [6, 0],
				       ground7 : [7, 0],
				       ground8 : [8, 0],
				       ground9 : [9, 0]
				   });
		     for (var i = 0; i < 25; i++) {
			 for (var j = 0; j < 21; j++) {
			     var groundType = Crafty.randRange(0, 9);
			     Crafty.e("2D, DOM, ground" + groundType)
				 .attr({ x: i * 16, y: j * 16, z:1 });
			 }
		     }
		 }
		 generateWorld();
		 //##src/trooper.js
		 var player = Crafty.e("2D, DOM, blue_trooper, player_trooper")
		     .attr({ x: 100, y: 100, z:2 })
		     .player_trooper();

		 // var trooper1 = Crafty.e("2D, DOM, blue_trooper, ai_trooper")
		 //     .attr({ x: 110, y: 110, z:2 })
		 //     .ai_trooper()
		 //     .aiAbreast.abreast(player, 50, 1);

		 var trooper2 = Crafty.e("2D, DOM, blue_trooper, ai_trooper")
		     .attr({ x: 320, y: 120, z:2 })
		     .ai_trooper()
		     .aiFollow.follow(player, 30, 1);
	     });