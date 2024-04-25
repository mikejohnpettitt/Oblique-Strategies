
// JavaScript Document


var currentQuestion = 0;
var isflipped = 0;
var currentHowTo = 4;

var playerList = [];

var currentPlayer = -1;


function progressPlayer() {
	
	if (playerList == 0) {
		/*do nothing, no players*/
	} else {
	
	if (currentPlayer == playerList.length - 1) {
		currentPlayer = 0;
	} else {
		currentPlayer++;
	}
	var pawnList = document.getElementsByClassName("pawn-container");
	
	for (i=0; i<pawnList.length; i++) {
		pawnList[i].classList.remove("active");
		pawnList[i].classList.add("inactive");
	}
	
	pawnList[currentPlayer].classList.remove("inactive");
	pawnList[currentPlayer].classList.add("active");
}
}

function hide(a) {
	a.classList.remove("unhidden");
	a.classList.add("hidden");
}

function unhide(a) {
	a.classList.add("unhidden");
	a.classList.remove("hidden");
}


function populatePawns() {
	
	if (playerList.length > 8) {
		/*do nothing, too many players; max 9*/
	} else {
	
	try{ var playerName = document.getElementById("player-name").value;} catch(error) {};
	
	if (playerName == "") {
		playerName = "Player " + playerNumber;
	} else {
	var playerNumber = playerList.push(playerName);
	
	var pawnContainer = document.getElementById("pawns-all").innerHTML;
	
	document.getElementById("pawns-all").innerHTML = pawnContainer + "<div class='pawn-container'>\n      <div class='player-pawn'>\n        <div class='player-" + playerNumber + "'></div>\n      </div>\n      <div class='pawn-shadow'></div>\n\t\t\t<div class='player-name'>" + playerName + "</div>\n\t\t</div>\n\t\t\n\t\t";
	
	document.getElementById("player-name").value = "";
		}
		}
}

/*triggers onclick on enter*/

function addEnter() {
// Get the input field
var input = document.getElementById("player-name");

// Execute a function when the user presses a key on the keyboard
input.addEventListener("keypress", function(event) {
  // If the user presses the "Enter" key on the keyboard
  if (event.key === "Enter") {
    // Cancel the default action, if needed
    event.preventDefault();
    // Trigger the button element with a click
    document.getElementById("add-player").click();
  }
});
	}
  
function unopenIt(a) {
	a.classList.remove("open");
	a.classList.add("unopen");
}

function openIt(a) {
	a.classList.add("open");
	a.classList.remove("unopen");
}


var currentQuestion = 0;
var isflipped = 0;

/*complete question bank, no categories*/
var subjects = ["Remove specifics and convert to ambiguities","Think of the radio","Don't be frightened of cliches","Allow an easement (an easement is the abandonment of a stricture)","What is the reality of the situation?","Simple subtraction","Are there sections? Consider transitions","Remove specifics and convert to ambiguities","Turn it upside down","Go slowly all the way round the outside","A line has two sides","Infinitesimal gradations","Make an exhaustive list of everything you might do and do the last thing on the list","Change instrument roles","Into the impossible","Accretion","Ask people to work against their better judgment","Disconnect from desire","Take away the elements in order of apparent non-importance","Emphasize repetitions","Don't be afraid of things because they're easy to do","Is there something missing?","Don't be frightened to display your talents","Use unqualified people","Breathe more deeply","How would you have done it?","Honor thy error as a hidden intention","Emphasize differences","Only one element of each kind","Do nothing for as long as possible","Bridges -build -burn","Water","You don't have to be ashamed of using your own ideas","Make a sudden, destructive unpredictable action; incorporate","Tidy up","Consult other sources","Do the words need changing?","Use an unacceptable color","Ask your body","Humanize something free of error","Use filters","Balance the consistency principle with the inconsistency principle","Fill every beat with something","Do nothing for as long as possible","Discard an axiom","Listen to the quiet voice","What wouldn't you do?","Is it finished?","Decorate, decorate","Put in earplugs","Give the game away","Reverse","Abandon normal instruments","Trust in the you of now","Use fewer notes","What would your closest friend do?","Repetition is a form of change","Distorting time","Give way to your worst impulse","Make a blank valuable by putting it in an exquisite frame","The inconsistency principle","Ghost echoes","Don't break the silence","You can only make one dot at a time","Discover the recipes you are using and abandon them","Just carry on","Cascades","(Organic) machinery","Courage!","What mistakes did you make last time?","You are an engineer","Consider different fading systems","Remove ambiguities and convert to specifics","Mute and continue","Look at the order in which you do things","It is quite possible (after all)","Go outside. Shut the door.","Don't stress one thing more than another","Do we need holes?","Cluster analysis","Work at a different speed","Do something boring","Look closely at the most embarrassing details and amplify them","Define an area as 'safe' and use it as an anchor","Mechanicalize something idiosyncratic","Overtly resist change","Emphasize the flaws","Accept advice","Remember those quiet evenings","Take a break","The tape is now the music","Short circuit (example; a man eating peas with the idea that they will improve his virility shovels them straight into his lap)","Imagine the music as a moving chain or caterpillar","Use an old idea","Intentions -credibility of -nobility of -humility of","Destroy -nothing -the most important thing","Imagine the music as a set of disconnected events","Change nothing and continue with immaculate consistency","Imagine the piece as a set of disconnected events","What are you really thinking about just now? Incorporate.","Children's voices -speaking -singing","Assemble some of the instruments in a group and treat the group","Feedback recordings into an acoustic situation","Shut the door and listen from outside","Towards the insignificant","Is the tuning appropriate?","Simply a matter of work","Look at a very small object, look at its centre","Not building a wall but making a brick","Revaluation (a warm feeling)","Disciplined self-indulgence","The most important thing is the thing most easily forgotten","Always first steps","Idiot glee","Question the heroic approach","Be extravagant","Always give yourself credit for having more than personality","State the problem in words as clearly as possible","Faced with a choice, do both","Tape your mouth","Twist the spine","Get your neck massaged","Lowest common denominator check -single beat -single note -single riff","Do the washing up","Listen in total darkness, or in a very large room, very quietly","Convert a melodic element into a rhythmic element","Would anybody want it?","Spectrum analysis","Retrace your steps","Go to an extreme, move back to a more comfortable place","Once the search is in progress, something will be found","Only a part, not the whole","From nothing to more than nothing","Be less critical more often"]


