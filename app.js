// val = document.forms
// console.log(val)
// a_tag = document.links[0]
// console.log(a_tag)
// tag_a_href = a_tag.getAttribute("href")
// console.log(tag_a_href)

// test = document.getElementById("task-title")
// console.log(test)
// test.classList.remove("test")
// test.classList.add("sam")
// test =document.getElementsByClassName("test")
// console.log(test)
// first_li = document.querySelector("li:first-child")
// console.log(first_li)
// button = document.querySelector(" form button.btn")
// console.log(button)
// button.addEventListener("click",btn_click)
// function btn_click(event){
//     event.preventDefault()
//     console.log("hooraaa")
    

// }


    
const form = document.getElementById("task-form");
console.log(form)
form.addEventListener('submit', addTask);

i_elements = document.querySelector("ul.list-group");
i_elements.addEventListener('click', clearTask)

function clearTask(e){
    if( e.target.className.search("delete-item") != -1  ){
        e.target.parentElement.remove();
    }
}

function addTask(e){
    inputTask = document.querySelector('#task2')
    theInput = inputTask.value
   
   if(theInput == ''){
       alert("please add input")
   }
   else{
    tag_i = document.createElement("i")
    tag_i.className = "fas fa-times text-danger mr-auto delete-item"

    const li = document.createElement("li");
    const node = document.createTextNode(theInput);
    console.log(li)
    li.appendChild(node);
    li.className = "list-group-item d-flex justify-content-between"
    li.appendChild(tag_i);
    ul = document.querySelector(".list-group")
    ul.appendChild(li)

   }
    e.preventDefault()
}


const clearButton = document.querySelector('.clear-tasks')
clearButton.addEventListener('click', clearTasks)
const taskList = document.querySelector('#list2');

function clearTasks(event) {
    if (event.target.classList.contains('clear-tasks')) {
        if (confirm('Are You Sure?')) {
          while(taskList.firstChild) {
            taskList.removeChild(taskList.firstChild);
          }
        }
    }
  }

// clearButton.addEventListener("click",clearTasks)
//     function clearTasks(event){
//         var myList = document.getElementById('list2')
//         myList.innerHTML = ''

//     }

