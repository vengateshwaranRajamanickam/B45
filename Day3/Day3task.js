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
} 
/*
//resume on json
{
  "basics": {
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
    "startDate": "2016-09-01",
    "endDate": "2022-12-01",
    "summary": "Installation and configuration for Database, Switch and ATM.",
    "highlights": [
      "Started the company"
    ]
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
}
*/

