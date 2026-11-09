document.addEventListener("DOMContentLoaded", () => {
  const wrapper = document.getElementById("ky-rain");
  const toggleButton = document.getElementById("profile-img");
  
  if (!wrapper || !toggleButton) return;

  const dropCount = 60;
  let isRaining = false;

  const startRain = () => {
    for (let i = 0; i < dropCount; i++) {
      const drop = document.createElement("div");
      drop.classList.add("kyn-pf-drop-m3q");

      const posX = Math.random() * 140 - 10; 
      const duration = Math.random() * 0.6 + 0.6; 
      const delay = Math.random() * 2; 

      drop.style.left = `${posX}%`;
      drop.style.top = `-10%`;
      drop.style.animationDuration = `${duration}s`;
      drop.style.animationDelay = `${delay}s`;

      wrapper.appendChild(drop);
    }
  };
  const stopRain = () => {
    wrapper.innerHTML = "";
  };
  toggleButton.addEventListener("click", () => {
    if (isRaining) {
      stopRain();
    } else {
      startRain();
    }
    isRaining = !isRaining;
  });
});