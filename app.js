// get input from num1 and num2

function addition(){
    getValues();
    //assign variable for different math operations
    sum = num1 + num2;//addition
    document.getElementById("Result").innerHTML ="Result is "+sum;
}

function subtraction(){
    getValues();
    //assign variable for different math operations
    sub = num1 - num2;//subtraction
    document.getElementById("Result").innerHTML ="Result is "+sub;
}

function multiply(){
    getValues();
    //assign variable for different math operations
    multi = num1 * num2;//multiply
    document.getElementById("Result").innerHTML ="Result is "+multi;
}

function divide(){
    getValues();
    //assign variable for different math operations
    div = num1 / num2;//divide
    document.getElementById("Result").innerHTML ="Result is "+div;
}

function modulus(){
    getValues();
    //assign variable for different math operations
    mod = num1 % num2;//modulus
    document.getElementById("Result").innerHTML ="Result is "+mod;
}

function checkEven(){
    getValues();
    //assign variable for different math operations
    if ( num1 % 2 == 0) {
        document.getElementById("Result1").innerHTML = "First number is Even"
    }
    else {
        document.getElementById("Result1").innerHTML = "First number is not Even"
    }

    if ( num2 % 2 == 0) {
        document.getElementById("Result2").innerHTML = "Second number is Even"
    }
    else {
        document.getElementById("Result2").innerHTML = "Second number is not Even"
    }
}

function getValues() {
    num1 = document.getElementById("num1").value;
    num2 = document.getElementById("num2").value;
    num1 = parseInt(num1);
    num2 = parseInt(num2);
}