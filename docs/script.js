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
    threshold: 0.35,
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

//counter
document.addEventListener("DOMContentLoaded", function () {
  function animateCounter(counterElement, start, end, duration) {
    let startTimestamp = null;
    const step = (timestamp) => {
      if (!startTimestamp) startTimestamp = timestamp;
      const progress = Math.min((timestamp - startTimestamp) / duration, 1);
      counterElement.innerText = Math.floor(progress * (end - start) + start);
      if (progress < 1) {
        window.requestAnimationFrame(step);
      }
    };
    window.requestAnimationFrame(step);
  }

  function isElementInViewport(el) {
    const rect = el.getBoundingClientRect();
    return (
      rect.top >= 0 &&
      rect.left >= 0 &&
      rect.bottom <=
        (window.innerHeight || document.documentElement.clientHeight) &&
      rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
  }

  function initCounters() {
    const counters = document.querySelectorAll(".counter");
    counters.forEach((counter) => {
      const countElement = counter.querySelector(".count-number b");
      const targetValue = parseInt(
        countElement.textContent.replace(/\D/g, ""),
        10
      );
      counter.classList.remove("hidden");
      animateCounter(countElement, 0, targetValue, 2000);
    });
  }

  function checkAndAnimateCounters() {
    const counters = document.querySelectorAll(".counter.hidden");
    counters.forEach((counter) => {
      if (isElementInViewport(counter)) {
        counter.classList.remove("hidden");
        initCounters();
      }
    });
  }

  window.addEventListener("scroll", checkAndAnimateCounters);
  checkAndAnimateCounters();
});

//Loader
window.addEventListener("load", () => {
  const loader = document.querySelector(".loader");

  loader.classList.add("loader-hidden");

  loader.addEventListener("transitionend", () => {
    document.body.removeChild("loader");
  });
});
