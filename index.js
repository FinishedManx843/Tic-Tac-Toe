//JS file for tic Tac Toe

/*document.getElementById("one").src = "white.png"
document.getElementById("two").src = "white.png"
document.getElementById("three").src = "white.png"
document.getElementById("four").src = "white.png"
document.getElementById("five").src = "white.png"
document.getElementById("six").src = "white.png"
document.getElementById("seven").src = "white.png"
document.getElementById("eight").src = "white.png"
document.getElementById("nine").src = "white.png"
var turn = 1;
var onene = true;
var twoen = true;
var threeen = true;
var fouren = true;
var fiveen = true;
var sixen = true;
var sevenen = true;
var eighten = true;
var nineen = true;
var one1 = document.getElementById("one").src;
var two2 = document.getElementById("two").src;
var three3 = document.getElementById("three").src;
var four4 = document.getElementById("four").src;
var five5 = document.getElementById("five").src;
var six6 = document.getElementById("six").src;
var seven7 = document.getElementById("seven").src;
var eight8 = document.getElementById("eight").src;
var nine9 = document.getElementById("nine").src;

var temp = 0;

*/



/*document.getElementById("one").src = "white.png"
document.getElementById("two").src = "white.png"
document.getElementById("three").src = "white.png"
document.getElementById("four").src = "white.png"
document.getElementById("five").src = "white.png"
document.getElementById("six").src = "white.png"
document.getElementById("seven").src = "white.png"
document.getElementById("eight").src = "white.png"
document.getElementById("nine").src = "white.png"*/
var turn;

var onene;
var twoen;
var threeen;
var fouren;
var fiveen;
var sixen;
var sevenen;
var eighten;
var nineen;
var one1;
var two2;
var three3;
var four4;
var five5;
var six6;
var seven7;
var eight8;
var nine9;
/*one1 = document.getElementById("one").src;
two2 = document.getElementById("two").src;
three3 = document.getElementById("three").src;
four4 = document.getElementById("four").src;
five5 = document.getElementById("five").src;
six6 = document.getElementById("six").src;
seven7 = document.getElementById("seven").src;
eight8 = document.getElementById("eight").src;
nine9 = document.getElementById("nine").src;*/

var temp;

function reset() {
    //does not work redo
    document.getElementById("player").innerHTML = "Player ";
document.getElementById("one").src = "white.png"
document.getElementById("two").src = "white.png"
document.getElementById("three").src = "white.png"
document.getElementById("four").src = "white.png"
document.getElementById("five").src = "white.png"
document.getElementById("six").src = "white.png"
document.getElementById("seven").src = "white.png"
document.getElementById("eight").src = "white.png"
document.getElementById("nine").src = "white.png"
turn = 1;
onene = true;
twoen = true;
threeen = true;
fouren = true;
fiveen = true;
sixen = true;
sevenen = true;
eighten = true;
nineen = true;
one1 = "white.png";
two2 = "white.png";
three3 = "white.png";
four4 = "white.png";
five5 = "white.png";
six6 = "white.png";
seven7 = "white.png";
eight8 = "white.png";
nine9 = "white.png";

document.getElementById("turn").innerHTML = turn;
}

