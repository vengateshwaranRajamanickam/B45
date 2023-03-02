let p= document.createElement("p");
document.body.append(p);

let img1=document.createElement("img");
let img2=document.createElement("img");
let img3=document.createElement("img");
img1.setAttribute(src,"https://media.licdn.com/dms/image/C4D22AQGbkXqvNgsLcw/feedshare-shrink_800/0/1677556223899?e=1680739200&v=beta&t=ECc4neqyJpLUQWv-mIEyybpx8juh7_nLLF8QVlB023w");
img2.setAttribute(src,"E:\DAYTEST\Day12\profile1.jpg");
img3.setAttribute(src,"E:\DAYTEST\Day12\profile1.jpg");
document.body.append(img1);
document.body.append(img2);
document.body.append(img3);

function largesize(){
    let temp=document.querySelectorAll();
    temp.width=50px;
    temp.height=50px;
    return temp;

}
function smallsize(){
    let temp=document.querySelectorAll();
    temp.width=50px;
    temp.height=50px;
    return temp;
}

let clickinc = document.createElement('button');
clickinc.setAttribute(onclick,largesize());
clickinc.innerText = 'increase size';
document.body.appendChild(clickinc);

let clickred = document.createElement('button');
let ansred=
clickred.setAttribute(onclick,smallsize());
clickred.innerText = 'increase size';
document.body.appendChild(clickred);




