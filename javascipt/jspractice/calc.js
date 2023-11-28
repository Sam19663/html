// // inputfield
// var fnumber =  document.getElementById("fno")
// var snumber =  document.getElementById("sno")
// var result =  document.getElementById("result")

// // buttons
// var sum = document.getElementById("sum")
// var sub = document.getElementById("sub")
// var mul = document.getElementById("mul")
// var div = document.getElementById("div")

// sum.addEventListener('click', add );


// function add() {
//     console.log("add")
//     var num1 = parseFloat(fnumber.value);
//     var num2 = parseFloat(snumber.value);
//     var result1 = num1 + num2;
//     console.log(result1)
//     // var fetchResult = parseFloat(result.value)
//     result.value = parseFloat(result1);

// }

// sub.addEventListener('click', subtract );

// function subtract() {
//     console.log("sub")
//     var num1 = parseFloat(fnumber.value);
//     var num2 = parseFloat(snumber.value);
//     var result1 = num1 - num2;
//     console.log(result)
//     result.value = parseFloat(result1);
// }

// mul.addEventListener('click', mult );

// function mult() {
//     console.log("mul")
//     var num1 = parseFloat(fnumber.value);
//     var num2 = parseFloat(snumber.value);
//     var result1 = num1 * num2;
//     console.log(result)
//     result.value = parseFloat(result1);
// }

// div.addEventListener('click', division );

// function division() {
//     console.log("div")
//     var num1 = parseFloat(fnumber.value);
//     var num2 = parseFloat(snumber.value);
//     var result1 = num1 / num2;
//     console.log(result)
//     result.value = parseFloat(result1);

// }




let first_no = document.getElementById('fno');
let second_no = document.getElementById('sno');
let result1 = document.getElementById('result');

function calculate(operation) {
    let num1 = parseFloat(first_no.value);
    let num2 = parseFloat(second_no.value);
    let resultVal;

    switch (operation) {
        case 'add':
            resultVal = num1 + num2;
            break;
        case 'sub':
            resultVal = num1 - num2;
            break;
        case 'mul':
            resultVal = num1 * num2;
            break;
        case 'div':
            if (num2 !== 0) {
                resultVal = num1 / num2;
            } else {
                alert("Number can't be divided by 0");
                return;
            }
            break;
        default:
            alert("No operation is selected");
            return;
    }

    result1.value = resultVal;
}





