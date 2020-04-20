//Similar as lab we did in lab
var rockpaper = 0;

var music = 0;

var brainteaser = 0;

function quizcheck() {

	var answer1 = document.getElementById("question1").value;
	console.log("Answer 1: " + answer1);

	var answer2 = document.getElementById("question2").value;
	console.log("Answer 2: " + answer2);

	var answer3 = document.getElementById("question3").value;
	console.log("Answer 3: " + answer3);

	var answer4 = document.getElementById("question4").value;
	console.log("Answer 4: " + answer4);


	if(answer1==0 || answer2==0 || answer3==0||answer4==0){ //Alerts the user if they did not answer question 3.
		alert("You have not answered all of the questions");
	}

	if(answer1 > 0 && answer2 > 0 && answer3 > 0 && answer4 > 0){

//first question
		if (answer1==1){
			rockpaper++;
		}

		if (answer1==2){
			music++;
		}

		if (answer1==3){
			brainteaser++;
		}

// Second question
	 	if (answer2==1){
			music++;
		}

		if (answer2==2){
			rockpaper++;
		}

		if (answer2==3){
			brainteaser++;
		}

//third question
		if (answer3==1){
			rockpaper++;
		}

		if (answer3==2){
			brainteaser++;
		}

		//fourth question
			if (answer4==1){
				brainteaser++;
			}

			if (answer4==2){
				music++;
			}




		document.getElementById("rockpaperdisplay").innerHTML = "Likely to play rock paper scissor: "+rockpaper;

		document.getElementById("musicdisplay").innerHTML = "Likely to play music game: "+music;
		document.getElementById("brainteaserdisplay").innerHTML = "Likely to play a brain teaser: "+brainteaser;


		if(rockpaper>music && rockpaper>brainteaser){
		document.getElementById("Conclusion").innerHTML= "Please click this link to play rock paper scissor";
		document.getElementById("Conclusion").href = "../html/scissor.html";
		document.getElementById("rockpaperdisplay").style.color = "magenta";

		}
		else if(rockpaper==2 && music==2 && brainteaser==0)
		{
			document.getElementById("Conclusion").innerHTML= "Please click this link to play rock paper scissor";
			document.getElementById("Conclusion").href = "../html/scissor.html";
			document.getElementById("musicdisplay").style.color = "magenta";
		}
		else if (music > rockpaper && music > brainteaser){

		document.getElementById("Conclusion").innerHTML= "Please click this link to play music";
		document.getElementById("Conclusion").href = "../html/drum.html";
		document.getElementById("musicdisplay").style.color = "magenta";

		}

		else if(brainteaser>rockpaper && brainteaser>music){
			document.getElementById("Conclusion").innerHTML= "Please click this link to play a brain teaser";
			document.getElementById("Conclusion").href = "../html/mind.html";
			document.getElementById("brainteaserdisplay").style.color = "magenta";
			// console.log("brainteaser"+brainteaser);
		}

// console.log("brainteaser"+brainteaser);
		rockpaper = 0;
		brainteaser = 0;
		music = 0;
	}

}
