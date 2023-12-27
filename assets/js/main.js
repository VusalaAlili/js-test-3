

function calculator (x,y,operator){
    if (operator==="+"){
        console.log(x+y);
    }
    else if(operator==="-"){
        console.log(x-y);
    }
    else if(operator==="*"){
        console.log(x*y);
    }
    else {
        console.log(x/y);
    }
};
calculator(16,4,"-");



let month = "July";
switch ( month){
    case "January": {
        console.log("January is the first month of the year.");
        break;
    }
    case "February": {
        console.log("February is the second month of the year.");
        break;
    }case "March": {
        console.log("March is the third month of the year.");
        break;
    }case "April": {
        console.log("April is the fourth month of the year.");
        break;
    }case "May": {
        console.log("May is the fifth month of the year.");
        break;
    }case "June": {
        console.log("June is the sixth month of the year.");
        break;
    }case "July": {
        console.log("July is the seventh month of the year.");
        break;
    }case "August": {
        console.log("August is the eighth month of the year.");
        break;
    }case "September": {
        console.log("September is the ninth month of the year.");
        break;
    }case "October": {
        console.log("October is the tenth month of the year.");
        break;
    }case "November": {
        console.log("November is the eleventh month of the year.");
        break;
    }case "December": {
        console.log("December is the twelfth month of the year.");
        break;
    }
    default : {
        console.log("Unfortunately, there is no such month's name.");
    }
};



function triangleSides(a,b,c){
    if(a === b && b === c){
        console.log("It's equilateral triangle.");
    }else if(a===b || a===c || b===c){
        console.log("It's  isosceles triangle.");
    }else{
        console.log("It's  scalene triangle.");
    }
};
triangleSides(5,7,8);


