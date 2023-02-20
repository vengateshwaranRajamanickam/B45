/*
var fruit=[
{name:"banana",age:"89"},
{name:"grape",age:"78"}
]
 //innerHTML innerText setAttribute appendChild
 let der=document.createElement("p");
 der.innerHTML="www.vision.com";
 document.body.appendChild(der);

for (var i=0;i<fruit.length;i++){
    var fru=document.createElement("p");
    fru.innerText=fruit[i].name;
    fru.setAttribute("style","color:red");
   der.appendChild(fru);
}
der.appendChild(fru);

// getElementById show output in UI
console.log("getElementById show output in CONSOLE & UI");
console.log(document.getElementById("head"));
// getElementById show output in UI & CONSOLE
let k =document.getElementById("head");
der.appendChild(k);
console.log(document.URL);
//alert method
//alert("hacked");


// Create a function which accepts object if age is greater than or equal 18 return Eligible for voting
// or else return not eligible for voting
// name : eligible/not eligible

let arr = [{ name: "ajesh", mobileNumber: "154131", age: 18 },
{ name: "akash", mobileNumber: "154131", age: 25 },
{ name: "anbu", mobileNumber: "154131", age: 30 },
{ name: "avinash", mobileNumber: "154131", age: 40 },
{ name: "divya", mobileNumber: "154131", age: 12 },
{ name: "karthik", mobileNumber: "154131", age: 8 },];

let inp=document.createElement("p");
document.body.appendChild(inp);

function checkeligibility(arr){
    
    if(arr>18)
    return "eligibile"
    else
    return "non eligible for voting"
}
arr.forEach(({name,age})=>{
let tem=document.createElement("p");
tem.innerText=name +":"+checkeligibility(age);
console.log(tem.innerText);
inp.appendChild(tem); 
});

//for ..of  for..in  of array   
console.log("//for ..of  for..in  of array");
const array1 = ['a', 'b', 'c'];
for (const element in array1) {
  console.log(element);
}
for (const element of array1) {
  console.log(element);
}
//for...in of object
console.log("//for...in of object");
const object = { a: 1, b: 2, c: 3 };

for (const property in object) {
  console.log(property);
  console.log(object[property]);
}

// create a xml http request
let xhr=new XMLHttpRequest();
xhr.open("GET","https://jsonplaceholder.typicode.com/posts");
xhr.send();
let des=document.createElement("p");
document.body.appendChild(des);
xhr.onload=function(){
    if (xhr.status ==200){
    console.log(JSON.parse(xhr.response));
    let users=JSON.parse(xhr.response);
    for (let i of users){
        let p=document.createElement('p');
        p.innerText=`userid:${i.id}:${i.title}`;// very important line
        des.appendChild(p);
        }
    }
    else
    console.log(xhr.status);
}        
{
  "basics": {
    "name": "John Doe",
    "label": "Programmer",
    "image": "",
    "email": "john@gmail.com",
    "phone": "(912) 555-4321",
    "url": "https://johndoe.com",
    "summary": "A summary of John Doe…",
    "location": {
      "address": "2712 Broadway St",
      "postalCode": "CA 94115",
      "city": "San Francisco",
      "countryCode": "US",
      "region": "California"
    },
    "profiles": [{
      "network": "Twitter",
      "username": "john",
      "url": "https://twitter.com/john"
    }]
  },
  "work": [{
    "name": "Company",
    "position": "President",
    "url": "https://company.com",
    "startDate": "2013-01-01",
    "endDate": "2014-01-01",
    "summary": "Description…",
    "highlights": [
      "Started the company"
    ]
  }],
  "volunteer": [{
    "organization": "Organization",
    "position": "Volunteer",
    "url": "https://organization.com/",
    "startDate": "2012-01-01",
    "endDate": "2013-01-01",
    "summary": "Description…",
    "highlights": [
      "Awarded 'Volunteer of the Month'"
    ]
  }],
  "education": [{
    "institution": "University",
    "url": "https://institution.com/",
    "area": "Software Development",
    "studyType": "Bachelor",
    "startDate": "2011-01-01",
    "endDate": "2013-01-01",
    "score": "4.0",
    "courses": [
      "DB1101 - Basic SQL"
    ]
  }],
  "awards": [{
    "title": "Award",
    "date": "2014-11-01",
    "awarder": "Company",
    "summary": "There is no spoon."
  }],
  "certificates": [{
    "name": "Certificate",
    "date": "2021-11-07",
    "issuer": "Company",
    "url": "https://certificate.com"
  }],
  "publications": [{
    "name": "Publication",
    "publisher": "Company",
    "releaseDate": "2014-10-01",
    "url": "https://publication.com",
    "summary": "Description…"
  }],
  "skills": [{
    "name": "Web Development",
    "level": "Master",
    "keywords": [
      "HTML",
      "CSS",
      "JavaScript"
    ]
  }],
  "languages": [{
    "language": "English",
    "fluency": "Native speaker"
  }],
  "interests": [{
    "name": "Wildlife",
    "keywords": [
      "Ferrets",
      "Unicorns"
    ]
  }],
  "references": [{
    "name": "Jane Doe",
    "reference": "Reference…"
  }],
  "projects": [{
    "name": "Project",
    "description": "Description…",
    "highlights": [
      "Won award at AIHacks 2016"
    ],
    "keywords": [
      "HTML"
    ],
    "startDate": "2019-01-01",
    "endDate": "2021-01-01",
    "url": "https://project.com/",
    "roles": [
      "Team Lead"
    ],
    "entity": "Entity",
    "type": "application"
  }]
}
*/
var age=3;
console.log("age");
let c=Math.pow(age,2);
console.log(c);
