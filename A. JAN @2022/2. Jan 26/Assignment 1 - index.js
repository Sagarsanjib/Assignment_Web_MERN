//Take 3 numbers from the user and alert minimum of those three.

var a = prompt ( "Enter first number");
var b = prompt ("Enter second number");
var c = prompt (" Enter third number");

a = parseInt(a);
b = parseInt(b);
c = parseInt(c);

if (a< b && a< c)
{ 
  
  alert (a+ "is the Smallest Number");
}
else if (b< a && b< c)
{
  
  alert (b+ "is the Smallest Number");
}
else 
{
  
  alert (c+ "is the Smallest Number");
}


