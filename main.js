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

// For Whole Section
// const mainButton = document.getElementById("main_section");

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

profileButton.addEventListener("click", (e) => {
  e.stopPropagation();
  if (profileBox.style.right === "-100%") {
    profileBox.style.right = "1%";
  } else {
    profileBox.style.right = "-100%";
  }
});

// If the notificaiton and profile section is already opened but these are not automatically
// close then this happen

// const mainButton = document.getElementById("main_section");

// mainButton.addEventListener("click", () => {
//   if (notifyBox.style.right === "-100%" || profileBox.style.right === "-100%") {
//     if (notifyBox) {
//       notifyBox.style.right = "1%";
//     } else if (profileBox){
//       profileBox.style.right = "1%";
//     } else {
//       return null;
//     }
//   } else {
//     return;
//   }
// });

//
