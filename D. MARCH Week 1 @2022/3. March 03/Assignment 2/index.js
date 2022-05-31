var number1=prompt("Enter first number");
var number2=prompt("Enter second number");
number1=parseInt(number1);
number2=parseInt(number2);
if(isNaN(number1)&&isNaN(number2))
{
    alert("Enter valid input");
}
else
{
    document.write("Value of number1 before swapping is:"+" "+number1);
    document.write("<br/>");
    document.write("Value of number2 before swapping is:"+" "+number2);
    number1=number1+number2;
    number2=number1-number2;
    number1=number1-number2;
    document.write("<br/>");
    document.write("Value of number1 after swapping is:" + " " +number1);
    document.write("<br/>");
    document.write("Value of number2 after swapping is:" + " " +number2);
}
