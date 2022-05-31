var obj = {
    
    "students": [
	{
	    "name": "Sagar",
	    "marks": 15
	},
	{
	    "name": "Sanjib",
	    "marks": 174
	},
	{
	    "name": "Chandan",
	    "marks": 99
	},
	{
	    "name": "Washik",
	    "marks": 151
	},
	{
	    "name": "Dev",
	    "marks": 0
	},
        {
	    "name": "Jacky",
	    "marks": 127
	},
    ],
}
console.log(obj.students);

pass = prompt("Enter passing marks");

pass = parseInt(pass)



len = obj.students.length


var passed_stu = [ ];


        
for (i=0; i<len; i++)
              {
    
                     new1 = obj.students[i];

    
                             if(new1["marks"] >= pass)
                                  {
        
                                       passed_stu.push(new1["name"]);
    
                                  }


              }


 
             console.log(passed_stu);