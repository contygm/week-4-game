var lana = {
	name: "Lana",
	health: 180, 
	offense: 6,
	defense: 25,
	image: "assets/images/Lana.png",
	id: "lana",
};

var archer = {
	name: "Archer",
	health: 200, 
	offense: 5,
	defense: 30,
	image: "assets/images/Archer.png",
	id: "archer",
};

var ray = {
	name: "Ray",
	health: 150, 
	offense: 7,
	defense: 20,
	image: "assets/images/Ray.png",
	id: "ray",
};

var pam = {
	name: "Pam",
	health: 200, 
	offense: 10,
	defense: 15,
	image: "assets/images/Pam.png",
	id: "pam",
};

var playerSelect = false;
var enemySelect = false;
var deadEnemies = 0;
var player;
var enemy;
var attackPower;

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
	playerSelect = true;
};

function checkEnemy(choice){
	if (choice == player.id){
		$("#message").html("You can't fight yourself, holmes.");
	} else if (choice == "lana"){
		enemy = lana;
		enemySelect = true;
	} else if (choice == "archer"){
		enemy = archer;
		enemySelect = true;
	} else if (choice == "ray") {
		enemy = ray;
		enemySelect = true;
	} else {
		enemy = pam;
		enemySelect = true;
	};
};


// reset
function reset() {
	location.reload();
};

function checkStatus(status){
	if (status === "dead"){
		return false;
	} else {
		return true;
	}
}

function checkHealth () {
	
	// detect when loose
	if (player.health <= 0){
		$("#message").html("You cost us the mission!");
		setTimeout(reset, 2000);
	
	// detect when enemy dead
	} 

	if (enemy.health <= 0){
		deadEnemies++;
		console.log(deadEnemies);
		// change status to dead
		$("#"+ enemy.id).attr('status','dead');

		$("#message").html("You might just get a bonus.");
			enemy;

		enemySelect = false;
		$("#enemy-arena .arena-attack").empty();
		$("#enemy-arena .arena-img").empty();
		$("#enemy-arena .arena-health").empty();


	} 
	
	//detect when win
	if (deadEnemies === 3){
			$("#message").html("Congratulations, you can keep your job.");
			setTimeout(reset, 2000);
	} 
}




$(document).ready(function() {

$('.character').click(function(event){

	var tempName = $(this).attr('id');
	var tempStatus = $(this).attr('status')

	//select character
	if (playerSelect === false && enemySelect === false){
		
		checkPlayer(tempName);
		console.log(player);

		attackPower = player.offense;

		//move character to player area
		$("#player-arena .arena-attack").html("<h3>Attack Power: " + player.offense +"</h3>");
		$("#player-arena .arena-img").html("<img src='assets/images/" + player.name + ".png'>");
		$("#player-arena .arena-health").html("<h2>HP: "+ player.health +"</h2>");

	//select enemy
	} else if (!checkStatus(tempStatus)) {
		$("#message").html("Pick a new opponent.");

	} else if (playerSelect === true && enemySelect === false) {
		
		checkEnemy(tempName);
		$("#message").empty();
		console.log(enemy);

		//move enemy
		$("#enemy-arena .arena-attack").html("<h3>Attack Power: " + enemy.defense +"</h3>");
		$("#enemy-arena .arena-img").html("<img src='assets/images/" + enemy.name + ".png'>");
		$("#enemy-arena .arena-health").html("<h2>HP: "+ enemy.health +"</h2>");
	} else {
		$("#message").html("Sorry holmes, you have to see it through.");
	};

});


//attack
$('#attack').click(function(){
	if (playerSelect === false || enemySelect === false){
		$("#message").html("The dossier said pick a character and enemy before you start.");
	} else if (player.health > 0 && enemy.health > 0) {

		// * loose health for both
		enemy.health = enemy.health - player.offense;
		player.health = player.health - enemy.defense;

		$("#enemy-arena .arena-health").html("<h2>HP: "+ enemy.health +"</h2>");
		$("#player-arena .arena-health").html("<h2>HP: "+ player.health +"</h2>");

		// * player attack ability goes up
		player.offense = player.offense+attackPower;

		$("#player-arena .arena-attack").html("<h3>Attack Power: " + player.offense +"</h3>");
	}

	checkHealth();
});


$('#reset').click(reset);

});

