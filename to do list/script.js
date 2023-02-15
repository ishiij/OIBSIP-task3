let buttonclick=()=>{
    if(document.querySelector(".add-new-task").value.length==0)
    {
        alert("Please enter a task first");
    }
    else{
        document.querySelector(".tasks").innerHTML+=`
        <div class="task">
        <input class="checkbox" type="checkbox">
        <span id="taskname">${document.querySelector(".add-new-task").value}</span>
        <button class="delete"><i class="fa-regular fa-trash-can"></i></button>
        </div>`;
        
        let ongoing_task=document.querySelectorAll(".delete");
        
        for(var i=0; i<ongoing_task.length; i++)
        {
            ongoing_task[i].onclick=function(){
                this.parentNode.remove();
            }
        }
        document.querySelector(".add-new-task").value="";
    }
};