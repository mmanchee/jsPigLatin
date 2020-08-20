function isVowel(input){
  let word = input.join("");
  word = word + "way";
  return word;
}

function isConsonant(wordArray) {
  for (i = 0; i < wordArray.length; i++) {
    if (/[^aeiou]/i.test(wordArray[0])) {
      if (wordArray[0] == "q") {
        if (wordArray[1] == "u") {
          wordArray.push(wordArray[0]);
          wordArray.shift();
        }
      }
        wordArray.push(wordArray[0]);
        wordArray.shift();
    } else {
      let word = wordArray.join("");
      word = word + "ay"; 
      return word;
    }
  }
}

function pigLatin(input) {
  let inputArray = input.split(" ");
  for (let i = 0; i < inputArray.length; i++) {
    let letters = inputArray[i].split("");
    if (/[aeiou]/i.test(letters[0])) {
      inputArray[i] = isVowel(letters);
    } else if (/[a-z]/i.test(letters[0])) {
      inputArray[i] = isConsonant(letters);
    } else {
      inputArray[i] = inputArray[i];
    }
  }; 
  input = inputArray.join(" ");
  return input;
}

$(document).ready(function(){
  $("#test-input1").submit(function(event) {
    event.preventDefault();
    let input1 = $("input#input1").val();
    const array1 = input1.match(/[aeiou]/gi);
    let number1 = 0;

    if (array1 == null) {
      number1 = 0;
    } else {
      number1 = array1.length;
    };
    $("#result1").text(number1);
  });
  $("#test-input2").submit(function(event) {
    event.preventDefault();
    let input2 = $("input#input2").val();
    let result2;

    if (input2 === "") {
      result2 = "Please enter something above.";
    } else {
      result2 = pigLatin(input2);
    }

    $("#result2").text(result2);
  });
});
