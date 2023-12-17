const btn = document.querySelectorAll("button"); 
const body = document.body; 

btn.forEach(btn =>{
    btn.addEventListener("click", ()=>{
        color = btn.value;
        changeBackground(color); 
        
    })
});
const changeBackground = (color) => {
    if(color === "Purple"){
        body.style.backgroundColor = "purple"; 
    }
    else if(color === "red"){
        body.style.backgroundColor = "red";

    }
    else if(color === "yellow"){
        body.style.backgroundColor = "yellow";

    }
    else if(color === "skyblue"){
        body.style.backgroundColor = "skyblue";
    }
    else if(color === "orange"){
        body.style.backgroundColor = "orange";
    }
    else{
        body.style.backgroundColor = "#ccc"; 
    }

}