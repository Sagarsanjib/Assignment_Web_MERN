//Assignment 1- User enters a number, check and tell the whether the number is prime number or not.

var num = prompt ("Enter a number");

num = parseInt(num);

if (isNaN(num) )
   {
         alert ("Please Enter a valid number");
    }

else
        {
             var count = 0;
             for (var i = 2; i < num; i = i + 1)
            
                  {
                          if (num % 2 == 0)
                            
                                 {
                                       count = count + 1;
                                       break;
                                  }
                   }
         }

if (count == 0)
       {
          console.log ("The entered number is a prime number");
        }

else
       {
          console.log ("The entered number is not a prime number");
       }

console.log ("The program exeuction completed");