let nameError = document.getElementById("name-error");
let phoneError = document.getElementById("phone-error");
let emailError = document.getElementById("email-error");
let messageError = document.getElementById("message-error");
let submitError = document.getElementById("submit-error");

function validateName() {
  var name = document.getElementById("contact-name").value;
  if (name.length == 0) {
    nameError.innerHTML = "Name is Required";
    return false;
  }
  if (!name.match(/^[A-Za-z]*\s{1}[A-Za-z]*$/)) {
    nameError.innerHTML = "Write full name";
    return false;
  }
  nameError.innerHTML = `<i class="fa-solid fa-circle-check"></i>  `;
  return true;
}
function validatePhoneNo() {
  var phoneNo = document.getElementById("phone-no").value;
  if (phoneNo.length == 0) {
    phoneError.innerHTML = "Phone No Required";
    return false;
  }
  if (phoneNo.length !== 11) {
    phoneError.innerHTML = "Please no should be 10";
    return false;
  }
  if (!phoneNo.match(/^[0-9]{11}$/)) {
    phoneError.innerHTML = "Only digits please";
    return false;
  }

  phoneError.innerHTML = '<i class="fa-solid fa-circle-check"></i>';
  return true;
}

function validateEmail() {
  var email = document.getElementById("email-address").value;
  if(email.length == 0){
      emailError.innerHTML = "Email is Required";
      return false;
  }

  if (!email.match(/^\w+([-+.']\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/)) {
      emailError.innerHTML = 'Email Invalid';
      return false;
  }

  emailError.innerHTML = '<i class="fa-solid fa-circle-check"></i>';
  return true;
}

function validateMessage(){
  var message = document.getElementById("message").value;
  var required = 30;
  var left = required - message.length
  if (left > 0) {
    messageError.innerHTML = left +  ' more characters required'
    return false
    
  }
  messageError.innerHTML =  '<i class="fa-solid fa-circle-check"></i>'
  return true
}

function validateForm(){
  if (!validateName() || !validatePhoneNo() || !validateEmail() || !validateMessage()) {
    submitError.style.display = 'block';
    submitError.innerHTML = "Please fix errors to submit";
    setTimeout(function(){submitError.style.display = 'none';}, 3000);
    return false;
  }
    submitError.style.display = 'block';
    submitError.style.color = "seagreen";
    submitError.innerHTML = "Form submitted";
    return true;
}




