// Assignment 2 - User will give a string. Return the count of vowels.

       var str=prompt("Enter a string");


       var str1=str.split("");


      console.log(str1);


      var count=0;

      
for(var i=0; i<str1.length; i++)
                {
    
                        switch(str1[i])
                   {
    
                         case "a":
    
                         case "A":
         
                                           count=count+1;
         
                                           break;
   

                         case "e":
   
                         case "E":
         
                                           count=count+1;
         
                                           break;

   
                    
                         case "i":
   
                         case "I":
         
                                          count=count+1;
         
                                          break;

   
           
                         case "o":
   
                         case "O":
         
                                         count=count+1;
         
                                         break;

   

                         case "u":
   
                         case "U":
        
                                        count=count+1;
        
                                        break;
   
                 }

      
            }

            
             console.log(count);
             console.log("total number of vowel is " + count);

