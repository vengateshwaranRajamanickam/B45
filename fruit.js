var fruit=[
{name:"apple",color:"red"}
{name:"banana",color:"yellow"}
]

let der=document.createElement("div");
document.body.appendChild(der);

for (let i-0;i<fruit.length;i++){
    let fru=document.createElement("p");
    fru.innerText=fru[i].name;
    fru.setAttribute("style",+person[i].color);
}
der.appendChild(fru);


