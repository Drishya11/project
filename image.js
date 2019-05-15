var displayedImage = document.querySelector('.displayed-img');
var thumbBar = document.querySelector('.thumb-bar');

btn = document.querySelector('button');
var overlay = document.querySelector('.overlay');

/* Looping through images */

for(var i = 1; i <= 5; i++) {
  var newImage = document.createElement('img');
  newImage.setAttribute('src', 'images/pic' + i + '.jpg');
  thumbBar.appendChild(newImage);
  newImage.onclick = function(fun) {
    var im = fun.target.getAttribute('src');
    displays(im);
  }
}

function displays(im) {
  displayedImage.setAttribute('src', im);
}

/* Wiring up the Darken/Lighten button */

btn.onclick = function() {
  var shade = btn.getAttribute('class'); 
  if(shade === 'dark') {
    btn.setAttribute('class','light');
    btn.textContent = 'Lighten';
    overlay.style.backgroundColor = 'rgba(0,0,0,0.5)';
  } else {
    btn.setAttribute('class','dark');
    btn.textContent = 'Darken';
    overlay.style.backgroundColor = 'rgba(0,0,0,0)';
  }
}