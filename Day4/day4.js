/*
//create a xml http request by forEach
let xhr=new XMLHttpRequest();
xhr.open("GET","https://jsonplaceholder.typicode.com/posts");
xhr.send();

let der=document.createElement("p");
document.body.appendChild(der);

xhr.onload=function(){
    if (xhr.status ==200){
    let users=JSON.parse(xhr.response);
    for (let i of users){
        let p=document.createElement('p');
        p.innerHTML=`userid-${i.id}:${i.title}`;// very important line
        //p.innerText=i.id +":"+ i.title;
        der.appendChild(p);
        }
    }
    else
    console.log(xhq.status);
}  
*/
/*
//create xml http request by for of
let xhq=new XMLHttpRequest();
xhq.open("GET","https://jsonplaceholder.typicode.com/posts");
xhq.send();

let deq=document.createElement("p");
document.body.appendChild(deq);


xhq.onload=function(){
    if (xhq.status ==200){
    let users=JSON.parse(xhq.response);
    for (let i of users){
        let p=document.createElement('p');
        p.innerText=`userid:${i.id}:${i.title}`;// very important line
        deq.appendChild(p);
      }
    }
    else
    console.log(xhq.status);
} 
*/

/*
//create xml http request by for in
let xhs=new XMLHttpRequest();
xhs.open("GET","https://jsonplaceholder.typicode.com/posts");
xhs.send();

let des=document.createElement("p");
document.body.appendChild(des);

xhs.onload=function(){
    if (xhs.status ==200){
    let users=JSON.parse(xhs.response);
    for (let i in users){
        let p=document.createElement('p');
        p.innerText= users[i].id+"-"+ users[i].title;
        des.appendChild(p);
      }
    }
    else
    console.log(xhs.status);
} 
*/

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
        let image=document.createElement('img');
        let conti=document.createElement('p');
        let cap=document.createElement('p');
        let pop=document.createElement('p');
        let area=document.createElement('p');
        
        area.innerText=region;
        conti.innerText=continents;
        cap.innerText=capital;
        pop.innerText=population;
        image.src=png;
        //let pic=(image.src=png);
        console.log(image.src=png);  
        console.log(area.innerText);  
        console.log(conti.innerText); 
        console.log(cap.innerText); 
        console.log(pop.innerText); 
        deo.appendChild(image);
        deo.appendChild(pop);
        deo.appendChild(cap);
        deo.appendChild(area);
        deo.appendChild(conti);
    });
}

// block scope
// for(let i=0;i<5;i++){
// setTimeout(()=>{     //(IIFE)Immediately Invoked Function Expressions
//     console.log(i);
// },1);
// console.log("30");
// }
/*
//spread operator
var arr=[];
for(let i=4;i<10;i++){
    arr=[...arr,i];
    console.log(arr)
}
let obj={nam:"raja",age:43,sex:"male"};
console.log(obj.age);
obj={...obj,age:61};
console.log(obj.age);
//rest operator
let rank=add("raja","sum",43,35,343,34);
function add(name,average,...rest){
    let sum=0;
    rest.forEach((value) => {
        sum+=value;
    });
    //console.log(sum/(rest.length));
    average=(sum/(rest.length));
    //console.log(average);
    return average;
}
console.log(rank);
//rest operator for object
//user.forEach(({continents,capital,region,population,flags})=>{

//array destructing
let rajasum=added("raja","sum",43,35,343,34);
function added(...arrow){
    let rt;
    let total;
    [rt,total,...rest1]=arrow;
    console.log(rest1);
} 
//object destructing
let ra={name:"raja",total:"sum",math:43,science:35,social:34};
    let {math,science}=ra;
    console.log(math);
*/