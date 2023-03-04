
var n=document.createElement("p");
setTimeout(() =>n.innerText=prompt("enter the nth number"), 3000);
document.body.append(n);
let buttontime=getElementById("submit");
var i=0;
let timer=setInterval(()=>{
    i++;
    document.getElementById("demo").innerHTML=i;
    if(i==20)
    clearInterval(timer);
    else
    buttontime.addEventListener(("click"),()=>clearInterval(timer));
},1000);

// function ci(){
// clearInterval(timer);
// }





// let img3=document.createElement("img");
// img3.setAttribute("src","https://media.licdn.com/dms/image/C4D22AQGbkXqvNgsLcw/feedshare-shrink_800/0/1677556223899?e=1680739200&v=beta&t=ECc4neqyJpLUQWv-mIEyybpx8juh7_nLLF8QVlB023w");
// img3.setAttribute("height","100");
// img3.setAttribute("class","size");
// img3.setAttribute("width","100");
// document.body.append(img3);
// function largesize(){
//     document.querySelectorAll(".size").forEach((value)=>{
//     value.setAttribute("height","150");
//     value.setAttribute("width","150");
//     });
// }
// let clickinc = document.createElement('button');
// clickinc.setAttribute("onclick","largesize()");
// clickinc.innerText = 'increase size';
// document.body.appendChild(clickinc);




// let username=prompt("enter username");
// let password=prompt("enter password");
// let userconform=confirm("are you sure,you want to login");
// if(userconform==true)
// document.write("login successfull");
// else 
// document.write("login failed");

