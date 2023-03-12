//document.addEventListener('DOMContentLoaded', () => {

  //const selectDrop = document.querySelector('#countries');
  const selectDrop = document.getElementById('selectcountries');
  const xcap = document.getElementById('xcapital');
  const xreg = document.getElementById('xregion');
  const xcode= document.getElementById('xcode');
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
    xcode.innerText= value.alpha3Code;
   
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
    