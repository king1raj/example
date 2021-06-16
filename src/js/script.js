const form=document.getElementById("todoform");
const input=document.getElementById("todoinput");
const list=document.getElementById("todolist");

form.addEventListener("submit",createTodo);

function createTodo(event) {
    event.preventDefault();
const html=`<li class="text-lg">
      ${input.value}
      
      <button 
      onclick="deleteTodo(this)"
      class="border text-sm border-gray-200 bg-yellow-200 px-2 py-2  mb-2 rounded-full hover:bg-blue-300 focus:outline-none">Delete</button>
    </li>
`;

    list.insertAdjacentHTML("beforeend",html);
input.value="";
input.focus();

}
const deleteTodo=(todo)=>{
    todo.parentElement.remove();
}