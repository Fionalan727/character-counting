function countLetters(str) {


  var letter = {};
  for (var i = 0; i < str.length; i++) {
    var keystore = str[i];
    if(str[i] !== " ") {
      var counterLetter =  letter[keystore];
      if (counterLetter === undefined) {
        letter[keystore] = [i];
      }else {
        counterLetter.push(i);
      }
    }
  }
  return letter;
}

console.log(countLetters("lighthouse in the house"));
