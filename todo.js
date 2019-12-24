const toDoForm = document.querySelector(".js-toDoForm"),
    toDoInput = toDoForm.querySelector("input"),
    toDoList = document.querySelector(".js-toDoList");

    const TODOS_LS = "toDos";
    var toDos = [];

    function saveToDos() {
        localStorage.setItem(TODOS_LS, JSON.stringify(toDos));
    }

    function deleteToDo(event) {
        const btn = event.target;
        const li = btn.parentNode;
        toDoList.removeChild(li);
        const cleanToDos = toDos.filter(function(toDo) {
          return toDo.id !== parseInt(li.id);
        });
        toDos = cleanToDos;
        saveToDos();
      }

    function paintTodo(text) {
        console.log(text);
        const li = document.createElement("li");
        const delBtn = document.createElement("button");
        delBtn.innerText = "🖕";
        delBtn.addEventListener("click", deleteToDo);
        const span = document.createElement("span");
        const newId = toDos.length +1;
        span.innerText = text
        li.appendChild(delBtn);
        li.appendChild(span);
        li.id = newId;
        toDoList.appendChild(li);
        const toDoObj = {
            text: text,
            id: newId
 
        };
        toDos.push(toDoObj);
        saveToDos()
    }
function handleSubmit(event) {
    event.preventDefault();
    const currentValue = toDoInput.value;
    paintTodo(currentValue);
    toDoInput.value = "";
}
function something (toDo) {
    console.log(toDo.text);
    paintTodo(toDo.text);
}

    function loadToDos() {
        const loadedtoDos = localStorage.getItem(TODOS_LS);
        if(toDos !== null) {
           
            const parsedToDos = JSON.parse(loadedtoDos);
            console.log(parsedToDos);
            parsedToDos.forEach(something);
        } else {

        }
    }

    function init() {
        var toDos = [];
        loadToDos();
        toDoForm.addEventListener("submit", handleSubmit)
    }

    init();