var fullName = document.getElementById("name");
const phone = document.getElementById("tel");
const email = document.getElementById("email");
const subject = document.getElementById("subject");
const message = document.getElementById("message");
const form  = document.getElementById("form");
const errorElement = document.getElementById('error')


// variables of slider
var menuBtn = document.getElementById('menu-btn');
var nav = document.getElementsByTagName('ul');
// slider starts
const productContainers = [...document.querySelectorAll('.product-container')];
const nextBtn = [...document.querySelectorAll('.next-btn')]
const preBtn = [...document.querySelectorAll('.pre-btn')]

productContainers.forEach((item, i)=> {
  let containerDimensions = item.getBoundingClientRect();
  let  containerWidth = containerDimensions.width;
  
  nextBtn[i].addEventListener('click', () =>{
    item.scrollLeft += containerWidth;
  })

  preBtn[i].addEventListener('click', () =>{
    item.scrollLeft -= containerWidth;
  })
  
})
//slider ends

menuBtn.addEventListener('click', function() {
  document.getElementById("nav").classList.toggle("open-close");


})
//validateForm()
 
function validForm(){
  //alert("alert")

  var name = document.contact-container.name;
  var email = document.contact-container.email;
  var subject = document.contact-conatiner.subject;
  var phone = document.contact-container.phone;
 


  if (name.value == ""){
    name.nextElementSibling.style.display = "block";
    name.style.border = "1px solid #f00";
    return false
  }
  else{
    name.nextElementSibling.style.display = "none";
    name.style.border = "1px solid transparent";
   
  }
  if (email.value.match() || email.value == ""){
    email.nextElementSibling.style.display = "block";
    email.style.border = "1px solid #f00";
    return false
  }
  else{
    email.nextElementSibling.style.display = "none";
    email.style.border = "1px solid transparent";
   
  }
  if (subject.value == ""){
    subject.nextElementSibling.style.display = "block";
    subject.style.border = "1px solid #f00";
    return false
  }
  else{
    subject.nextElementSibling.style.display = "none";
    subject.style.border = "1px solid transparent";
   
  }
  if (phone.value == ""){
    phone.nextElementSibling.style.display = "block";
    phone.style.border = "1px solid #f00";
    return false
  }
  else{
    phone.nextElementSibling.style.display = "none";
    phone.style.border = "1px solid transparent";
   
  }



}