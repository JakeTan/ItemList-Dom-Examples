const button = document.querySelector("#submit");
const todoList = document.querySelector("#todo-list");
const todoNr = document.querySelector(".todo-nr b");
const mainTitle = document.querySelector('.main-title');


const items = todoList.children;


//Attach event listener
button.addEventListener("click", function() {
    const newItem = document.createElement("li");
    newItem.classList.add("item");
    newItem.innerText = `Item ${items.length + 1}`;
    todoList.append(newItem);
    todoNr.innerText = items.length;
});


button.addEventListener("click", function(){
    mainTitle.classList.toggle("color");
});

// button.addEventListener("keydown", function(event){
    //   if (event.keyCode === 81) {
//     mainTitle.classList.toggle("color");
// });