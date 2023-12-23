/*
Create a calculator that performs four basic operations.
The styling should be something like calculator.png
*/

function appendNumber(number) {
    document.getElementById('result').value += number;
    }
    
    function appendOperator(operator) {
    document.getElementById('result').value += operator;
    }
    
    function clearResult() {
    document.getElementById('result').value = '';
    }
    
    function calculate() {
    var result = document.getElementById('result').value; 
    var answer = eval(result);
    document.getElementById('result').value = answer;
    }
