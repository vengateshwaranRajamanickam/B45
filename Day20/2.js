const selectDrop = document.getElementById('selectcountries');
const xcap = document.getElementById('population');

async function option(){
    let data=await fetch('https://restcountries.com/v2/all')
    .then(res=> res.json())
    let outpu = "";
    data.forEach(value =>outpu += `<option value="${value.name}">${value.name}</option>`)
    selectDrop.innerHTML = outpu;
  }
  option()
async function myFunction(event) {
   try{
    let xx=event.target.value;//    very very important
    //var x = document.getElementById("selectcountries").value;
    let ac = await fetch('https://restcountries.com/v2/all') //if it is fail it go directly go to catch block
    .then(res=> res.json())
    ac.forEach(value =>{
    if(value.name==xx)
    document.write(value.alpha2Code);
    })
    }
    catch(err){
      console.log("error");
    }
  }
