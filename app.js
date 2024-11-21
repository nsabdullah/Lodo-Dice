function rollDice() {
  // Generate a random number brtween 1 and 6
  let randomNumber = Math.floor(Math.random() * 6) + 1;
  // Update the image source based on the random  number
  let img = "img/" + randomNumber + ".png";
  document.getElementById("img").src = img;
}
