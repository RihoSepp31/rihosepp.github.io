document.addEventListener("DOMContentLoaded", function () {
  console.log("DOM on täielikult laetud");

  const greetingOverlay = document.createElement("div");
  greetingOverlay.id = "greeting-overlay";

  const hour = new Date().getHours();
  console.log("Praegune kellaaeg:", hour);

  if (hour < 12) {
    greetingOverlay.innerText = "Tere hommikust! Tere tulemast minu kodulehele!";
  } else if (hour < 18) {
    greetingOverlay.innerText = "Tere päevast! Tere tulemast minu kodulehele!";
  } else {
    greetingOverlay.innerText = "Tere õhtust! Tere tulemast minu kodulehele!";
  }

  document.body.appendChild(greetingOverlay);
  console.log("Tervitus kuvatud:", greetingOverlay.innerText);

  setTimeout(() => {
    greetingOverlay.style.opacity = "0";
    console.log("Tervitus kaob...");
    setTimeout(() => {
      greetingOverlay.remove();
      console.log("Tervitus eemaldatud");
    }, 1000);
  }, 4000);
});
