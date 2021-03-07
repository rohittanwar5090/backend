var button = document.querySelector(".todobtn");
var input =	document.querySelector(".inptext");
var list = document.querySelector(".todo-list");

button.addEventListener("click", func1);
list.addEventListener("click", func2);
	

function func1(event){
	event.preventDefault();
	
	const tododiv = document.createElement("div");
	tododiv.classList.add("todo");
	const newtodo= document.createElement("li");
	newtodo.classList.add("todoitem");
	newtodo.innerText=input.value;
	tododiv.appendChild(newtodo);
	
	const completebutton = document.createElement("button");
	completebutton.innerHTML = '<i class="fa fa-check"></i>';
	completebutton.classList.add("completebtn");
	const trashbutton = document.createElement("button");
	trashbutton.innerHTML = '<i class="fa fa-trash"></i>';
	trashbutton.classList.add("trashbtn");
	tododiv.appendChild(completebutton);
	tododiv.appendChild(trashbutton);
	list.appendChild(tododiv);
	input.value="";
};

function func2(e){
	const x = e.target;
	if(x.classList[0] === "trashbtn"){
		const y = x.parentElement;
		y.remove();
	}
	if(x.classList[0] === "completebtn"){
		const y = x.parentElement;
		y.classList.toggle("completed");
	}

};