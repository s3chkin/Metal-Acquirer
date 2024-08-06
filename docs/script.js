function sendMail() {
  let parms = {
    name: document.getElementById("name").value,
    email: document.getElementById("email").value,
    subject: document.getElementById("subject").value,
    message: document.getElementById("message").value,
  };

  emailjs
    .send("service_086darc", "template_ic2fkva", parms)
    .then(alert("Email Sent!"));

  document.getElementById("name").value = "";
  document.getElementById("email").value = "";
  document.getElementById("subject").value = "";
  document.getElementById("message").value = "";
}

// function sendMail() {
//   let name = document.getElementById("name").value;
//   let email = document.getElementById("email").value;
//   let subject = document.getElementById("subject").value;
//   let message = document.getElementById("message").value;

//   // Tüm alanların dolu olup olmadığını kontrol et
//   if (name && email && subject && message) {
//     let parms = {
//       name: name,
//       email: email,
//       subject: subject,
//       message: message,
//     };

//     emailjs.send("service_086darc", "template_ic2fkva", parms).then(
//       function (response) {
//         alert("Email Sent!");
//         name = null;
//         email = null;
//         subject = null;
//         message = null;
//       },
//       function (error) {
//         alert("Failed to send email. Please try again later.");
//         console.log("FAILED...", error);
//       }
//     );
//   } else {
//     alert("Please fill in all the fields.");
//   }
// }
