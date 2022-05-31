//Assingment 2 - Print the first n number of a fibonacci series

var input = prompt ("Enter the size of the fibonaccis series");

input = parseInt(input);

var first = 0;
var second = 1;
var fibonacci = 0;
console.log (first);
console.log (second);


for ( i = 2; i < input; i = i + 1)

       {

                   fibonacci = first + second;
                   console.log (fibonacci);
                   first = second;
                   second = fibonacci;
       }
console.log ("Program execution completed");


