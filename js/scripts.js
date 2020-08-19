


//const array = input.match("a","i","e","o", "u");
//console.log(array.length);

//const array = input.match();


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