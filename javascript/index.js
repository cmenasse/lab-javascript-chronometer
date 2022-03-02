const chronometer = new Chronometer();

// get the buttons:
const btnLeftElement = document.getElementById('btnLeft');
const btnRightElement = document.getElementById('btnRight');

// get the DOM elements that will serve us to display the time:
const minDecElement = document.getElementById('minDec');
const minUniElement = document.getElementById('minUni');
const secDecElement = document.getElementById('secDec');
const secUniElement = document.getElementById('secUni');
const milDecElement = document.getElementById('milDec');
const milUniElement = document.getElementById('milUni');
const splitsElement = document.getElementById('splits');

function printTime() {
  const split = chronometer.split();
  minDecElement.textContent = split[0]
  minUniElement.textContent = split[1]
  secDecElement.textContent = split[3]
  secUniElement.textContent = split[4]
}


function printMinutes() {
  // ... your code goes here
}

function printSeconds() {
  // ... your code goes here
}

// ==> BONUS
function printMilliseconds() {
  // ... your code goes here
}

function printSplit() {
  return (chronometer.split());
}

function clearSplits() {
  // ... your code goes here
}

function setStopBtn() {
  // ... your code goes here
}

function setSplitBtn() {
  // ... your code goes here
}

function setStartBtn() {
  // ... your code goes here
}

function setResetBtn() {
  // ... your code goes here
}

// Start/Stop Button
btnLeftElement.addEventListener('click', () => {
  if (btnLeftElement.classList.contains("start")) 
  {
    btnLeftElement.textContent = "STOP";
    btnLeftElement.classList.replace("start", "stop");
    btnRightElement.textContent = "SPLIT";
    btnRightElement.classList.replace("reset", "split");
    chronometer.start(printTime);
  }
  else 
  {
    btnLeftElement.textContent = "START";
    btnLeftElement.classList.replace("stop", "start");
    btnRightElement.textContent = "RESET";
    btnRightElement.classList.replace("split", "reset");
    chronometer.stop();
  }
});

// Reset/Split Button
btnRightElement.addEventListener('click', () => {
  if(btnRightElement.classList.contains("split")) 
  {
    const li = document.createElement("li");
    li.appendChild(document.createTextNode(chronometer.split()));
    splitsElement.appendChild(li);
  }
  else
  {
    chronometer.stop();
    chronometer.reset();
    printTime();
    splitsElement.innerHTML = "";
  }
});

