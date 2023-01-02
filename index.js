const textareaE =document.getElementById("textarea");
const tcounterE=document.getElementById("tcounter");
const rcounterE=document.getElementById("rcounter");
textareaE.addEventListener("keyup",()=>{
    updateCounter();
});

updateCounter()

function updateCounter(){
    tcounterE.innerText=textareaE.value.length;
    rcounterE.innerText=textareaE.getAttribute("maxlength") - textareaE.value.length;

}