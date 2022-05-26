// function ScoreTotals() {
//     let
// }
function Round_Score(score) {
    var tally = 0;
    
        tally += score;
    document.getElementById("Player_Round_Score").innerHTML = `Round Score: ${tally}`;
}

function Dice_Roll() {
    let current_roll = Math.floor((Math.random() * 6) + 1);

    Round_Score(current_roll);
}