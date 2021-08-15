var readlineSync = require('readline-sync');
var userName = readlineSync.question ("Your name? ");
console.log ("Hi, there " + userName + " to the R25C quiz");
var score = 0;


function play (question, answer) { 
  var userAnswer = readlineSync.question(question);
  if (userAnswer === answer) { 
    console.log ("That's right!");
    score = score +1 ;
  } else { 
    console.log ("Its wrong, bruh!");
    console.log ("Right answer: " + currentQuestion.answer);
  }
}

var questions = [ { 
  question: "Who founded R25C? ",
  answer: "Swapnil"
}, { 
  question: "When was R25C founded? (full date)", 
  answer: "5th May, 2019"
}, { 
  question: "What is the full form R25C?",
  answer: "randipachcheesi"
}, { 
  question: "How many branches does R25C has? ",
  answer: "4"
}, { 
  question: "How many R25Cians are there in total? ",
  answer: "7"
}, { 
  question: "What was the favourite class of R25Cians? ",
  answer: "Chemistry Lab"
}, { 
  question: "Who was the first victim of R25Cian's wrath? ",
  answer: "Karu Lal"
}, { 
  question: "What was the first 'respectable' name of R25C? ",
  answer: "Chhatra Sangathan Kranti"
}, { 
  question: "Whos is the favourite movie star of R25Cians? ",
  answer: "Selmon bhoi"
}, { 
  question: "Is R25C going to dissolve anytime soon?",
  answer: "Never"
}
]

for ( var i=0; i<questions.length; i++) { 
  var currentQuestion = questions[i];
  play (currentQuestion.question, currentQuestion.answer)
}

console.log("The Quiz is over!");
console.log("You scored: " + score);