const switchButton = document.querySelector(".switch");

switchButton.addEventListener("click", () => {
  gsap.to("#fan-wings", {
    rotation: "+=360", // Incremental rotation to ensure continuous motion
    duration: 0.4, // Duration of one rotation
    ease: "linear", // Keep the rotation speed constant
    repeat: -1, // Repeat infinitely
    transformOrigin: "50% 50%", // Rotate around the center
  });

  // Change the color of the fan switch
  const fanSwitch = document.querySelector("#fan-switch path");
  fanSwitch.setAttribute("fill", "red");
});
