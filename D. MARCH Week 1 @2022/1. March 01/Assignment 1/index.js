function btnclick()
{
var password1=document.getElementById("password_one");
var password2=document.getElementById("password_again");
var password_value1=password1.value;
var password_value2=password2.value;
    if(password_value1==password_value2)
    {
        password1.style.backgroundColor="green";
        password2.style.backgroundColor="green";
        var pwd_result=document.getElementById("password_result");
        pwd_result.innerText="Password matched";
    }
    else
    {
        password1.style.backgroundColor="red";
        password2.style.backgroundColor="red";
        var pwd_result=document.getElementById("password_result");
        pwd_result.innerText="Password not matched";
        password1.value="";
        password2.value="";
    }
    }
