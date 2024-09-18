const buttonE1 = document.querySelector("[chak-btn]");
const inputE1 = document.querySelector("[chak-input]");
const chipE1 = document.querySelector("[chak-chip]");

inputE1.addEventListener("keypress",(event)=>{
    if(event.keycode== 13){
        console.log(inputE1.value);
    }
}
)

buttonE1.addEventListener("click",()=>{
    alert("hey");
}
)