// let number1 = 10;
// let number2 = 5;

// let subtraction = number1 - number2;
// let multiplication = number1 * number2;
// let division = number1 / number2;

// document.getElementById("result").textContent =
//     "Subtraction: " + subtraction +
//     " | Multiplication: " + multiplication +
//     " | Division: " + division;

//     let price = 10;
//     let quantity = 3;

//     let totalPrice = price*quantity;
//     document.getElementById("result").textContent =
//     "Total Price: " + totalPrice;

//     let score =49;
//      if (   score >=50) { 
//         document.getElementById("result").textContent="you passed!";}
//      else if (   score <=49) { 
//         document.getElementById("result").textContent="you failed!";}
//  let age = 28;


//  if (   age >=18) { 
//         document.getElementById("result").textContent="you are an Growing OLD SIR!";}
//      else if (   age <=18) { 
//         document.getElementById("result").textContent="you are an Minor!";}

//         let number= 0;
// if (number > 0){ 
//     document.getElementById("result").textContent=" positive"
// }

// else if(number<0)  { 
//     document.getElementById("result").textContent=" negative"}  
//  else if(number==0)  { 
//     document.getElementById("result").textContent=" It is a Zero"}  





// let isGreater = number1 > number2;
// let isLess = number1 < number2;
// let isEqual = number1 === number2;
// let isNotEqual = number1 !== number2;

// //This is the exercise 14

// console.log(isGreater);
// console.log(isLess);
// console.log(isEqual);
// console.log(isNotEqual);


// exercise n 15 

// let attendance = 70;
// let score = 70;

// let passed = attendance >= 75 && score >= 50;

// console.log(passed);

// if (attendance >= 75 && score >= 50) {
//     document.getElementById("result").textContent="passed"}
// else  {
//     document.getElementById("result").textContent="failed"}

    // EXERCISE N 16

// let hasStudentCard = false;
// let hasInvitation = false;

// let allowed = hasStudentCard || hasInvitation;

// console.log(allowed)

// if ( hasStudentCard || hasInvitation
// ) {
//     document.getElementById("result").textContent="You are allowed"}


// else {document.getElementById("result").textContent="You are Rejected!"}



    // EXERCISE N 17

    let helloButton = document.getElementById("helloButton");
    let increaseButton = document.getElementById("increaseButton");
    let decreaseButton = document.getElementById("decreaseButton");
    let resetButton = document.getElementById("resetButton");
    let changemessageButton = document.getElementById("changemessage");
    let counter = document.getElementById("counter");
    let messageElement = document.getElementById("message");
    let ageInputElement = document.getElementById("ageInput");
    let checkAgeButton = document.getElementById("checkAgeButton");


    increaseButton.addEventListener("click",function() {
        counter.textContent = Number(counter.textContent) + 3;
    });

    decreaseButton.addEventListener("click",function() {
        counter.textContent = Number(counter.textContent) - 2;
    });
    resetButton.addEventListener("click",function() {
        counter.textContent = "I passed the Exam";
    });
      changemessageButton.addEventListener("click",function() {
        messageElement.textContent = "Javascript is now More fun!!";
        messageElement.style.fontSize = "30px";
    });




checkAgeButton.addEventListener("click", function() {

    let age = Number(ageInputElement.value);

    if (age < 13) {
        document.getElementById("result2").textContent = "You are Still young life goes on, work hard!";

    } 
    
    else if (age >= 13 && age < 18) {
        document.getElementById("result2").textContent = "You are a teenager. I hope you Enjoy your";

    } 
    else if (age >= 18 && age < 27) {
        document.getElementById("result2").textContent = "You are no longer a teenager. Make a new plan";}

    
    else {
        document.getElementById("result2").textContent = "You are an adult. Enjoy your responsibilities";
    }
    

    

});

let redButton = document.getElementById("redButton");
let blueButton= document.getElementById("blueButton");
let greenButton= document.getElementById("greenButton");
let bodyStyle = document.getElementById("bodyStyle");

redButton.addEventListener("click", function() { messageElement.style.backgroundColor= "red";});

blueButton.addEventListener("click", function() { messageElement.style.backgroundColor= "blue";});

greenButton.addEventListener("click", function() { messageElement.style.backgroundColor= "green";});
choiceButton.addEventListener("click", function() { bodyStyle.style.backgroundImage= "url('images/background1.jpg')";});








  










