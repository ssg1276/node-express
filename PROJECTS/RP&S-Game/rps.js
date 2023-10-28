
const playPick = {
  "rock": "Rock.png",
  "paper": "Paper.png",
  "scissor": "Scissors.png"
}

let SCOREA = 0;
let SCOREB = 0;
let COUNT = 0;
let ct = 0;


const choosegame1 = () => {
  let hide = document.querySelector(".hands");
  hide.style.display = "flex";

  let show = document.querySelector(".result");
  show.style.display = "none";

  let hide2 = document.querySelector(".selectgame");
  hide2.style.display = "none";

  setCount(3);
  ct = 3;
}
const choosegame2 = () => {
  let hide = document.querySelector(".hands");
  hide.style.display = "flex";

  let show = document.querySelector(".result");
  show.style.display = "none";

  let hide2 = document.querySelector(".selectgame");
  hide2.style.display = "none";

  setCount(5);
  ct = 5;
}
const randomFind = (hand) => {
  console.log(hand);

  let hide2 = document.querySelector(".selectgame");
  hide2.style.display = "none";

  let hide = document.querySelector(".hands");
  hide.style.display = "none";

  let show = document.querySelector(".result");
  show.style.display = "flex";

  document.getElementById("playerPickimg").src = playPick[hand];

  pickComputer(hand);
  setCount(COUNT - 1);

  if (COUNT === 0) {
    finalDecision();
  }

  // if (COUNT < 0) {
  //   finalDecision2();
  // }
}


const pickComputer = (hand) => {
  let hands = ["rock", "paper", "scissor"]
  let cpHand = hands[Math.floor(Math.random() * hands.length)]

  document.getElementById("computerPickimg").src =
    playPick[cpHand];

  result(hand, cpHand);
}


const result = (result1, cpHand) => {
  if (result1 == "paper" && cpHand == "scissor") {
    setDecision("YOU LOSE!")
    setScoreb(SCOREB + 1);
    // setCount(COUNT + 1);
  }
  if (result1 == "paper" && cpHand == "rock") {
    setDecision("YOU WIN!");
    setScorea(SCOREA + 1);
    // setCount(COUNT + 1);
  }
  if (result1 == "paper" && cpHand == "paper") {
    setDecision("It's a tie!");
    // setCount(COUNT + 1);
  }
  if (result1 == "rock" && cpHand == "scissor") {
    setDecision("YOU WIN!");
    setScorea(SCOREA + 1);
    // setCount(COUNT + 1);
  }
  if (result1 == "rock" && cpHand == "paper") {
    setDecision("YOU LOSE!");
    setScoreb(SCOREB + 1);
    // setCount(COUNT + 1);
  }
  if (result1 == "rock" && cpHand == "rock") {
    setDecision("It's a tie!");
    // setCount(COUNT + 1);
  }
  if (result1 == "scissor" && cpHand == "scissor") {
    setDecision("It's a tie!");
    // setCount(COUNT + 1);
  }
  if (result1 == "scissor" && cpHand == "rock") {
    setDecision("YOU LOSE!");
    setScoreb(SCOREB + 1);
    // setCount(COUNT + 1);
  }
  if (result1 == "scissor" && cpHand == "paper") {
    setDecision("YOU WIN!");
    setScorea(SCOREA + 1);
    // setCount(COUNT + 1);
  }
}

const finalDecision = () => {
  if (SCOREA > SCOREB) {
    setDecision("YOU FINALLY WIN!");
  } else if (SCOREA < SCOREB) {
    setDecision("BETTER LUCK NEXT TIME!");
  } else {
    setDecision("OOPS!! IT'S A DRAW");
  }
  let hide3 = document.querySelector(".result2button");
  hide3.style.display = "none";
}

// const finalDecision2 = () => {
//   setScorea(0);
//   setScoreb(0);
//   setCount(ct);

// }
const setCount = (count) => {
  COUNT = count;
  document.querySelector(".sdisplay.chances h1").innerText = count;
}
const setScorea = (score) => {
  SCOREA = score;
  document.querySelector(".sdisplay.play h1").innerText = score;
}
const setScoreb = (score) => {
  SCOREB = score;
  document.querySelector(".sdisplay.comp h1").innerText = score;
}


const setDecision = (decision) => {
  document.querySelector(".decision h1").innerText = decision;
}

const restartGame = () => {
  let show = document.querySelector(".result");
  show.style.display = "none";

  let hide = document.querySelector(".hands");
  hide.style.display = "flex";

  let hide2 = document.querySelector(".selectgame");
  hide2.style.display = "none";


}

const newGame = () => {
  let show = document.querySelector(".result");
  show.style.display = "none";

  let hide = document.querySelector(".hands");
  hide.style.display = "none";
  let hide2 = document.querySelector(".selectgame");
  hide2.style.display = "block";

  let hide3 = document.querySelector(".result2button");
  hide3.style.display = "flex";

  setScorea(0);
  setScoreb(0);
  setCount(0);

}