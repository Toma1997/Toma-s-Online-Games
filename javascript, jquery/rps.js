
var resetGame = function() {
    your_lifes = 5;
    comp_lifes = 5;
    total_user_wins = 0;
    total_comp_wins = 0;
    consecuent_wins = 0;
    compconsecuent_wins = 0;
    total_tossed_up = 0;
    document.getElementById('user-choice').style.display = 'none';
    document.getElementById('computer-choice').style.display = 'none';
    document.getElementById('result').style.display = 'none';
    document.getElementById("your-wins").innerHTML=total_user_wins;
    document.getElementById("comp-wins").innerHTML=total_comp_wins;
    document.getElementById("tossed-up").innerHTML=total_tossed_up;
    document.getElementById("your-lifes").innerHTML=your_lifes;
    document.getElementById("comp-lifes").innerHTML=comp_lifes;
    document.getElementById("Rock").disabled = false;
    document.getElementById("Paper").disabled = false;
    document.getElementById("Scissors").disabled = false;
    document.getElementById("New_game").disabled = false;
};

resetGame();
       

function getComputerChoice() {
        var result1 = Math.floor((Math.random() * 3));
                
        return result1;
};

var compare= function (userChoice, computerChoice) {
var result = ["The result is a tie!", "You won!", "You lost!"];
    if (userChoice === computerChoice) {
        return result[0]; 
    } 
    else if (userChoice==="Rock") {
        
        if (computerChoice==="Scissors") {
            return result[1];
        } 
        else {
            return result[2];
        }
    } else if (userChoice==="Paper") {
        if (computerChoice==="Rock") {
            return result[1];
        } else {
            return result[2];
        }
    } else if (userChoice==="Scissors") {
        if (computerChoice==="Paper") {
            return result[1];
        } else {
            return result[2];
        };
    };
};

var options = ["Paper", "Rock", 'Scissors'];


document.getElementById("Paper").onclick= function() {
    var userChoice = "Paper";
    var computerChoice = getComputerChoice();

    computerChoice = options[computerChoice];

    var result = compare(userChoice, computerChoice);

    if (result == "The result is a tie!") {
        total_tossed_up++;
        consecuent_wins = 0;
        compconsecuent_wins = 0;
    } else if (result == "You won!") {
        total_user_wins++;
        consecuent_wins++;
        comp_lifes--;

        if (consecuent_wins == 2) {
            consecuent_wins = 0;
            your_lifes++;
        }
    } else {
        total_comp_wins++;
        compconsecuent_wins++;
        your_lifes--;
       
       if (compconsecuent_wins ==2) {
        compconsecuent_wins ==0;
        comp_lifes++;
       }
    }
    document.getElementById('user-choice').style.display = 'inline';
    document.getElementById('computer-choice').style.display = 'inline';
    document.getElementById('result').style.display = 'inline';
    document.getElementById("your-wins").innerHTML=total_user_wins;
    document.getElementById("comp-wins").innerHTML=total_comp_wins;
    document.getElementById("tossed-up").innerHTML=total_tossed_up;
    document.getElementById("your-lifes").innerHTML=your_lifes;
    document.getElementById("comp-lifes").innerHTML=comp_lifes;


    document.getElementById("user-choice").innerHTML="Paper";
    document.getElementById("computer-choice").innerHTML=computerChoice; 
    document.getElementById("result").innerHTML=result;

    checkIfGameIsOver();
};

document.getElementById("Rock").onclick= function() {
    var userChoice = "Rock";
    var computerChoice = getComputerChoice();

    computerChoice = options[computerChoice];

    var result = compare(userChoice, computerChoice);

    if (result == "The result is a tie!") {
        total_tossed_up++;
        consecuent_wins = 0;
        compconsecuent_wins = 0;
    } else if (result == "You won!") {
        total_user_wins++;
        consecuent_wins++;
        comp_lifes--;

        if (consecuent_wins == 2) {
            consecuent_wins = 0;
            your_lifes++;
        }
    } else {
        total_comp_wins++;
        compconsecuent_wins++;
        your_lifes--;
       
       if (compconsecuent_wins ==2) {
        compconsecuent_wins ==0;
        comp_lifes++;
       }
    }
    document.getElementById('user-choice').style.display = 'inline';
    document.getElementById('computer-choice').style.display = 'inline';
    document.getElementById('result').style.display = 'inline';
    document.getElementById("your-wins").innerHTML=total_user_wins;
    document.getElementById("comp-wins").innerHTML=total_comp_wins;
    document.getElementById("tossed-up").innerHTML=total_tossed_up;
    document.getElementById("your-lifes").innerHTML=your_lifes;
    document.getElementById("comp-lifes").innerHTML=comp_lifes;


    document.getElementById("user-choice").innerHTML="Rock";
    document.getElementById("computer-choice").innerHTML=computerChoice; 
    document.getElementById("result").innerHTML=result;

    checkIfGameIsOver();
};

document.getElementById("Scissors").onclick= function() {
    var userChoice = "Scissors";
    var computerChoice = getComputerChoice();

    computerChoice = options[computerChoice];

    var result = compare(userChoice, computerChoice);
    if (result == "The result is a tie!") {
        total_tossed_up++;
        consecuent_wins = 0;
        compconsecuent_wins = 0;
    } else if (result == "You won!") {
        total_user_wins++;
        consecuent_wins++;
        comp_lifes--;

        if (consecuent_wins == 2) {
            consecuent_wins = 0;
            your_lifes++;
        }
    } else {
        total_comp_wins++;
        compconsecuent_wins++;
        your_lifes--;
       
       if (compconsecuent_wins ==2) {
        compconsecuent_wins ==0;
        comp_lifes++;
       }
    }
    document.getElementById('user-choice').style.display = 'inline';
    document.getElementById('computer-choice').style.display = 'inline';
    document.getElementById('result').style.display = 'inline';
    document.getElementById("your-wins").innerHTML=total_user_wins;
    document.getElementById("comp-wins").innerHTML=total_comp_wins;
    document.getElementById("tossed-up").innerHTML=total_tossed_up;
    document.getElementById("your-lifes").innerHTML=your_lifes;
    document.getElementById("comp-lifes").innerHTML=comp_lifes;

        
    document.getElementById("user-choice").innerHTML="Scissors";
    document.getElementById("computer-choice").innerHTML=computerChoice; 
    document.getElementById("result").innerHTML=result;

    checkIfGameIsOver();
};

var checkIfGameIsOver = function() {

    if (your_lifes == 0) {
       
        document.getElementById("Gameover1").style.display = "block";
        document.getElementById("Rock").disabled = true;
        document.getElementById("Paper").disabled = true;
        document.getElementById("Scissors").disabled = true;
        document.getElementById("New_game").disabled = true;

        


    } else if (comp_lifes == 0) {
      
        document.getElementById("Gameover2").style.display = "block";
        document.getElementById("Rock").disabled = true;
        document.getElementById("Paper").disabled = true;
        document.getElementById("Scissors").disabled = true;
        document.getElementById("New_game").disabled = true;

        
    }
};


var hideModals = function() {
    document.getElementById('Gameover1').style.display = 'none'
    document.getElementById('Gameover2').style.display = 'none'
};

var exit = function() {
    window.location.href = "index.html"
}