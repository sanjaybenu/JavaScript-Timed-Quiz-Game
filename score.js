//Function to create elements to display highest score on high score page

var scoreNum = localStorage.getItem('score');
var scoreBoardItemNum = 0;

if (scoreBoardItemNum <= 10 && scoreNum != 'null' && scoreNum != scoreBoardDisplayEl) {
  scoreBoardItemNum++;  
  var scoreBoardEl = document.createElement('div');
  document.body.appendChild(scoreBoardEl);
  var inputEl = document.createElement('input');
  inputEl.value = (localStorage.getItem('initials')).toUpperCase();
  inputEl.setAttribute('disabled', true); // to disable the input
  scoreBoardEl.appendChild(inputEl);
  var scoreBoardDisplayEl = document.createElement('input');
  scoreBoardDisplayEl.value = localStorage.getItem('score');
  scoreBoardDisplayEl.setAttribute('disabled', true);
  scoreBoardEl.appendChild(scoreBoardDisplayEl);

}
else if (scoreBoardItemNum > 10 && scoreNum != scoreBoardDisplayEl) {

  scoreBoardEl.removeChild(scoreBoardEl.firstChild);
  var scoreBoardEl = document.createElement('div');
  document.body.appendChild(scoreBoardEl);
  var inputEl = document.createElement('input');
  inputEl.value = (localStorage.getItem('initials')).toUpperCase();
  inputEl.setAttribute('disabled', true);// to disable input
  scoreBoardEl.appendChild(inputEl);
  var scoreBoardDisplayEl = document.createElement('input');
  scoreBoardDisplayEl.value = localStorage.getItem('score');
  scoreBoardDisplayEl.setAttribute('disabled', true);
  scoreBoardEl.appendChild(scoreBoardDisplayEl);
};


