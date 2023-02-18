/*
let xhr=new XMLHttpRequest();
xhr.open("GET","https://jsonplaceholder.typicode.com/posts");
xhr.send();
let des=document.createElement("p");
document.body.appendChild(des);



// create xml http request by forEach
xhr.onload=function(){
    if (xhr.status ==200){
    console.log(JSON.parse(xhr.response));
    let users=JSON.parse(xhr.response);
    users.forEach((value)=>{
        let p=document.createElement('p');
        p.innerText=`userid:${value.id}:${value.title}`;// very important line
        des.appendChild(p);
      });
    }
     else
     console.log(xhr.status);  
}        


// create xml http request by for of
xhr.onload=function(){
    if (xhr.status ==200){
    console.log(JSON.parse(xhr.response));
    let users=JSON.parse(xhr.response);
    for (let i of users){
        let p=document.createElement('p');
        //p.innerText=i.id+":"+i.title;
        p.innerHTML=`userid:${i.id}:${i.title}`;// very important line
        des.appendChild(p);
        }
    }       
    else
    console.log(xhr.status);
    
} 


// create xml http request by for in
xhr.onload=function(){
    if (xhr.status ==200){
    console.log(JSON.parse(xhr.response));
    let users=JSON.parse(xhr.response);
    for (let i in users){
        let p=document.createElement('p');
        p.innerText=(users[i].id +":"+ users[i].title);// very important line
        des.appendChild(p);
      }
    }
    else
    console.log(xhr.status);
} 


// create xml http request by for 

 xhr.onload=function(){
    if (xhr.status ==200){
    let users=JSON.parse(xhr.response);
    for (let i=0;i<users.length;i++){
        let p=document.createElement('p');
       p.innerText=(users[i].id +":"+ users[i].title);// very important line
        des.appendChild(p);
      }
    }
    else
    console.log(xhr.status);
} */

//resume on json
var a=
{ "basics": {
    "name": "Vengateshwaran",
    "label": "Programmer",
    "picture": "",
    "email": "vengateshwaran.1994@gmail.com",
    "phone": "(91) 73973-50312",
    "website": "http://johndoe.com",
    "summary": "A summary of John Doe...",
    "location": {
      "city": "Chennai",
      "countryCode": "India",
      "region": "Tamil Nadu"
    }
  },
  "work": [{
    "company": "Multi Level Technology Company",
    "position": "IT Support",
    "website": "https://mlgroup.ae/",
    "startDate": "2019-09-01",
    "endDate": "2022-12-01",
    "summary": "Installation and configuration for Database, Switch and ATM",
    "highlights": [
      "Configure ATM -connect it to branch network switch-configure in database" ]
      
  },{
    "company": "Barrontech ",
    "position":"Network Engineer",
    "startDate": "2016-09-01",
    "endDate": "2019-05-01",
    "summary": "Configure and manage networking ",
    "highlights": [
      "Check and maintain branch networking" ]
  }],
  "certificates": [{
    "name": "CCNA network associate Certificate",
    "date": "2022-04-07",
    "issuer": "Company",
    "url": "https://certificate.com"
  }],
  "achievment": [{
    "title": "Coordinator",
    "date": "2022-03-01",
    "awarder": "multilevel technology",
    "summary": "managed a team of 25 member"
  }],
  "education": [{
    "institution": "Sastra University",
    "area": "Electrical and Electronics Development",
    "studyType": "Bachelor",
    "startDate": "2012-06-01",
    "endDate": "2016-06-01",
    "gpa": "6.8",
  }],
  "skills": [{
    "name": "Web Development",
    "level": "Entry",
    "keywords": ["HTML","CSS","Javascript"]
  }]
};
console.log(a);
let resume=document.createElement("p");
document.body.appendChild(resume);



