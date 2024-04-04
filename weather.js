let inputEle=document.getElementById("inputtext");
let temp=document.getElementById("tempvalue");
let locEle=document.getElementById("location");
let desc=document.getElementById("weatherdesc");
let button=document.getElementById("btn");

const apikey="bdc5a6cdfcbf5594cb2270d86b232048";
button.onclick=function (){
    if(inputEle.value ==""){
    alert("Enter location Name");
    }
    else{
        loc=inputEle.value
        url=`https://api.openweathermap.org/data/2.5/weather?q=${loc}&appid=${apikey}`;
        fetch(url).then(res=>res.json())
        .then(data=>{
            console.log(data);
            const{name}=data;
            const{feels_like}=data.main;
            const{description}=data.weather[0];
            locEle.innerText=name;
            temp.innerText=Math.floor(feels_like-273);
            desc.innerText=description;
        })
        .catch(()=>{
            alert("Enter a valid Location name");

        })
        input.value="";

    }

}
