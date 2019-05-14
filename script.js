// Dummy Users 
const Users=[{
    name:"Jaydeep Eraniya",
    uName:"jaydeep1617",
    email:"jaydeep@sprinklr.com",
    password:"jd123",
},
{
    name:"Ayush Jain",
    uName:"ryuzaki",
    email:"ayushjr@sprinklr.com",
    password:"ayush123",
},
{
    name:"Nayan Santoki",
    uName:"Nayan",
    email:"nayan@gmail.com",
    password:"nayan123",
}
];

const loginForm=document.forms["lForm"];
let curUser;
loginForm.addEventListener("submit",function(e){
    e.preventDefault();

    const email=loginForm["email"].value;
    const password=loginForm["password"].value;
    // let userFound=false; 
    
    curUser=Users.find(function(user){
        return email===user.email && password===user.password; 
    });
    // Users.forEach( user=> {
    //     if(email===user.email && password===user.password){
    //         userFound=true;
    //         curUser=user;
    //     }
    // });
    
    //Dispaly profile page and remove login page
    if(curUser!==undefined){
        let temp =  document.getElementsByTagName("template")[0];
        let clon123 = temp.content.cloneNode(true);
        let loginCon=document.getElementsByClassName("login-container")[0];
        document.body.appendChild(clon123);
        document.body.removeChild(loginCon);
        displayDetails();
        followBtnHandler();
    }
    else{
        alert("Invalid Email Or password");
    }
});


// Follow Button Handler
function followBtnHandler(){
    const btn=document.getElementById("fButton");
    btn.addEventListener("click",function(){
        let txt = btn.textContent;
        if(txt==="Follow"){
            btn.textContent="Following";
        }
        else{
            btn.textContent="Follow";
        }
    });
};

function displayDetails(){
    const usernameSpan=document.getElementById("username");
    usernameSpan.innerText=curUser.uName;
}