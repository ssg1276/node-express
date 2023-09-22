
const playPick={
    "rock":"Rock.png",
    "paper":"Paper.png",
    "scissor":"Scissors.png"
}

let SCOREA=0;
let SCOREB=0;
const randomFind=(hand) =>{
    console.log(hand);

    let hide=document.querySelector(".hands");
    hide.style.display="none";

    let show=document.querySelector(".result");
    show.style.display="flex";

    document.getElementById("playerPickimg").src= playPick[hand];

    pickComputer(hand);
   
}


const pickComputer=(hand)=>{
    let hands=["rock","paper","scissor"]
    let cpHand=hands[Math.floor(Math.random()*hands.length)]
    
    document.getElementById("computerPickimg").src= 
    playPick[cpHand];
    
    result(hand,cpHand);
}

const result=(result1,cpHand)=>{
    if(result1=="paper" && cpHand== "scissor"){
        setDecision("YOU LOSE!")
        setScoreb(SCOREB + 1);
    }
    if (result1 == "paper" && cpHand == "rock") {
        setDecision("YOU WIN!");
        setScorea(SCOREA + 1);
      }
      if (result1 == "paper" && cpHand == "paper") {
        setDecision("It's a tie!");
      }
      if (result1 == "rock" && cpHand == "scissor") {
        setDecision("YOU WIN!");
        setScorea(SCOREA + 1);
      }
      if (result1 == "rock" && cpHand == "paper") {
        setDecision("YOU LOSE!");
        setScoreb(SCOREB + 1);
      }
      if (result1 == "rock" && cpHand == "rock") {
        setDecision("It's a tie!");
      }
      if (result1 == "scissor" && cpHand == "scissor") {
        setDecision("It's a tie!");
      }
      if (result1 == "scissor" && cpHand == "rock") {
        setDecision("YOU LOSE!");
        setScoreb(SCOREB + 1);
      }
      if (result1 == "scissor" && cpHand == "paper") {
        setDecision("YOU WIN!");
        setScorea(SCOREA + 1);
      }
}


const setScorea=(score)=>{
    SCOREA=score;
    document.querySelector(".sdisplay.play h1").innerText=score;
}
const setScoreb=(score)=>{
    SCOREB=score;
    document.querySelector(".sdisplay.comp h1").innerText=score;
}


const setDecision=(decision)=>{
    document.querySelector(".decision h1").innerText= decision;
}

const restartGame = () => {
  let show = document.querySelector(".result");
  show.style.display = "none";

  let hide = document.querySelector(".hands");
  hide.style.display = "flex";
}

  const newGame=()=>{
      let show = document.querySelector(".result");
      show.style.display = "none";

     let hide = document.querySelector(".hands");
     hide.style.display = "flex";
     
     setScorea(0);
     setScoreb(0);
     
  }