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
});

// any word that begins with a vowel, add "way" to the end.

// input: away
// output: awayway

// for consonants move first consonants to the end and ad "ay"

// input: carefully
// output: arefullycay

// for 'qu' treat it as a consonant.

// input: squirl
// output: irlsquay

// for 'y' treat it as a consonant.

// input: yellow
// output: ellowyay