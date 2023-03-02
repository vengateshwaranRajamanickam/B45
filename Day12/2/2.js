const qselector = ()=>document.querySelector(".Testing").style.color="red"
const qselectorall = ()=>{
    let ans=document.querySelectorAll(".Testing");
    ans.forEach((value)=>value.style.color="green")
};