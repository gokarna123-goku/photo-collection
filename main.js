//
window.addEventListener("scroll", function () {
  var navbar = document.querySelector("nav");
  var scrollY = window.scrollY;

  if (scrollY >= 50) {
    navbar.classList.add("fixed");
  } else {
    navbar.classList.remove("fixed");
  }
});

// Notification Toggle
const notifyButton = document.getElementById("notify_toggle");
const notifyIcon = document.getElementById("notify_icon");
const notifyBox = document.getElementById("notification_box");

notifyButton.addEventListener("click", () => {
  if (notifyBox.style.right === "-100%") {
    notifyBox.style.right = "1%";
    notifyButton.style.backgroundColor = "#dedede";
    notifyIcon.style.color = "#f14c05";
    // notifyButton.classList.add("notification_active");
  } else {
    notifyBox.style.right = "-100%";
    notifyButton.style.backgroundColor = "#fafafa";
    notifyIcon.style.color = "#333333";
    // notifyButton.classList.remove("notification_active");
  }
});

// Notification Toggle
const profileButton = document.getElementById("profile_toggle");
const profileBox = document.getElementById("profile_box");

notifyButton.addEventListener("click", () => {
  if (notifyBox.style.right === "-100%") {
    notifyBox.style.right = "1%";
    notifyButton.style.backgroundColor = "#dedede";
  } else {
    notifyBox.style.right = "-100%";
    notifyButton.style.backgroundColor = "#fafafa";
  }
});

//
