let questionsToAsk = [
  { prompt: "What color is the sky? a. red, b. yellow, c. blue",
  Answer: "c"
},
{
  prompt: "What color is a tree? a. purple, b. green, c. magenta",
  Answer: "b"
},
{
  prompt: "What consistency does water have? a. transparent, b. thick, c. semi thick",
  Answer: "a"
}
];

let score = 0;

let displayCounterEl = document.getElementById("displayCounter");
for(let i=0; i <questionsToAsk.length; i++) {
  let userPrompt = prompt(questionsToAsk[i].prompt);

if(userPrompt == questionsToAsk[i].Answer) {
 score++;
  console.log("Right!");
displayCounterEl.innerHTML = score;
} else {
  console.log("Wrong!");
}
}
let displayMessageEl = document.getElementById("displayMessage");
displayMessageEl.innerHTML = `You scored ${score} out of ${questionsToAsk.length}`;