import handleToggletheme from "./handleToggletheme.js"; 

const inputE1=document.querySelector("[data-input-text]");
const buttonE1 = document.querySelector(".btn-reverse");
const chipE1 = document.querySelector(".chip");
const ToggleE1 = document.querySelector(".theme");


function reverse(input){
    return input.split("").reverse().join("")
}
function handlereverse(){
    console.log("Hey");
 const currenValue = inputE1.value ;

 console.log(currenValue);

 if(!currenValue) return;
 console.log("wow");

 const reversed = reverse(currenValue);
 inputE1.value = reversed;

 chipE1.classList.add("show");

 setTimeout(() =>{
    chipE1.classList.remove("show");
},1500);

}

inputE1.addEventListener("keypress",(event)=>{
    if(event.key ==="Enter"){
        handlereverse();
    }
});

buttonE1.addEventListener("click", handlereverse);


ToggleE1.addEventListener("click",()=>{
    handleToggletheme()
})