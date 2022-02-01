function readMessage(){
	var button = document.getElementById("myButton");
	var text = document.getElementById("idMessage");

	if (text.style.display === "block") {
	    button.textContent = "ReadMe"
	    text.style.display = "none";
	} else{
	    button.textContent = "HideMe"
	    text.style.display = "block";
    }
}