for (i = 0; i<1000; i++) {

document.getElementById("turn").innerHTML = turn;
function one() {
    
    
    if (onene == true) {
        if (turn == 1) {
            document.getElementById("one").src = "X.png";
            turn = 2;
            onene = false;
            console.log(turn);
            one1 = "X.png";
        }
        else if (turn == 2) {
            document.getElementById("one").src = "O.png";
            turn = 1;
            console.log(turn);
            onene = false;
            one1 = "O.png";
        } 
        
        
        document.getElementById("turn").innerHTML = turn;
    }
    checkWin();
}
    function two() {
        
        if (twoen == true) {
            if (turn == 1) {
                document.getElementById("two").src = "X.png";
                turn = 2;
                twoen = false;
                console.log(turn);
                two2 = "X.png";
            }
            else if (turn == 2) {
                document.getElementById("two").src = "O.png";
                turn = 1;
                console.log(turn);
                twoen = false;
                two2 = "O.png";
            }
			document.getElementById("turn").innerHTML = turn;
        }
        checkWin();
    }
   
    function three() {
        
        if (threeen == true) {
            if (turn == 1) {
                document.getElementById("three").src = "X.png";
                turn = 2;
                threeen = false;
                console.log(turn);
                three3 = "X.png";
    
            }
            else if (turn == 2) {
                document.getElementById("three").src = "O.png";
                turn = 1;
                console.log(turn);
                threeen = false;
                three3 = "O.png";
            }
			document.getElementById("turn").innerHTML = turn;
        }
        checkWin();
    }
    
    function four() {
       
        if (fouren == true) {
            if (turn == 1) {
                document.getElementById("four").src = "X.png";
                turn = 2;
                fouren = false;
                console.log(turn);
                four4 = "X.png";
    
            }
            else if (turn == 2) {
                document.getElementById("four").src = "O.png";
                turn = 1;
                console.log(turn);
                fouren = false;
                four4 = "O.png";
            }
			document.getElementById("turn").innerHTML = turn;
        }
        checkWin();
    }
    
    function five() {
        
        if (fiveen == true) {
            if (turn == 1) {
                document.getElementById("five").src = "X.png";
                turn = 2;
                fiveen = false;
                console.log(turn);
                five5 = "X.png";
    
            }
            else if (turn == 2) {
                document.getElementById("five").src = "O.png";
                turn = 1;
                console.log(turn);
                fiveen = false;
                five5 = "O.png";
            }
			document.getElementById("turn").innerHTML = turn;
        }
        checkWin();
    }
    
    function six() {
        
        if (sixen == true) {
            if (turn == 1) {
                document.getElementById("six").src = "X.png";
                turn = 2;
                sixen = false;
                console.log(turn);
                six6 = "X.png";
    
            }
            else if (turn == 2) {
                document.getElementById("six").src = "O.png";
                turn = 1;
                console.log(turn);
                sixen = false;
                six6 = "O.png";
            }
			document.getElementById("turn").innerHTML = turn;
        }
        
        checkWin();
    }

    function seven() {
        
        if (sevenen == true) {
            if (turn == 1) {
                document.getElementById("seven").src = "X.png";
                turn = 2;
                sevenen = false;
                console.log(turn);
                seven7 = "X.png";
            }
            else if (turn == 2) {
                document.getElementById("seven").src = "O.png";
                turn = 1;
                console.log(turn);
                sevenen = false;
                seven7 = "O.png";
            }
			document.getElementById("turn").innerHTML = turn;
        }
        checkWin();
    }
    
    function eight() {
        
        if (eighten == true) {
            if (turn == 1) {
                document.getElementById("eight").src = "X.png";
                turn = 2;
                eighten = false;
                console.log(turn);
                eight8 = "X.png";
            }
            else if (turn == 2) {
                document.getElementById("eight").src = "O.png";
                turn = 1;
                console.log(turn);
                eighten = false;
                eight8 = "O.png";
            }
			document.getElementById("turn").innerHTML = turn;
        }
        checkWin();
    }
    
    function nine() {
        
        if (nineen == true) {
            if (turn == 1) {
                document.getElementById("nine").src = "X.png";
                turn = 2;
                nineen = false;
                console.log(turn);
                nine9 = "X.png";
            }
            else if (turn == 2) {
                document.getElementById("nine").src = "O.png";
                turn = 1;
                console.log(turn);
                nineen = false;
                nine9 = "O.png";
            }
			document.getElementById("turn").innerHTML = turn;
        }
        checkWin();
    }
    
    function checkWin() {
// may need to change one1 to a value in each if statement other than the image source because that is long and cant get it. 
if((one1 == "X.png" || one1 == "O.png") && (two2 == "X.png" || two2 == "O.png") && (three3 == "X.png" || three3 == "O.png") && (four4 == "X.png" || four4 == "O.png") && (five5 == "X.png" || five5 == "O.png") && (six6 == "X.png" || six6 == "O.png") && (seven7 == "X.png" || seven7 == "O.png") && (eight8 == "X.png" || eight8 == "O.png") && (nine9 == "X.png" || nine9 == "O.png")) {
    document.getElementById("player").innerHTML = "";
    disable(); 
    document.getElementById("turn").innerHTML = "It's a Draw!";
disable();
}
//horizonatal X-----------------------------------------------------------------------------------------
        if(one1 == "X.png" && two2 == "X.png" && three3 == "X.png"){
            document.getElementById("player").innerHTML = "Player ";
            document.getElementById("turn").innerHTML = "1 Wins!";
            disable();
        }
        else if(four4 == "X.png" && five5 == "X.png" && six6 == "X.png"){
            document.getElementById("player").innerHTML = "Player ";
            document.getElementById("turn").innerHTML = "1 Wins!";
            disable();
        }
        else if(seven7 == "X.png" && eight8 == "X.png" && nine9 == "X.png"){
            document.getElementById("player").innerHTML = "Player ";
            document.getElementById("turn").innerHTML = "1 Wins!";
            disable();
        }

//Vertical X-------------------------------------------------------------------------------------

else if(one1 == "X.png" && four4 == "X.png" && seven7 == "X.png"){
    document.getElementById("player").innerHTML = "Player ";
    document.getElementById("turn").innerHTML = "1 Wins!";
    disable();
}
else if(two2 == "X.png" && five5 == "X.png" && eight8 == "X.png"){
    document.getElementById("player").innerHTML = "Player ";
    document.getElementById("turn").innerHTML = "1 Wins!";
    disable();
}
else if(three3 == "X.png" && six6 == "X.png" && nine9 == "X.png"){
    document.getElementById("player").innerHTML = "Player ";
    document.getElementById("turn").innerHTML = "1 Wins!";
    disable();
}

//Diagnol X------------------------------------------------------------------------------------------
else if(one1 == "X.png" && five5 == "X.png" && nine9 == "X.png"){
    document.getElementById("player").innerHTML = "Player "; 
    document.getElementById("turn").innerHTML = "1 Wins!";
    disable();
}
else if(three3 == "X.png" && five5 == "X.png" && seven7 == "X.png"){
    document.getElementById("player").innerHTML = "Player ";   
    document.getElementById("turn").innerHTML = "1 Wins!";
    disable();
}

//horizonatal O-----------------------------------------------------------------------------------------
if(one1 == "O.png" && two2 == "O.png" && three3 == "O.png"){
    document.getElementById("player").innerHTML = "Player ";   
    document.getElementById("turn").innerHTML = "2 Wins!";
    disable();
}
else if(four4 == "O.png" && five5 == "O.png" && six6 == "O.png"){
    document.getElementById("player").innerHTML = "Player ";
    document.getElementById("turn").innerHTML = "2 Wins!";
    disable();
}
else if(seven7 == "O.png" && eight8 == "O.png" && nine9 == "O.png"){
    document.getElementById("player").innerHTML = "Player ";
    document.getElementById("turn").innerHTML = "2 Wins!";
    disable();
}

//Vertical O-------------------------------------------------------------------------------------

else if(one1 == "O.png" && four4 == "O.png" && seven7 == "O.png"){
    document.getElementById("player").innerHTML = "Player ";
document.getElementById("turn").innerHTML = "2 Wins!";
disable();
}
else if(two2 == "O.png" && five5 == "O.png" && eight8 == "O.png"){
    document.getElementById("player").innerHTML = "Player ";
document.getElementById("turn").innerHTML = "2 Wins!";
disable();
}
else if(three3 == "O.png" && six6 == "O.png" && nine9 == "O.png"){
    document.getElementById("player").innerHTML = "Player ";
document.getElementById("turn").innerHTML = "2 Wins!";
disable();
}

//Diagnol O------------------------------------------------------------------------------------------
else if(one1 == "O.png" && five5 == "O.png" && nine9 == "O.png"){
    document.getElementById("player").innerHTML = "Player ";
document.getElementById("turn").innerHTML = "2 Wins!";
disable();
}
else if(three3 == "O.png" && five5 == "O.png" && seven7 == "O.png"){
    document.getElementById("player").innerHTML = "Player ";
document.getElementById("turn").innerHTML = "2 Wins!";
disable();
}


//draw----------------------------

    }

   function disable() {
    onene = false;
    twoen = false;
    threeen = false;
    fouren = false;
    fiveen = false;
    sixen = false;
    sevenen = false;
    eighten = false;
    nineen = false;

   }
}

