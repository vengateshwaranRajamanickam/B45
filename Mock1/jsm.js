// let inp=[2,2];
// let pro=inp[0]*inp[1];
// let ans=Math.sqrt(pro);
// if(inp[0]==ans)
// console.log("yes");
//   else
// console.log("no");

// let n=41;

// function isComposite(n) 
// { 
//     if (n <= 3) 
//     return false; 
//     if (n%2 == 0 || n%3 == 0) 
//     return true; 
  
//     return false; 
// } 
//     isComposite(n)?console.log("yes"):console.log("no"); 

// let userInput="mom"
// let k=userInput.split("");
// if(k.length%2===0)
// console.log(0);
// else{
// let mid=k.length/2;
// mid=mid.toFixed();
// console.log(mid)
// let j=k.length-1;
// console.log(j);
// let anv;
// for(let i=0;i<mid;i++,j--){
//    if(k[i]==k[j])
//    anv=true;
//    else
//    anv=false;
//    break;
// }
// if(anv===true)
// console.log(1);
// else
// console.log(0);
// }


// let sort=userInput[1];
// let n=userInput[0];
// let alpa;
// for (let i=0;i<n;i++){
//     let temp=sort.split("");
//     alpa=temp.slice(0,1);
// }


// let z="jack and jill went up and down to get water";
// z=z.replace("up and down","down and up")
// console.log(z);


// let arr = [1, 2, 333, 786, 11, 23]
// let ans=arr.sort((a,b)=>b-a);
// console.log(ans);

//function ValidateForm(){
//     let sb=confirm("kindly conform your details");
//     const form= document.forms[0];
//     let text = "";
//     var valid=0;
//     for ( i = 0; i <form.length; i++) {
//         if(form.elements[i].value==""){
//         alert("please fill all element");
//         break;
//         }
//         else{
//         valid++;
//         text+= form[i].id+":"+form.elements[i].value ;
//         }
//     }
//     if(valid=form.length)
//     alert(text);
//     else 
//     alert("please fill all element");
    
// }

//document.body.style.backgroundColor="red";

// var elem = document.getElementById("ssize");
// function fullscreen(){
//         elem.requestFullscreen();
// }
// function exitfullscreen(){
//     document.exitFullscreen();
// }

// const fullEl = document.querySelector(".full");

// //const bodyEl = document.querySelector("body");

// fullEl.click = JSON.parse(localStorage.getItem("mode"));

// updateBody();

// function updateBody() {
//   if (fullEl.click) {
//     window.fullscreen;
//   } else {
//     window.exitfullscreen;
//   }
// }


// fullEl.addEventListener("click", () => {
//   updateBody();
//   updateLocalStorage();

// }); 

// function updateLocalStorage() {
//   localStorage.setItem("mode", JSON.stringify(inputEl.checked));
//}
// function gh(event){
//     if(event.keyCode==32){
//     alert("Thank You");
//     window.close();}
//     else
//     alert("invalid");
// }
// document.addEventListener("keydown",gh);

// let dec = 21.12;
// console.log((dec).toString(16));
// console.log(Number(dec).toString(2));

// function userdetail(name,age){
//     console.log(name);
//     console.log(age);
// }
// function userinput(callback){
//     let a=prompt("enter your name");
//     let b=prompt("enter your age");
//     callback(a,b);

// }
// userinput(userdetail);


/*
//create country flag from the data
let xho=new XMLHttpRequest();
xho.open("GET","https://restcountries.com/v3.1/all");
xho.send();

let deo=document.createElement("p");
document.body.appendChild(deo);

xho.onload=function(){
    let user=JSON.parse(xho.response);
    user.forEach(({continents,capital,region,population,flags})=>{
        let {png}=flags;
        let imag=document.createElement('img');
        let conti=document.createElement('p');
        let cap=document.createElement('p');
        let pop=document.createElement('p');
        let area=document.createElement('p');
        
        area.innerText=region;
        conti.innerText=continents;
        cap.innerText=capital;
        pop.innerText=population;
        imag.src=png;
        console.log(png);  
        console.log(area.innerText);  
        console.log(conti.innerText); 
        console.log(cap.innerText); 
        console.log(pop.innerText); 
        deo.appendChild(imag);
        deo.appendChild(pop);
        deo.appendChild(cap);
        deo.appendChild(area);
        deo.appendChild(conti);
    });
}*/
createlist(value){
   value.forEach(() => {
    document.getElementById("id").value;
   });
}

fetch("https://restcountries.com/v3.1/all")
.then((data)=>data.json())
.then((continents)=>createlist(continents))
    
    let d=document.createElement("li");
    d=continents(value)
}
addEventListener("click",()=>
  
}
// let promise2A=fetch("https://openweathermap.org/")
// .then((res)=>console.log(res))        
// Promise.allSettled(promise1A,promise2A)

