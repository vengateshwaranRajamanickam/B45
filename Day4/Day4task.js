
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