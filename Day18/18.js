//document.addEventListener('DOMContentLoaded', () => {

  //const selectDrop = document.querySelector('#countries');
  const selectDrop = document.getElementById('countries');


  fetch('https://restcountries.com/v2/all').then(res=>{
    return res.json();
  }).then(data=> 
    {
    let outpu = "";
    data.forEach(value =>outpu += `<option value="${value.name}">${value.name}</option>`)
    selectDrop.innerHTML = outpu;
  })
 
//});
      
    fetch("https://openweathermap.org")
    .then((res)=>res.json())
    .then((data)=>console.log(data))
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
    