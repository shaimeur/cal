// the display screen
const display = document.querySelector('.display');

// helper buttons
const clear = document.querySelector('.clear');
const del = document.querySelector('.delete');

// operations
const division = document.querySelector('.division');
const multiplication = document.querySelector('.multiplication');
const substraction = document.querySelector('.substraction');
const addition = document.querySelector('.addition');
const equal = document.querySelector('.equal');

// numbers selectors

const zeroo = document.querySelector('.zero');
const one = document.querySelector('.one');
const two = document.querySelector('.two');
const three = document.querySelector('.three');
const four = document.querySelector('.four');
const five = document.querySelector('.five');
const six = document.querySelector('.six');
const seven = document.querySelector('.seven');
const eight = document.querySelector('.eight');
const nine = document.querySelector('.nine');





zeroo.addEventListener("click",function (event){
   let resultOfZero = event.target.innerHTML
   // console.log(resultOfZero)
   // console.log(display)
   // console.log(display.append(resultOfZero))
   return display.append(resultOfZero)
})
one.addEventListener("click",function (event){
   // console.log(event.target.innerHTML)
   let resultOfOne = event.target.innerHTML
   return display.append(resultOfOne)
})
two.addEventListener("click",function (event){
   // console.log(event.target.innerHTML)
   let resultOfTwo = event.target.innerHTML
   return display.append(resultOfTwo)
})
three.addEventListener("click",function (event){
   // console.log(event.target.innerHTML)
   let resultOfThree = event.target.innerHTML
   return display.append(resultOfThree)
})
four.addEventListener("click",function (event){
   // console.log(event.target.innerHTML)
   let resultOfFour = event.target.innerHTML
   return display.append(resultOfFour)
})
five.addEventListener("click",function (event){
   // console.log(event.target.innerHTML)
   let resultOfFive = event.target.innerHTML
   return display.append(resultOfFive)
})
six.addEventListener("click",function (event){
   // console.log(event.target.innerHTML)
   let resultOfSix = event.target.innerHTML
   return display.append(resultOfSix)
})
seven.addEventListener("click",function (event){
   // console.log(event.target.innerHTML)
   let resultOfSeven = event.target.innerHTML
   return display.append(resultOfSeven)
})
eight.addEventListener("click",function (event){
   // console.log(event.target.innerHTML)
   let resultOfEight = event.target.innerHTML
   return display.append(resultOfEight)
})
nine.addEventListener("click",function (event){
   // console.log(event.target.innerHTML)
   let resultOfNine = event.target.innerHTML
   return display.append(resultOfNine)
})