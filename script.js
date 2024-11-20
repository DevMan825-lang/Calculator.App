let input = document.getElementById("inputField");
let buttons = document.querySelectorAll("button");
let buttonArr = Array.from(buttons);
let string = " ";
buttonArr.forEach(function(btn){
btn.addEventListener("click", function(event){
    if(event.target.innerHTML == "AC"){
        string = " ";
        input.value = string;
    }else if(event.target.innerHTML == "DEL"){
        string = string.substring(0, string.length-1);
        input.value = string;
    }else if(event.target.innerHTML == "="){
        string = eval(string);
        input.value = string;
    }else{
         string += event.target.innerHTML;
         input.value = string;
        }
    });
});
