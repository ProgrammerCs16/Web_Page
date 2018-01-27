var myImage = document.querySelector('img');
var myHeading = document.querySelector('h3');
var myButton = document.querySelector('button');
var mySrc, storedName ;

function setUserName() {
  var myName = prompt('Please enter your name.');
  localStorage.setItem('name', myName);
  mySrc = myImage.getAttribute('src');
  if(mySrc === 'images/blackpink.png') {
       myHeading.textContent = 'Please watch thier videos, ' + myName;
    } else {      
       myHeading.textContent = 'But do not fall in love with them, ' + myName;
    }
}

if(!localStorage.getItem('name')) {
  setUserName();
} else {
   storedName = localStorage.getItem('name');
   mySrc = myImage.getAttribute('src');
   if(mySrc === 'images/blackpink.png') {
       myHeading.textContent = 'Please watch thier videos, ' + storedName;
    } else {      
       myHeading.textContent = 'But do not fall in love with them, ' + storedName;
    }
}
myImage.onclick = function() {
    mySrc = myImage.getAttribute('src');
    storedName = localStorage.getItem('name');
    if(mySrc === 'images/blackpink.png') {
      myImage.setAttribute ('src','images/blackpink2.jpg');
      myHeading.textContent = 'But do not fall in love with them, '+storedName;
    } else {
      myImage.setAttribute ('src','images/blackpink.png');
      myHeading.textContent = 'Please watch thier videos, '+storedName;
    }
}

myButton.onclick = function() {
  setUserName();
}