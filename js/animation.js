const hangmanAnimation = (tries) => {
  if (tries === 1) {
    document.querySelector(".head").style.visibility = "visible";
  }
  if (tries === 2) {
    document.querySelector(".torso").style.visibility = "visible";
  }
  if (tries === 3) {
    document.querySelector(".leftarm").style.visibility = "visible";
  }
  if (tries === 4) {
    document.querySelector(".rightarm").style.visibility = "visible";
  }
  if (tries === 5) {
    document.querySelector(".leftleg").style.visibility = "visible";
  }
  if (tries === 6) {
    document.querySelector(".rightleg").style.visibility = "visible";
  }
};

const resetHangMan = () => {
  document.querySelector(".head").style.visibility = "hidden";
  document.querySelector(".torso").style.visibility = "hidden";
  document.querySelector(".leftarm").style.visibility = "hidden";
  document.querySelector(".rightarm").style.visibility = "hidden";
  document.querySelector(".leftleg").style.visibility = "hidden";
  document.querySelector(".rightleg").style.visibility = "hidden";
};
