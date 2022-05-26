var tally = 0;
var game_score = 0;

function Score_Totals() {
    game_score +=  tally;
    document.getElementById("Player_Total").innerHTML = `Total: ${game_score}`;
}

function Round_Score(score) {
    // var tally = 0;    
    if (score === 0) {
        tally = 0;
    } else {
        tally += score;
    }

    document.getElementById("Player_Round_Score").innerHTML = `Round Score: ${tally}`;

    Score_Totals();
}

function Dice_Roll() {
    let current_roll = Math.floor((Math.random() * 6) + 1);

    if (current_roll === 1) {
        Round_Score(0);
    } else {
        Round_Score(current_roll);
    }
}