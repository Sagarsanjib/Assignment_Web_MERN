const todos = [];

const render = function () 

{
    const parent_container = document.getElementById("list_container");
    parent_container.innerHTML = "";


    for (let i = 0; i < todos.length; i++) 
    {
        const single_todo_item = todos[i];

        const new_list = document.createElement("li");

        new_list.style.fontSize="larger";
        new_list.innerText = single_todo_item;
        parent_container.appendChild(new_list);
        
        const hr = document.createElement("hr");
        hr.style.borderBottom="3px solid black";
        parent_container.appendChild(hr);
    }
}

const add_item = function () {
    const input_now = document.getElementById("input_please");

    const new_todo = input_now.value;
    if (input_now.value == "") 
    {
        input_now.style.color = "green";
        input_now.placeholder = "Please enter your to-do's";
    } 
    else 
    {
        /*input_now.style.color = "red";*/
        /*input_now.placeholder = "Type your note";*/
        todos.push(new_todo);
        input_now.value = "";
        render();
    }
}

const btn = document.getElementById("click_now");
click_now.addEventListener("click", add_item);