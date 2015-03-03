// Get numbers

var num1 = prompt("Please enter a number:");
var num1Int = parseInt(num1, 10);

var num2 = prompt("Please enter another number:");
var num2Int = parseInt(num2, 10);

var num3 = prompt("Please enter one more number:");
var num3Int = parseInt(num3, 10);

// Equations

alert(num1Int + " \+ " + num2Int + " \+ " + num3Int + " \= " + (num1Int + num2Int + num3Int) + "\n" + 
      num1Int + " \- " + num2Int + " \- " + num3Int + " \= " + (num1Int - num2Int - num3Int) + "\n" +
      num1Int + " \* " + num2Int + " \* " + num3Int + " \= " + (num1Int * num2Int * num3Int) + "\n" +
      num1Int + " \/ " + num2Int + " \= " + (num1Int / num2Int) + "\n" +
      num1Int + " \% " + num2Int + " \= " + (num1Int % num2Int) + "\n" +
      num1Int + "\+\+ \= " + ++num1Int + "\n" +
      num2Int + "\-\- \= " + --num2Int + "\n");

