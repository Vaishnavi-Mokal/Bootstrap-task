let namenode=document.getElementById("name");
let errnode1=document.getElementById("err1");




function validate1()
{   errnode1.innerHTML="";
    namenode.style.border="2px green solid";
    namenode.style.backgroundColor="yellow";
    let name=namenode.value;
    if(name=="")
    {
        errnode1.innerHTML="<b>this field is required";
        namenode.style.border="2px red solid";
        namenode.style.backgroundColor="pink";
        return false;
    }
    else{
        return true;
    }
}



let eidnode=document.getElementById("eid");
let errnode2=document.getElementById("err2");

function validate2()
{   errnode2.innerHTML="";
    eidnode.style.border="2px green solid";
    eidnode.style.backgroundColor="yellow";
    let emailID=eidnode.value;
    let ss=emailID.substring(emailID.indexOf('@')+1);
    console.log(ss);
    if(emailID=="")
    {
        errnode2.innerHTML="<b>this field is required";
        eidnode.style.border="2px red solid";
        eidnode.style.backgroundColor="pink";
        return false;
    }
    else if(!emailID.includes("@"|| ss==''))
    {
        errnode2.innerHTML="<b>Invalid Email ID</b>";
        eidnode.style.border="2px red solid";
        eidnode.style.backgroundColor="pink";
        return false;
    }
    else
        return true;
}

let citynode=document.getElementById("city");
let errnode3=document.getElementById("err3");

function validate3()
{   errnode3.innerHTML="";
    citynode.style.border="2px green solid";
    citynode.style.backgroundColor="yellow";
    let city=citynode.value;
    if(city=="")
    {
        errnode3.innerHTML="<b>this field is required";
        citynode.style.border="2px red solid";
        citynode.style.backgroundColor="pink";
        return false;
    }
    else{
        return true;
    }
}


let feedbacknode=document.getElementById("feedback");
let errnode4=document.getElementById("err4");

function validate4()
{   errnode4.innerHTML="";
    feedbacknode.style.border="2px green solid";
    feedbacknode.style.backgroundColor="yellow";
    let feedback=feedbacknode.value;
    if(feedback=="")
    {
        errnode4.innerHTML="<b>this field is required";
        feedbacknode.style.border="2px red solid";
        feedbacknode.style.backgroundColor="pink";
        return false;
    }
    else{
        return true;
    }
}





function validateForm()
{
    let st1=validate1();
    let st2=validate2();
    let st3=validate3();
    let st4=validate4();
   
    return (st1 && st2 && st3 && st4);
}