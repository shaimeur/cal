// the display screen
   const display = document.querySelector('.display');
   let first = '';
   let selectedOp = '';
   // const display1 = document.getElementById("screen");
   // const display = document.getElementsByClassName("display");
   // const display2 = document.getElementsByTagName('div');


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


function calculate(x,op,y){
  if(op === '+'){
   return Number(x )+ Number(y) ;
  }else if (op === '−') {
      return x - y
  } else if (op === '×') {
      return x * y ;
  } else if(op === '÷'){
      if(y == 0){
         return "WE CAN'T DIVIDE BY 0"
      }else{
         return x / y
      }
  }
}

zeroo.addEventListener("click",function (event){
   let resultOfZero = event.target.innerText
   // console.log(resultOfZero)
   // console.log(display)
   // console.log(display.append(resultOfZero))
   return display.append(resultOfZero)
})
one.addEventListener("click",function (event){
   // console.log(event.target.innerText)
   let resultOfOne = event.target.innerText
   return display.append(resultOfOne)
})
two.addEventListener("click",function (event){
   // console.log(event.target.innerText)
   let resultOfTwo = event.target.innerText
   return display.append(resultOfTwo)
})
three.addEventListener("click",function (event){
   // console.log(event.target.innerText)
   let resultOfThree = event.target.innerText
   return display.append(resultOfThree)
})
four.addEventListener("click",function (event){
   // console.log(event.target.innerText)
   let resultOfFour = event.target.innerText
   return display.append(resultOfFour)
})
five.addEventListener("click",function (event){
   // console.log(event.target.innerText)
   let resultOfFive = event.target.textContent
   return display.append(resultOfFive)
})
six.addEventListener("click",function (event){
   // console.log(event.target.innerText)
   let resultOfSix = event.target.innerText
   return display.append(resultOfSix)
})
seven.addEventListener("click",function (event){
   // console.log(event.target.innerText)
   let resultOfSeven = event.target.innerText
   return display.append(resultOfSeven)
})
eight.addEventListener("click",function (event){
   // console.log(event.target.innerText)
   let resultOfEight = event.target.innerText
   return display.append(resultOfEight)
})
nine.addEventListener("click",function (event){
   // console.log(event.target.innerText)
   let resultOfNine = event.target.innerText
   return display.append(resultOfNine)
})

clear.addEventListener("click",function(){
     return  display.innerText = ''
})

del.addEventListener("click",function(){

   let putedVal =  display.innerText.split('')
       putedVal.pop()
   let r =  putedVal.join('')
     return display.innerText = r
})

addition.addEventListener('click',function(event){

   first = display.innerText;

   display.innerText = '';

   selectedOp = event.target.innerText;

   display.innerText = ''

})
multiplication.addEventListener('click',function(event){

   first = display.innerText;

   display.innerText = '';

   selectedOp = event.target.innerText;

   display.innerText = ''

})
division.addEventListener('click',function(event){

   first = display.innerText;

   display.innerText = '';

   selectedOp = event.target.innerText;

   display.innerText = ''

})
substraction.addEventListener('click',function(event){

   first = display.innerText;

   display.innerText = '';

   selectedOp = event.target.innerText;

   display.innerText = ''

})

equal.addEventListener('click', function(){

   let  second = display.innerText
   let result = ''
   display.innerText = ''
   result = calculate(first,selectedOp,second)
   console.log(result)
   return display.append(result)
})




