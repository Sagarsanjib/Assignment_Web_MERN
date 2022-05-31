const list_fields = [];



const render  = function ()
{
    const text_generator = document.getElementById("list_container");

    text_generator.innerHTML = "";

    for (let i = 0; i <list_fields.length; i += 1)
    {
        const new_list = document.createElement('li');
 
        const new_fields = list_fields[i];
        
        new_list.style.display = "inline-block";
        new_list.style.height="150px";
        new_list.style.width="370px"
        new_list.style.backgroundColor="#403b4a";
        new_list.style.color="#black";
        new_list.style.fontSize="larger";
        new_list.style.fontWeight="bolder";
        new_list.style.listStyleType="none";
        new_list.style.position="relative";
        new_list.style.marginTop="20px";
        //new_list.style.border="5px solid white";
        
        // new_list.innerText = list_fields[i];
        new_list.innerText = new_fields;
        text_generator.append(new_list);
    }
}


const add_list = function()
{
    const input_done = document.getElementById("input_field"); 
    const new_note = input_done.value;
    list_fields.push(new_note);
    input_done.value = "";
    render();
    
}

const click = document.getElementById("add_button");
click.addEventListener('click', add_list);