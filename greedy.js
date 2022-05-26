var current_turn = Boolean(Math.round(Math.random()));

function First_Turn() {
	current_turn ? Computer_Play() : Player_Play();
}

//Player functions

var player_tally = 0;
var player_score = 0;

function Player_Play() {
	document.getElementById("Roll_Btn").disabled = false;
}

function Player_Score_Totals() {
	player_score += player_tally;
	Render_Player(player_score, player_tally);
}

function Player_Bank_Score() {
    Player_Score_Totals();
    Computer_Play();
}

function Player_Round_Score(score) {
	score === 0 ? (player_tally = 0) : (player_tally += score);

	Render_Player(player_score, player_tally);
}

function Player_Dice_Roll() {
	let current_roll = Math.floor(Math.random() * 6 + 1);

	if (current_roll === 1) {
		Player_Round_Score(0);
		Computer_Play();
	} else {
		Player_Round_Score(current_roll);
		document.getElementById("Bank_Btn").disabled = false;
	}
}

//Computer

var comp_tally = 0;
var comp_score = 0;

function Computer_Play() {
	document.getElementById("Bank_Btn").disabled = true;
	document.getElementById("Roll_Btn").disabled = true;

	let choice = Math.round(Math.random());

	choice === 0 ? Computer_Roll() : Computer_Bank();
}

function Computer_Roll() {
	let current_roll = Math.floor(Math.random() * 6 + 1);

	if (current_roll === 1) {
		Computer_Round_Score(0);
		Player_Play();
	} else {
        Computer_Round_Score(current_roll);
        Computer_Roll();
	}
}

function Computer_Score_Totals() {
	comp_score += comp_tally;
	Render_Computer(comp_score, comp_tally);
}

function Computer_Round_Score(score) {
	(score === 0) ? (comp_tally = 0) : (comp_tally += score);
}

function Computer_Bank() {
	Computer_Score_Totals();
	comp_score = 0;
	Player_Play();
}

//Rendering
function Render_Player(comp_score = 0, comp_tally = 0) {
	document.getElementById("Player_Total").innerHTML = `Total: ${comp_score}`;
	document.getElementById("Player_Round_Score").innerHTML = `Round Score: ${comp_tally}`;
}

function Render_Computer(comp_score = 0, comp_tally = 0) {
	document.getElementById("Computer_Total").innerHTML = `Total: ${comp_score}`;
	document.getElementById("Computer_Round_Score").innerHTML = `Round Score: ${comp_tally}`;
}