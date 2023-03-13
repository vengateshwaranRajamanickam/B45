//document.addEventListener('DOMContentLoaded', () => {

  //const selectDrop = document.querySelector('#countries');
  const selectDrop = document.getElementById('selectcountries');
  const xcap = document.getElementById('xcapital');
  const xreg = document.getElementById('xregion');
  const xcode= document.getElementById('xcode');
  const xbutton= document.getElementById('xbutton');
  const ximg= document.createElement("img")
  var lib;

  fetch('https://restcountries.com/v2/all').then(res=>{
    return res.json();
  }).then(data=> 
    {
    lib=data;
    let outpu = "";
    data.forEach(value =>outpu += `<option value="${value.name}">${value.name}</option>`)
    selectDrop.innerHTML = outpu;
  })
 
//});
function myFunction() {
  var x = document.getElementById("selectcountries").value;
  xcap.innerText= x;
  console.log(lib);
  lib.forEach(value =>{
    if(value.name==x){
    xreg.innerText= value.region;
    let {png}=value.flags;
    ximg.src=png;
    xpic.append(ximg);
    xcode.innerText= value.alpha3Code;
    xbutton.innerHTML=`<a href="https://openweathermap.org/find?q=" target="_blank"></a>`
    }

  })
  
}
    
    // fetch("https://openweathermap.org")
    // .then((res)=>res.json())
    // .then((data)=>console.log(data))
    //document.body.getElementsByClassName(listregion).value.continents)
    // let g=document.getElementById("mylist");
    // function parameter(e){
    //   let out="";
    //   res.forEach(countries => {
    //     out+=`<option>${countries.name}</option>`
    //   })
    //   g.innerHTML=out;
    //document.querySelector("listregion")=<option value="e.value" ></option>
    //}
    