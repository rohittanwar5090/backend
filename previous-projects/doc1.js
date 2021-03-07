const button = document.querySelector(".fa-plus");
const expense = document.querySelector(".expenses");
const deduction = document.querySelector(".deductions");
const date = document.querySelector(".dates");

const tables= document.querySelector("#mytable");




button.addEventListener("click", (e)=>{
	e.preventDefault();
	if((expense.value&&date.value&&deduction.value) ===""){
		alert("fuddu samajha hua hai kya")
	}
	else{
	/*alert("hey there");*/
	var newrow= tables.insertRow(-1);
	var newcell1 = newrow.insertCell(0);
	var newcell2 = newrow.insertCell(1);
	var newcell3 = newrow.insertCell(2);
	var newcell4 = newrow.insertCell(3);
	newcell1.innerText=expense.value;
	newcell2.innerText=date.value;
	newcell3.innerText=deduction.value;
	newcell4.innerHTML = '<i class="fa fa-trash"></i>';
	newcell4.classList.add("trash");
	newcell4.addEventListener("click" , func1);
	function func1(e){
		const trashbtn = e.target;
		if(trashbtn.classList[0] === "trash"){
						newrow.remove();
		}
	
	}
	expense.value="";
	date.value="";
	deduction.value="";
	}
})

