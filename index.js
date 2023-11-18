let icon = document.querySelector("#icon")
icon.addEventListener("click",()=>{
  if (icon.classList.contains('fa-bars')) {
    icon.classList.remove('fa-bars')
    icon.classList.add('fa-x')
    
  }
  else{
    icon.classList.remove('fa-x')
    icon.classList.add('fa-bars')
    
  }
})


  let menubutton =  document.querySelector('#button')
  let mobilemenu = document.querySelector('#mobile')
  menubutton.addEventListener('click',() =>{
      mobilemenu.classList.toggle("hidden")
  })


  // text TransformStrm 

  var typed =new Typed(".typing-text",{
    strings:["FRONTEND-DEVELOPER ","BACKEND-DEVELOPER"],
    loop:true,
    typeSpeed:100,
    backSpeed:25,
    backdelay:10,
});