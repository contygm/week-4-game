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
	imagw: "assets/images/Archer.png",
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
	if (choice == player){
		$("#message").html("You can't fight yourself, holmes.");
	} else if (choice == "lana"){
		enemy = lana;
	} else if (choice == "archer"){
		enemy = archer;
	} else if (choice == "ray") {
		enemy = ray;
	} else {
		enemy = pam;
	};
}



$(document).ready(function() {

$('.character').click(function(event){

	var temp = $(this).attr('id');

	//select character
	if (playerSelect == false && enemySelect == false){
		playerSelect = true;
		
		checkPlayer(temp);
		console.log(player);

		//move character to player area
		$("#player-arena .arena-attack").html("<h3>Attack Power: " + player.offense +"</h3>");
		$("#player-arena .arena-img").html("<img src='assets/images/" + player.name + ".png'>");
		$("#player-arena .arena-health").html("<h2>HP: "+ player.health +"</h2>");

	//select enemy
	} else if (playerSelect == true && enemySelect == false) {
		enemySelect = true;

		checkEnemy(temp);
		console.log(enemy);

		//move enemy
		$("#enemy-arena .arena-attack").html("<h3>Attack Power: " + enemy.offense +"</h3>");
		$("#enemy-arena .arena-img").html("<img src='assets/images/" + enemy.name + ".png'>");
		$("#enemy-arena .arena-health").html("<h2>HP: "+ enemy.health +"</h2>");
	} else {
		$("#message").html("Sorry holmes, you have to see it through.");
	};

});

//attack
// * loose health for both
// * player attack ability goes up

// detect when enemy dead
// choose new enemy

//detect when win
// detect when loose

$("#reset").on('click', function () {
	$("#player-arena").empty();
	$("#enemy-arena").empty();
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

