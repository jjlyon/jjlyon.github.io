let id;

function handleClick() {
  if(id) {
    clearInterval(id);
    id = null;
  } else {
    id = setInterval(() => document.getElementById('title').style.color = getRandomColor(), 400);
  }
}

function getRandomColor() {
  var letters = '0123456789ABCDEF';
  var color = '#';
  for (var i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}

document.addEventListener("DOMContentLoaded", handleClick);
