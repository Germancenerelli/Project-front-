function saveData(){
    let
}



function saveData(){
    let name,email,pss;
    name=document.getElementById("name").value;
    email=document.getElementById("email").value;
    pss=document.getElementById("pass").value;

    let user_recorder=new Array();
    user_recorder=JSON.parse(localStorage.getItem("users"))?JSON.parse(localStorage.getItem("users")):[]

    if(user_recorder.some((v)=>{return v.email==email && v.pss==pss}));
}
