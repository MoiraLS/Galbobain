var leftArrow = document.querySelector('.slider__arrow--left'),
    rightArrow = document.querySelector('.slider__arrow--right'),
    slides = document.querySelector('.slider__slides'),
    slidersWidth = slides.offsetWidth,
    canMove = true, 
    position = 0;

slides.appendChild(slides.querySelector('img').cloneNode());
var slidesLength = slides.querySelectorAll('.slider__slide').length;

rightArrow.addEventListener('click', next);

leftArrow.addEventListener('click', previous);

window.addEventListener('keydown', function(event) {
  switch(event.key) {
    case 'ArrowLeft':
      previous(); 
      break;
    case 'ArrowRight':
      next(); 
      break;
    default:
      break;
  }
});

function next() {
  if(canMove && position < slidesLength - 1) {
    moveTo(position + 1);
   
    if (position === slidesLength - 1) {
      setTimeout(function() {
        jumpTo(0); 
      }, 300);
    }
  }
}

function previous() {
  if(canMove && position >= 0){
    if (position === 0) { 
      jumpTo(slidesLength - 1, function() { 
        moveTo(position - 1);
      });
    } else {
      moveTo(position - 1);
    }
  }
}

function moveTo(newPosition, jump) {
  if (!jump) {
    canMove = false;
    setTimeout(function() {
      canMove = true;
    }, 300);
  }
  
  position = newPosition;
  slides.style.transform = 'translateX(' + position * -slidersWidth + 'px)';
};

function jumpTo(newPosition, callback) {
  window.requestAnimationFrame(function() {
    slides.style.transition = 'none';
    moveTo(newPosition, true);

    window.requestAnimationFrame(function() { 
      slides.style.transition = 'transform 300ms'; 
      
      if (callback) {
        callback();
      }
    });
  });
}