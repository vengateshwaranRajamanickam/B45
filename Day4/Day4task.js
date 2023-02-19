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
}


// compare JSON of two object without order  
var isEqualsJson=(obj1,obj2)=>{
    keys1 = Object.keys(obj1);
    keys2 = Object.keys(obj2);

    //return true when the two json has same length and all the properties has same value key by key
    return keys1.length === keys2.length && Object.keys(obj1).every(key=>obj1[key]==obj2[key]);
}
let obj1={name:"APPLE",age:45};
let obj2={age:45,name:"APPLE"};
console.log(isEqualsJson(obj1,obj2));
 */