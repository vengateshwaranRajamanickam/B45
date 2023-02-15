

var fruit=[
{name:"apple" , color:"red"},
{name:"banana", color:"yellow"}
]

let der=document.createElement("div");
der.innerHTML="<p>test</P>";
document.body.appendChild(der);
let fru=document.createElement("p");
//for (let i=0;i<=fruit.length;i++){
   // fru.innerText=fruit[i].color;
   // fru.setAttribute("style","color:red");
//}
der.appendChild(fru);
// go to conole area
console.log(document.getElementById('head'));
// printin html area
let k=document.getElementById('head');
document.body.appendChild(k);
console.log(document.URL);
alert("hacked");
