//Question1

const firstAngle = parseInt(prompt("Enter the value of the first angle:"));
const secondAngle = parseInt(prompt("Enter the value of the second angle:"));
const thirdAngle = parseInt(prompt("Enter the value of the third angle:"));
 if(firstAngle + secondAngle + thirdAngle === 180 && firstAngle !== 0 && secondAngle !== 0 && thirdAngle !== 0 && firstAngle === 90 || secondAngle === 90 || thirdAngle ===90){
        console.log("It is a right triangle.");
    }else if(firstAngle + secondAngle + thirdAngle === 180 && firstAngle !== 0 && secondAngle !== 0 && thirdAngle !== 0 && firstAngle === 60 && secondAngle === 60 && thirdAngle === 60){
        console.log("It is an equilateral triangle.");
    }else if(firstAngle + secondAngle + thirdAngle === 180 && firstAngle !== 0 && secondAngle !== 0 && thirdAngle !== 0 ){
      console.log("It can be a triangle.");
 }else{
    console.log("It can not be a triangle.");
 }


 //Question2

 //2-What does this code return? 
 if (!null) {
    console.log("coffee");
  } else if (![]) {
    console.log("chai");
  }
  
  //3-Which one is truthy ?  //The answer is option3
  // 1- ""
  // 2- ''
  // 3- "false"
  // 4- 0

  //let optionValue = "";
  //let optionValue = '';
  let optionValue = "false";
  //let optionValue = 0;
  if(optionValue){
    console.log("It is truthy.")
  }else{
    console.log("It is falsy.")
  }
