

var fruit=[
{name:"apple" ,age:"34", color:"red"},
{name:"banana",age:"89"},
{name:"grape",age:"78"}
]

let der=document.createElement("div");
der.innerHTML="<p>test</P>";
document.body.appendChild(der);

for (var i=0;i<fruit.length;i++){
    var fru=document.createElement("p");
    fru.innerText=fruit[i].name;
    fru.setAttribute("style","color:red");
   der.appendChild(fru);
}
der.appendChild(fru);

// go to conole area
console.log(document.getElementById('head'));
// printin html area
let k=document.getElementById('head');
document.body.appendChild(k);
console.log(document.URL);
//alert("hacked");
console.log("hello");// it will print the hello in day 3.html