var questionsLive = [];


function prepareDeck() {
	shuffle(subjects);	
	currentQuestion = 0;
	flipOff();
}

    function shuffle(array) {
        let currentIndex = array.length,
            randomIndex;

        // While there remain elements to shuffle.
        while (currentIndex != 0) {

            // Pick a remaining element.
            randomIndex = Math.floor(Math.random() * currentIndex);
            currentIndex--;

            // And swap it with the current element.
            [array[currentIndex], array[randomIndex]] = [
                array[randomIndex], array[currentIndex]
            ];
        }

        return array;
    }




    function flip() {

		
        document.getElementById("card-a").classList.add("flipped");

        isflipped = 1;
    }

    function unflip() {
        /*remove back of card*/
        document.getElementById("card-a").classList.remove("dealt");

        document.getElementById("card-a").classList.add("drawn");


        setTimeout(function () {
            document.getElementById("card-a").classList.remove("flipped");

            document.getElementById("card-a").classList.add("predeal");

            document.getElementById("card-a").classList.remove("drawn");



        }, 600)
        setTimeout(function () {
            document.getElementById("card-a").classList.remove("predeal");

            document.getElementById("card-a").classList.add("dealt");


        }, 650)

        isflipped = 0;
    }

    function generateRandom(min, max, except) {
        var num = Math.floor(Math.random() * (max - min + 1)) + min;
        return (num === except) ? generateRandom(min, max) : num;
    }

    function populate() {
        document.getElementById("question-a-container").innerText = subjects[currentQuestion];

    }

    function depopulate() {
        document.getElementById("question-a-container").innerText = "";

    }

    function progress() {
        currentQuestion++
		
		if(currentQuestion == 1) {
			try {completeGame();} catch (error) {/*do nothing*/};
		}
		
        if (currentQuestion >= (subjects.length)) {
            currentQuestion = 0;
            shuffle(questions);
        }
    }

    function flipOnOff() {
		
		
        if (isflipped == 0) {
            flip();
            populate();
            /*startTimer();*/
            /*progressPlayer();*/
            unhide(document.getElementById("question-a-container"));

        } else {
            unflip();
            /*depopulate()*/
            progress();
			wipeBoard();
            /*stopTimer();*/
            hide(document.getElementById("question-a-container"));

        }
			}

    function flipOff() {
        if (isflipped == 0) {
			/*do nothing*/
        } else {
            unflip();
            /*depopulate()*/
            progress();
            /*stopTimer();*/
            hide(document.getElementById("question-a-container"));

        }
    }




    function hide(a) {
        a.classList.remove("unhidden");
        a.classList.add("hidden");
    }

    function unhide(a) {
        a.classList.add("unhidden");
        a.classList.remove("hidden");
    }

    /*added for instructions*/

    function unopenIt(a) {
        a.classList.remove("open");
        a.classList.add("unopen");
    }

    function openIt(a) {
        a.classList.add("open");
        a.classList.remove("unopen");
    }


