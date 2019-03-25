let plus = document.getElementById('plus');
let less = document.getElementById('less');
let input = document.getElementById('quantity');

plus.addEventListener('click', function() {
  input.value = Number(input.value) + 1;
});


less.addEventListener('click', function() {
  if (input.value > 0) {
    input.value = Number(input.value) - 1;
 };
});