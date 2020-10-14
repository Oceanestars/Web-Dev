//Randomize array https://stackoverflow.com/questions/5915096/get-random-item-from-javascript-array
//https://youtu.be/jaVNP3nIAv0

var userscore=0;
var compscore=0;
var usernum=document.getElementById("user");
var compnum=document.getElementById("computer");
var score=document.querySelector(".score");
var res= document.querySelector(".result>p");
var rockvar=document.getElementById("rock");
var papervar=document.getElementById("paper");
var scissorvar=document.getElementById("scissor");
var userchoice;
var compschoice;

var pictures;
pictures = [
	'scissor',
	'paper',
	'rock',
];
function randomval(){
	var pic = pictures[Math.floor(Math.random()*3)];
	// console.log(pic);
	return pic;

}

function win(userchoice,compschoice){
	userscore++;
	usernum.innerHTML=userscore;
	compnum.innerHTML=compscore;
	// console.log(userscore);
	res.innerHTML=userchoice +" is good against "+compschoice+"  You win";
}
function lose(userchoice,compschoice){
	compscore++;
	usernum.innerHTML=userscore;
	compnum.innerHTML=compscore;
	res.innerHTML=userchoice +" is bad against "+compschoice+" You lose";

}
function draw(userchoice,compschoice){
	usernum.innerHTML=userscore;
	compnum.innerHTML=compscore;
	res.innerHTML=userchoice +" versus "+compschoice+" It's a draw";

}
function game(userchoice,compschoice) {
	var compschoice=randomval();
	console.log("userchoice->"+userchoice);
	console.log("compchoice->"+compschoice);
if(userchoice=='paper' && compschoice=='paper')
{
draw(userchoice,compschoice);
}
if(userchoice=='rock' && compschoice=='rock')
{
draw(userchoice,compschoice);
}
if(userchoice=='scissor' && compschoice=='scissor')
{
draw(userchoice,compschoice);
}
if (userchoice=='scissor' && compschoice=='rock')
{
lose(userchoice,compschoice);
}
if (userchoice=='paper' && compschoice=='rock')
{
win(userchoice,compschoice);

}
if (userchoice=='scissor' && compschoice=='paper')
{
win(userchoice,compschoice);
}
if (userchoice=='rock' && compschoice=='paper')
{
lose(userchoice,compschoice);

}
if (userchoice=='rock' && compschoice=='scissor')
{
win(userchoice,compschoice);

}
if (userchoice=='paper' && compschoice=='scissor')
{
lose(userchoice,compschoice);
}
}

function main(){
rockvar.addEventListener('click', function(){
	game("rock");
})
papervar.addEventListener('click', function(){
	game("paper");
})
scissorvar.addEventListener('click', function(){
	game("scissor");
})
}
main();
