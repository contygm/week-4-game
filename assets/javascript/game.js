var lana = {
	name: "Lana",
	health: 180, 
	offense: 6,
	defense: 25,
	image: "assets/images/Lana.png",
};

var archer = {
	name: "Archer",
	health: 200, 
	offense: 5,
	defense: 30,
	imagw: "assets/images/archer.png",
};

var ray = {
	name: "Ray",
	health: 150, 
	offense: 7,
	defense: 20,
	image: "assets/images/Ray.png",
};

var pam = {
	name: "Pam",
	health: 120, 
	offense: 8,
	defense: 15,
	image: "assets/images/Pam.png",
};

var playerSelect = false;
var enemySelect = false;
var deadEnemies = 0;
var player;
var enemy;

function checkPlayer(choice){
	if (choice == "lana"){
		player = lana;
	} else if (choice == "archer"){
		player = archer;
	} else if (choice == "ray") {
		player = ray;
	} else {
		player = pam;
	};
}

function checkEnemy(choice){
	if (choice == "lana"){
		enemy = lana;
	} else if (choice == "archer"){
		enemy = archer;
	} else if (choice == "ray") {
		enemy = ray;
	} else {
		enemy = pam;
	};
}

//select character

$(document).ready(function() {

$('.character').click(function(event){

	var temp = this.attr('id');

	if (playerSelect == false && enemySelect == false){
		playerSelect = true;
		console.log(playerSelect);

		
		checkPlayer(temp);
		console.log(player);

	} else if (playerSelect == true && enemySelect == false) {
		enemySelect = true;
		console.log(enemySelect);

		checkEnemy(temp);
		console.log(enemy);

	} else {
		$("#message").html("Sorry holmes, you have to see it through.");
	};

});

//move character to player area

//select enemy
//move enemy 

//attack
// * loose health for both
// * player attack ability goes up

// detect when enemy dead
// choose new enemy

//detect when win
// detect when loose

$("#reset").on('click', function () {
	$("player-arena").empty();
	$("enemy-arena").empty();
	playerSelect = false;
	enemySelect = false;
	deadEnemies = 0;

	$("#lana img").attr("src", lana.image);
	$("#lana p").html("HP: 180");

	$("#archer img").attr("src", archer.image);
	$("#archer p").html("HP: 200");

	$("#ray img").attr("src", ray.image);
	$("#ray p").html("HP: 120");

	$("#pam img").attr("src", pam.image);
	$("#pam p").html("HP: 150");
});







});

