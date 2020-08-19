const regex = /[aeiou]/;

let input = $("input#input1").val();

const array = input.match(/[aeiou]/g);

console.log(array.length);


//const array = input.match("a","i","e","o", "u");
//console.log(array.length);

//const array = input.match();

//Co-authored-by: Alex Goodwin <hagoodwi@gmail.com> 