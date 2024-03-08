const task = document.querySelector('#addTask');
const btn = document.querySelector('.saveTask');
const showTask = document.querySelector(".container");
btn.addEventListener('click', function(){
    if(task.value.length==0) return alert("Please, Your task");
    const div1 = document.createElement('div');
    div1.innerHTML=`<div class="task-show"><div class="left"><input type="checkbox" name="checkbox" id="checkbox"><span>${task.value}</span></div><div class="right"><i class="bi bi-x"></i></div></div>`
    showTask.appendChild(div1);
})

const temp = document.querySelector('#checkbox');
temp.addEventListener('click',function(e){
    const span = document.querySelector('.taskspan');
    if(span.style.textDecoration == "line-through") {
        span.style.textDecoration="none"
    } else {
        span.style.textDecoration="line-through"
    }
});

const remove = document.querySelector('.bi-x');
remove.addEventListener('click', function() {
    document.querySelector('.task-show').remove()
})


// const para = document.createElement("p");
// const node = document.createTextNode("This is new.");
// para.appendChild(node);

// const element = document.getElementById("div1");
// element.appendChild(para);