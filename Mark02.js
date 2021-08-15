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
  question: "Who directed 'The Dark Knight Trilogy? ",
  answer: "Christopher Nolan"
}, { 
  question: "What is the real name of 'Batman'? ", 
  answer: "Bruce Wayne"
}, { 
  question: "Who was villain in second movie?",
  answer: "Joker"
}, { 
  question: "Who is Batman's ally? ",
  answer: "Robin"
}, { 
  question: "Who was protagonist of 'The Dark Knight'? ",
  answer: "Harvey Dent"
}, { 
  question: "What was the nickname of 'Harvey Dent? ",
  answer: "Harvey two-face"
}, { 
  question: "Where did Batman lived? ",
  answer: "Gotham"
}, { 
  question: "Who mentored Batman? ",
  answer: "Ra's Al Ghul"
}, { 
  question: "Who played 'Bane'? ",
  answer: "Tom Hardy"
}, { 
  question: "Did Batman die?",
  answer: "No"
}
]

for ( var i=0; i<questions.length; i++) { 
  var currentQuestion = questions[i];
  play (currentQuestion.question, currentQuestion.answer)
}

console.log("The Quiz is over!");
console.log("You scored: " + score);