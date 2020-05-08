
/**
 * @description Here the Defination of Default and Change Color variable Defined.
 */
var defaultColor = 'white';
var chanegColor = 'red';

/**
 * @description This block of code is responsible for dynamic Creation of the Div Elements
 */
var e = document.getElementById('mainContainer'); // whatever you want to append the rows to: 
for (var x = 0; x < 9; x++) {
  var cell = document.createElement("div");
  cell.className = "gridsquare";
  cell.id = 'div_' + (x + 1);
  cell.innerText = (x + 1);
  e.appendChild(cell);
}

/**
 * @description this is main Function responsible for the color change
 * @param {string} type it is basically button/input
 * based on type I changes/ reset the background.
 */
function changeColor(type) {
  var val = document.getElementById('testId');
  if (val.value > 0) {
    var obj = document.getElementById('div_' + val.value);
    obj.style.backgroundColor = type === 'button' ? chanegColor : defaultColor;
  }
}

/**
 * @description This is The Color Me Button Click Event.
 */
function myFunction() {
  changeColor('button')
}
/**
 * @description I want to Have Some Rest Logic So I writen Over Here..
 */
function myInputHandler() {
  console.log('Hello');
  changeColor('input')
}