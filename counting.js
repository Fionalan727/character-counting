function countLetters(str) {
  var noSpaces = str.split(" ").join("");

  var letter = {};
  for (var i = 0; i < noSpaces.length; i++) {
    var currentLetter = noSpaces[i];
    var counter = letter[currentLetter];
    console.log(currentLetter);
    if (counter === undefined) {
      letter[currentLetter] = 1;
    }else if(counter >= 1) {
      letter[currentLetter] += 1;
    }
  }

  return letter;
}

console.log(countLetters("lighthouse in the house"));
