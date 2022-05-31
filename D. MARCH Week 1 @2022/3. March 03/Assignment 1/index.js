var element1;
var element2;
var element3;
function pop_up()
{
    element1 = document.getElementById("parent-container");
    element1.style.display = show.checked ? "block" : "none";
    
    element2 = document.getElementById("show");
    element2.style.display=show.checked? "none":"block";

    
    element3 = document.getElementById("show1");
    element3.style.display=show.checked? "none":"block";
    
    
}
function hidepopup()
{
    element1 = document.getElementById("parent-container");
    element1.style.display =press.click? "none" : "block";

    element2 = document.getElementById("show");
    element2.style.display=press.click? "block":"none";

    element3 = document.getElementById("show1");
    element3.style.display=press.click? "block":"none";
}  