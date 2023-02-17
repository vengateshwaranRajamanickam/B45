

var fruit=[
{name:"banana",age:"89"},
{name:"grape",age:"78"}
]
 //innerHTML innerText setAttribute appendChild
 let der=document.createElement("p");
 der.innerHTML="www.vision.com";
 document.body.appendChild(der);

for (var i=0;i<fruit.length;i++){
    var fru=document.createElement("p");
    fru.innerText=fruit[i].name;
    fru.setAttribute("style","color:red");
   der.appendChild(fru);
}
der.appendChild(fru);

// getElementById show output in UI
console.log("getElementById show output in CONSOLE & UI");
console.log(document.getElementById("head"));
// getElementById show output in UI & CONSOLE
let k =document.getElementById("head");
document.getElementById("head");
console.log(document.URL);
//alert method
//alert("hacked");


/*

let inp=document.createElement("p");
document.body.appendChild(inp);

function fvote(a,c){
    
    if(c>18)
    return "eligibile"
    else
    return "non eligible"
}
for (var i for fruit)
inp.innerText=fvote(fruit[i].name,fruit[i].age);
console.log(inp.innerText); */


//for ..of  for..in  of array   
console.log("//for ..of  for..in  of array");
const array1 = ['a', 'b', 'c'];
for (const element in array1) {
  console.log(element);
}
for (const element of array1) {
  console.log(element);
}
//for...in of object
console.log("//for...in of object");
const object = { a: 1, b: 2, c: 3 };

for (const property in object) {
  console.log(property);
  console.log(object[property]);
}

// create ne xml http request
let xhr=new XMLHttpRequest();
xhr.open("GET","https://jsonplaceholder.typicode.com/posts");
xhr.send();
let des=document.createElement("p");
document.body.appendChild(des);
xhr.onload=function(){
    if (xhr.status ==200){
    console.log(JSON.parse(xhr.response));
    let users=JSON.parse(xhr.response);
    for (let i of users){
        let p=document.createElement('p');
        p.innerText=`userid:${i.id}:${i.title}`;// very important line
        des.appendChild(p);
        }
    }
    else
    console.log(xhr.status);
}         
