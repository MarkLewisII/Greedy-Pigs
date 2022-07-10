let current_turn = Boolean(Math.round(Math.random()));

function First_Turn() {
	current_turn ? Computer_Play() : Player_Play();
}

//Player functions
let player_tally = 0;
let player_total_score = 0;

function Player_Play() {
	document.getElementById("Roll_Btn").disabled = false;
}

function Player_Score_Totals() {
	player_total_score += player_tally;
}

function Player_Bank_Score() {
	Player_Score_Totals();
	player_tally = 0;
	Render_Player(player_total_score, player_tally);
	Computer_Play();
}

function Player_Round_Score(score) {
	score === 0 ? (player_tally = 0) : (player_tally += score);
	Render_Player(player_total_score, player_tally);
}

function Player_Dice_Roll() {
	let current_roll = Math.floor(Math.random() * 6 + 1);
	document.getElementById("Current_Roll").innerHTML = current_roll;

	if (current_roll === 1) {
		Player_Round_Score(0);
		Computer_Play();
	} else {
		Player_Round_Score(current_roll);
		document.getElementById("Bank_Btn").disabled = false;
	}
}

//Computer
let comp_tally = 0;
let comp_total_score = 0;

function Computer_Play() {
	document.getElementById("Bank_Btn").disabled = true;
	document.getElementById("Roll_Btn").disabled = true;

	let choice = Math.round(Math.random() * 10 + 1);

	choice > 5 ? Computer_Roll() : Computer_Bank();
}

function Computer_Roll() {
	let current_roll = Math.floor(Math.random() * 6 + 1);

	document.getElementById("Current_Roll").innerHTML = current_roll;

	if (current_roll === 1) {
		Computer_Round_Score(0);
		Player_Play();
	} else {
		Computer_Round_Score(current_roll);
		Computer_Play();
	}
}

function Computer_Score_Totals() {
	comp_total_score += comp_tally;
	Render_Computer(comp_total_score, comp_tally);
}

function Computer_Round_Score(score) {
	score === 0 ? (comp_tally = 0) : (comp_tally += score);
	Render_Computer(comp_total_score, comp_tally);
}

function Computer_Bank() {
	Computer_Score_Totals();
	comp_tally = 0;
	Render_Computer(comp_total_score, comp_tally);
	Player_Play();
}

//Rendering
function Render_Player(player_score = 0, player_tally = 0) {
	document.getElementById("Player_Total").innerHTML = `Total: ${player_score}`;
	document.getElementById("Player_Round_Score").innerHTML = `Round Score: ${player_tally}`;

	if (player_score >= 100) {
		alert("Player wins!!");
		document.getElementById("Restart_Bttn").disabled = false;
	}
}

function Render_Computer(comp_total_score, comp_tally) {
	document.getElementById("Computer_Total").innerHTML = `Total: ${comp_total_score}`;
	document.getElementById("Computer_Round_Score").innerHTML = `Round Score: ${comp_tally}`;

	if (comp_total_score >= 100) {
		alert("Computer wins!!");
		document.getElementById("Restart_Bttn").disabled = false;
	}
}

function Endscreen() {
	
}

//Restart
function Restart_Game() {
	player_tally = 0;
	player_total_score = 0;
	comp_tally = 0;
	comp_total_score = 0;
	Render_Computer(0, 0);
	Render_Player(0, 0);
	document.getElementById("Restart_Bttn").disabled = true;
}
