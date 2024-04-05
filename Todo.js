const inputbox1 = document.getElementById("inputbox");
const lists = document.getElementById("lists");
function Task(){
    if(inputbox1.value=""){
        alert("Enter Somthing")
    }
    else{
        let li = document.createElement("li");
        li.innerhtml=inputbox1.value;
        lists.appendChild(li);
        let span =document.createElement("span");
        span.innerHTML="\u00d7";
        li.appendChild(span)
    }
    inputbox1.value="";
    savedata();
}
lists.addEventListener("click",function(e){
    if(e.target.tagName === "li"){
        e.target.classList.toggle("checked");
    savedata();

    }
    else if(e.target.tagName === "span"){
        e.target.parentElement.remove();
    savedata();

    }
},false);
function savedata(){
    localStorage.setItem("data",lists.innerHTML);
}
function showTask(){
    lists.innerHTML=localStorage.getItem("data");
}
showTask();