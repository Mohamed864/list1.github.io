//add sports

var button = document.getElementById("add");
var input = document.getElementById("userInput1");
var ul1 = document.getElementById("ul1");

function inputlength() {
	return input.value.length;
}

function createListElement() {
	var li = document.createElement("li");
	li.appendChild(document.createTextNode(input.value));
	ul1.appendChild(li);
	input.value = "";
}

function addListAfterClick() {
	if(inputlength() > 0){
		createListElement();
	}
}

function addListAfterPressEnter(event) {
	if(inputlength() > 0 && event.keyCode === 13){
		createListElement();
	}
}

button.addEventListener("click",addListAfterClick);

input.addEventListener("keypress",addListAfterPressEnter);

//-----------------------------------------------
//remove sports

var btn = document.getElementById("remove");
var ul2 = document.getElementById("ul2");

btn.addEventListener("click", function() {
	var x = ul1.lastElementChild;
	ul1.removeChild(ul1.lastElementChild);
	var li1 = document.createElement("li");
	li1.appendChild(x);
	ul2.appendChild(li1);
});
