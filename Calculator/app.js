let input = document.querySelector(".udata");
let buttons = document.querySelectorAll("button");
 let str = "";
let buttomArrays = Array.from(buttons);

buttomArrays.forEach(btn =>{
    
    btn.addEventListener('click' , (e)=>{

        if( e.target.innerHTML == "ac"){
            str = "";
            input.value = str;
        }else if( e.target.innerHTML == "del"){
            str = str.slice(0,-1)
            input.value = str;
        }else if( e.target.innerHTML == "="){
            str = eval(str)
            input.value = str;
        }
        else{
            str += e.target.innerHTML;
            input.value = str;
        }
       
    })
});


