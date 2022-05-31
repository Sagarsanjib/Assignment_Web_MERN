function add()
{
    var input1=document.getElementById("first_no");
    var input2=document.getElementById("second_no");
    var a=parseInt(input1.value);
    var b=parseInt(input2.value);
    if(isNaN(a)&&isNaN(b))
    {
        var op=document.getElementById("result");
        op.innerText="Enter only numbers";
    }
    else
    {
    var output=a+b;
    var op=document.getElementById("result");
    op.innerHTML=("The sum is:"+" "+output); 
    }
}