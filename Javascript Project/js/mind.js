// https://www.w3schools.com/jsref/prop_checkbox_checked.asp
// https://stackoverflow.com/questions/10134036/how-to-change-the-css-to-affect-only-id-or-class-instead-of-inputtype
//https://www.w3schools.com/jsref/met_win_prompt.asp

correct=0;
wrong=0;
var add2 = document.getElementById("result");

function random() {

var x = Math.floor((Math.random() * 100) + 1);
return(x);
}
function random2() {

var y = Math.floor((Math.random() * 100) + 1);
return(y);
}



function add() {

firstnum=random();
secnum=random2();
rightanswer=firstnum + secnum;
Answer=window.prompt(  firstnum + "+"  + secnum +  " = ", 0);
ans();
add2.src="Add.gif";
}


function subtract() {

firstnum=random();
secnum=random2();
rightanswer=firstnum - secnum;
Answer=window.prompt(  firstnum + "-"  + secnum+  " = ", 0);
ans();
add2.src="sub.gif";
}


function divide() {

firstnum=random()+1;
secnum=random2()+1;
rightanswer=firstnum / secnum;
rightanswer=Math.round(rightanswer)
window.alert("Please round your answer off:\n");
Answer=window.prompt(  firstnum + "/"  + secnum +  " = ", 0);
ans();
add2.src="div.gif";
}


function multiply() {

firstnum=random();
secnum=random2();
rightanswer=firstnum * secnum; //calculate the right answer
Answer=window.prompt(  firstnum + "*"  + secnum +  " = ", 0); // prompt when you clikc multiply(0 is the placeholder of an answer)
ans(); //calling ans to check if the user input is the same as the rightanswer
add2.src="mult.gif";
}


function check() { //Check score button
if ((correct+wrong) != 0) {
score = "" + ((correct / (correct + wrong)) * 100);  //percentage
score = score.substring(0,4) + "%";
alert("YOUR SCORE:  " + score + "\n"
+ correct + " correct\n"
+ wrong + " incorrect")
}
else alert("You have not completed any exercises yet."); //if you check your score and haven't answered any questions
}


function ans() { // display after you answer the question
if (Answer == rightanswer) {
correct++;
msg = "Congratulations, your answer is correct.";
}
else {
wrong++;
msg = "Oops!  " + Answer + " is incorrect.\n\n"
+ "The correct answer was " +rightanswer + ".";
   }
score = "" + ((correct / (correct + wrong)) * 100);
score = score.substring(0,4) + "%";
alert(msg + "\n\nYOUR SCORE:  " + score + "\n"
+ correct + " correct\n"
+ wrong + " incorrect")
}
