// const scrollRevealOption = {
//   distance: "50px",
//   origin: "bottom",
//   duration: 1000,
// };

// // header container
// ScrollReveal().reveal(".header__container img", {
//   duration: 1000,
// });

// ScrollReveal().reveal(".header__container h1", {
//   ...scrollRevealOption,
//   delay: 500,
// });

// ScrollReveal().reveal(".header__container p", {
//   ...scrollRevealOption,
//   delay: 1000,
// });

// ScrollReveal().reveal(".header__btns", {
//   ...scrollRevealOption,
//   delay: 1500,
// });

// // about container
// ScrollReveal().reveal(".about__image img", {
//   ...scrollRevealOption,
//   origin: "left",
// });

// ScrollReveal().reveal(".about__content h3", {
//   ...scrollRevealOption,
//   delay: 500,
// });

// ScrollReveal().reveal(".about__content .section__header", {
//   ...scrollRevealOption,
//   delay: 1000,
// });

// ScrollReveal().reveal(".about__content .section__subheader", {
//   ...scrollRevealOption,
//   delay: 1500,
// });

// ScrollReveal().reveal(".about__content .about__grid", {
//   ...scrollRevealOption,
//   delay: 2000,
// });

// // contact container
// ScrollReveal().reveal(".contact__image img", {
//   ...scrollRevealOption,
//   origin: "left",
// });

const swiper = new Swiper(".swiper", {
  loop: true,
  slidesPerView: "auto",
  centeredSlides: true,
  spaceBetween: 30,
});



function validateForm(formId) {

  // Get form inputs
  var name = document.querySelector('#' + formId + ' .name').value;
  // var email = document.querySelector('#' + formId + ' .email').value;
  var phone = document.querySelector('#' + formId + ' .phone').value;
  var msg = document.querySelector('#'+ formId + ' .msg').value;

  // Reset error message
  var errorMessage = document.getElementById('error-message');
  errorMessage.textContent = '';

  // Validate inputs
  if (name.trim() === '') {
      displayErrorMessage('First Name is required');
      return false;
  }

  // if (email.trim() === '') {
  //     displayErrorMessage('Email Address is required');
  //     return false;
  // } else if (!isValidEmail(email)) {
  //     displayErrorMessage('Invalid Email Address');
  //     return false;
  // }

  if (phone.trim() === '') {
      displayErrorMessage('Phone Number is required');
      return false;
  } else if (!isValidPhoneNumber(phone)) {
      displayErrorMessage('Invalid Phone Number');
      return false;
  }

  if (msg.trim() === '') {
      displayErrorMessage('Description is required');
      return false;
  }

  // If all validations pass, return true to submit the form
  return true;
}




function validateFormFooter(formId2) {
  // Get form inputs
  var fname = document.querySelector('#' + formId2 + ' .name').value;
  // var femail = document.querySelector('#' + formId2 + ' .email').value;
  var fphone = document.querySelector('#' + formId2 + ' .phone').value;
  var fmsg = document.querySelector('#'+ formId2 + ' .msg').value;


  // Reset error message
  var ferrorMessage = document.getElementById('f-error');
  ferrorMessage.textContent = '';

  // Validate inputs
  if (fname.trim() === '') {
      fdisplayErrorMessage('First Name is required');
      return false;
  }

  // if (femail.trim() === '') {
  //     fdisplayErrorMessage('Email Address is required');
  //     return false;
  // } else if (!isValidEmail(email)) {
  //     fdisplayErrorMessage('Invalid Email Address');
  //     return false;
  // }

  if (fphone.trim() === '') {
      fdisplayErrorMessage('Phone Number is required');
      return false;
  } else if (!isValidPhoneNumber(phone)) {
      fdisplayErrorMessage('Invalid Phone Number');
      return false;
  }

  if (fmsg.trim() === '') {
      fdisplayErrorMessage('Description is required');
      return false;
  }

  // If all validations pass, return true to submit the form
  return true;
}

// function isValidEmail(email) {
//   var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
//   return emailRegex.test(email);
// }

function isValidPhoneNumber(phone) {
  // Example: Validate if phone consists of 10 digits
  var phoneRegex = /^\d{10}$/;
  return phoneRegex.test(phone);
}

function displayErrorMessage(message) {
  var errorMessage = document.getElementById('error-message');
  errorMessage.textContent = message;
}

function fdisplayErrorMessage(message) {
  var ferrorMessage = document.getElementById('f-error');
  ferrorMessage.textContent = message;
}

