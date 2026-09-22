```javascript
// ========================================
// HABLOCLASS STUDENT RECORDS
// ========================================

let students = [
    {
        id: "0102601",
        name: "Aline",
        code: "1234",
        cohort: "01",
        year: "026"
    },

    {
        id: "0202607",
        name: "Patrick",
        code: "4821",
        cohort: "02",
        year: "026"
    },

    {
        id: "0302610",
        name: "David",
        code: "7359",
        cohort: "03",
        year: "026"
    }
];


// ========================================
// FIND HTML ELEMENTS
// ========================================

let studentId = document.getElementById("studentId");
let personalCode = document.getElementById("personalCode");

let digitButtons = document.querySelectorAll(".digit");

let clearButton = document.getElementById("clearButton");
let deleteButton = document.getElementById("deleteButton");

let loginButton = document.getElementById("loginButton");
let message = document.getElementById("message");


// ========================================
// DIGIT BUTTONS
// ========================================

digitButtons.forEach(function(button) {

    button.addEventListener("click", function() {

        let digit = button.getAttribute("data-digit");

        personalCode.value += digit;

        console.log("Code entered:", personalCode.value);

    });

});


// ========================================
// CLEAR PERSONAL CODE
// ========================================

clearButton.addEventListener("click", function() {

    personalCode.value = "";

});


// ========================================
// DELETE LAST DIGIT
// ========================================

deleteButton.addEventListener("click", function() {

    personalCode.value =
        personalCode.value.slice(0, -1);

});


// ========================================
// LOGIN
// ========================================

loginButton.addEventListener("click", function() {

    let enteredId = studentId.value.trim();
    let enteredCode = personalCode.value.trim();


    // Check Student ID

    if (enteredId === "") {

        message.textContent =
            "Please enter your student ID.";
```
