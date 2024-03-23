let textarea = document.getElementById("text");

function saveLocaltextArea(){
    localStorage.setItem("savetext", textarea.value);
}

if(localStorage.getItem("savetext")){
    textarea.value = localStorage.getItem("savetext");
}
textarea.addEventListener("input",saveLocaltextArea);