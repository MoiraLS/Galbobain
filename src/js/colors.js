var squareWhite = document.querySelector('.colors__square--white');
var squareSand = document.querySelector('.colors__square--sand');

squareWhite.addEventListener('click', function() {
  squareWhite.classList.toggle('checked');
});

squareSand.addEventListener('click', function() {
  squareSand.classList.toggle('checked');
});