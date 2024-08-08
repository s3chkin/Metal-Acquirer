function sendMail() {
  let parms = {
    name: document.getElementById("name").value,
    email: document.getElementById("email").value,
    subject: document.getElementById("subject").value,
    message: document.getElementById("message").value,
  };

  // изчиства полетата
  document.getElementById("name").value = "";
  document.getElementById("email").value = "";
  document.getElementById("subject").value = "";
  document.getElementById("message").value = "";

  // Показва информативното съобщение
  function msg() {
    if (window.matchMedia("(max-width: 770px)").matches) {
      document.querySelector("#alert-success-mobile").style.display = "block";
      document.querySelector("#alert-success-desktop").style.display = "none";
    } else {
      document.querySelector("#alert-success-mobile").style.display = "none";
      document.querySelector("#alert-success-desktop").style.display = "block";
    }
  }

  emailjs.send("service_086darc", "template_ic2fkva", parms).then(
    () => {
      msg();
    },
    (error) => {
      console.error("Гршека:", error);
    }
  );
}

// Амимации за показване на елементите
document.addEventListener("DOMContentLoaded", function () {
  const elements = document.querySelectorAll(".hidden");
  const observerOptions = {
    threshold: 0.5,
  };

  const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
        observer.unobserve(entry.target);
      }
    });
  }, observerOptions);

  elements.forEach((element) => {
    observer.observe(element);
  });
});

//Loader
window.addEventListener("load", () => {
  const loader = document.querySelector(".loader");

  loader.classList.add("loader-hidden");

  loader.addEventListener("transitionend", () => {
    document.body.removeChild("loader");
  });
});
