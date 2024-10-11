document.getElementsByTagName("body")[0].style.backgroundColor =
  "hsl(148, 38%, 91%)";
document.getElementsByTagName("button")[0].style.backgroundColor =
  "hsl(169, 82%, 27%)";

let notok = "This field is required";
let notagree = "You must agree to submit";

document.getElementById("button").addEventListener("click", checkforvalidation);

function checkforvalidation(Event) {
    Event.preventDefault();
  let Fname = document.getElementById("validationCustom01").value;
  let Lname = document.getElementById("validationCustom02").value;
  let email = document.getElementById("emailinput").value;
  let message = document.getElementById("validationCustom03").value;
  let general=document.getElementById("General").checked;
  let support=document.getElementById("Support").checked;
  let check = document.getElementById("invalidCheck").checked;
let isvalid=true;
  if(!Fname){
    document.getElementById("fname").innerHTML = notok;
    isvalid=false;
  }else{
    document.getElementById("fname").innerHTML = "";
  }
  if(!Lname){
    document.getElementById("lname").innerHTML = notok;
  }else{
    document.getElementById("lname").innerHTML = "";
  }
  if(!email){
    document.getElementById("email").innerHTML = notok;
    isvalid=false;
  }else{
    document.getElementById("email").innerHTML = "";
  }
  if(!message){
    document.getElementById("message").innerHTML = notok;
    isvalid=false;
  }else{
    document.getElementById("message").innerHTML = "";
  }
  if(!general&&!support){
    document.getElementById("general").innerHTML = notok;
    document.getElementById("support").innerHTML = notok;
    isvalid=false;
}else{
    document.getElementById("general").innerHTML = "";
    document.getElementById("support").innerHTML = "";
}
  if(!check){
    document.getElementById("agree").innerHTML = notagree;
    isvalid=false;
  }else{
    document.getElementById("agree").innerHTML = "";
  }

    if(isvalid){
    document.getElementById("validationCustom01").value="";
    document.getElementById("validationCustom02").value="";
    document.getElementById("emailinput").value="";
    document.getElementById("validationCustom03").value="";
    document.getElementById("General").checked="";
    document.getElementById("Support").checked="";
    document.getElementById("invalidCheck").checked="";
    }

}
