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
loginForm.addEventListener("submit",function(event){
    event.preventDefault();

    const email=loginForm["email"].value;
    const password=loginForm["password"].value;
    
    curUser=Users.find((user)=>{
        return email===user.email && password===user.password; 
    });

    if(curUser!==undefined){
        
        const template =  document.getElementsByTagName("template")[0];
        const profile = document.importNode(template.content,true);
        const loginContainer=document.getElementsByClassName("flip-card")[0];
        const bodyEle=document.body;
        bodyEle.appendChild(profile);
        bodyEle.removeChild(loginContainer);

        const usernameSpan=document.getElementById("username");
        usernameSpan.innerText=curUser.uName;
        
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



const forgotBtn=document.getElementById("forgot-btn");
forgotBtn.addEventListener("click",function(){
    document.getElementsByClassName("login-container")[0].style.cssText="transform: rotateY(180deg);";
});

const backBtn=document.getElementById("back-btn");
backBtn.addEventListener("click",function(){
    document.getElementsByClassName("login-container")[0].style.cssText="transform: rotateY(0);";
});