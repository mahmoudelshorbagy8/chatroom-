// sidleft//
let btnLeft = document.querySelector('#btnLeft');
let saidLeft = document.querySelector('.side-left');
// on click side left
btnLeft.onclick =()=>{
  saidLeft.classList.toggle('active');
  
  massage.classList.remove('active');
  sideRight.classList.remove('active');
  notification.classList.remove('active');
}



// massage one click//

let btnmsg = document.querySelector('#btn-msg');
let massage = document.querySelector('.massage');

btnmsg.onclick =()=>{
  massage.classList.toggle('active');
  
  saidLeft.classList.remove('active');
  sideRight.classList.remove('active');
  notification.classList.remove('active');
}
// notification//
let btnNotfi = document.querySelector('#notification');
let notification = document.querySelector('.notfi');
btnNotfi.onclick =()=>{
  notification.classList.toggle('active');
  
  saidLeft.classList.remove('active');
  sideRight.classList.remove('active');
  massage.classList.remove('active');
}






// user online side rigt//
let User = document.querySelector('#user');
let sideRight = document.querySelector('.side-right');
User.onclick =()=>{
  sideRight.classList.toggle('active');
  
  notification.classList.remove('active');
  saidLeft.classList.remove('active');
  massage.classList.remove('active');
  
}
