

function Hideme(id,action_type='close')
{
   if(action_type=="visible")
   {
        var Divs_To_Hide = document.getElementsByClassName("fav-img");
        for(var i = 0; i < Divs_To_Hide.length; i++)
        {        
            Divs_To_Hide[i].style.display = "none"; 
        }
        let bigger_img=document.getElementById("large-img"+id);
        bigger_img.style.display="block";
   }

   else
   {
        let big_img=document.getElementById("large-img"+id);
        big_img.style.display="none"; 
        var Divs_To_Show = document.getElementsByClassName("fav-img"); //divsToHide is an array
        for(var i = 0; i < Divs_To_Show.length; i++)
        {        
            Divs_To_Show[i].style.display = "block"; 
        }
   }
}

