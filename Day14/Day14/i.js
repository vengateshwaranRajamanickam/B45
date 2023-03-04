let p= document.createElement("p");
document.body.append(p);

let img1=document.createElement("img");
img1.setAttribute("src","https://media.licdn.com/dms/image/C4D22AQGbkXqvNgsLcw/feedshare-shrink_800/0/1677556223899?e=1680739200&v=beta&t=ECc4neqyJpLUQWv-mIEyybpx8juh7_nLLF8QVlB023w");
img1.setAttribute("height","100");
img1.setAttribute("class","size");
img1.setAttribute("width","100");
document.body.append(img1);

let img2=document.createElement("img");
img2.setAttribute("src","https://media.licdn.com/dms/image/C4D22AQGbkXqvNgsLcw/feedshare-shrink_800/0/1677556223899?e=1680739200&v=beta&t=ECc4neqyJpLUQWv-mIEyybpx8juh7_nLLF8QVlB023w");
img2.setAttribute("height","100");
img2.setAttribute("class","size");
img2.setAttribute("width","100");  
document.body.append(img2);

let img3=document.createElement("img");
img3.setAttribute("src","https://media.licdn.com/dms/image/C4D22AQGbkXqvNgsLcw/feedshare-shrink_800/0/1677556223899?e=1680739200&v=beta&t=ECc4neqyJpLUQWv-mIEyybpx8juh7_nLLF8QVlB023w");
img3.setAttribute("height","100");
img3.setAttribute("class","size");
img3.setAttribute("width","100");
document.body.append(img3);

function largesize(){
    document.querySelectorAll(".size").forEach((value)=>{
    value.setAttribute("height","150");
    value.setAttribute("width","150");
    });
}
function smallsize(){
    document.querySelectorAll(".size").forEach((value)=>{
    value.setAttribute("height","50");
    value.setAttribute("width","50");
    });
}

let clickinc = document.createElement('button');
clickinc.setAttribute("onclick","largesize()");
clickinc.innerText = 'increase size';
document.body.appendChild(clickinc);

let clickred = document.createElement('button');
clickred.setAttribute("onclick","smallsize()");
clickred.innerText = 'increase size';
document.body.appendChild(clickred);




