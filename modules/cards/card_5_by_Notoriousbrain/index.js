function toggleCheckbox(checkboxNumber) {
  const checkbox = document.getElementById(`checkbox${checkboxNumber}`);
  const toggleBtn = document.querySelector(
      `.toggle-btn:nth-child(${checkboxNumber})`
      );

  checkbox.checked = !checkbox.checked; 

    if (checkbox.checked) {
        toggleBtn.classList.add("toggle-transition");
    } else {
        toggleBtn.classList.remove("toggle-transition");
    }
}


setInterval(() => {
  d = new Date();
  hr = d.getHours();
  min = d.getMinutes();
  sec = d.getSeconds();
  hr_rotation = 30 * hr + min / 2; 
  min_rotation = 6 * min;
  sec_rotation = 6 * sec;

  hour.style.transform = `rotate(${hr_rotation}deg)`;
  minute.style.transform = `rotate(${min_rotation}deg)`;
  second.style.transform = `rotate(${sec_rotation}deg)`;
}, 1000);

function togglePlayPause() {
  const playIcon = document.querySelector(".play");
  const pauseIcon = document.querySelector(".pause");

  if (playIcon.style.display !== "none") {
    playIcon.style.display = "none";
    pauseIcon.style.display = "block";
  } else {
    playIcon.style.display = "block";
    pauseIcon.style.display = "none";
  }
}

let selectedTabId = "tab-1"; // Initialize with the default selected tab
document.getElementById(selectedTabId).classList.add("selected-tab");
document.getElementById(selectedTabId).classList.remove("font-color");

function selectTab(tabId) {
  // Remove the 'selected-tab' class from the previously selected tab
  document.getElementById(selectedTabId).classList.remove("selected-tab");
  document.getElementById(selectedTabId).classList.add("font-color");

  // Add the 'selected-tab' class to the newly selected tab
  document.getElementById(tabId).classList.add("selected-tab");

  // Update the selectedTabId variable
  selectedTabId = tabId;
}


const handle = document.getElementById("handle");
const slider = document.querySelector(".slider");
const track = document.getElementById("track");
let isDragging = false;

handle.addEventListener("mousedown", (e) => {
  isDragging = true;
  slider.classList.add("active");
  handle.style.transition = "none";
  const offsetX = e.clientX - handle.getBoundingClientRect().left;

  document.addEventListener("mousemove", (e) => {
    if (!isDragging) return;
    const x = e.clientX - offsetX - slider.getBoundingClientRect().left;
    const maxX = slider.clientWidth - handle.clientWidth;
    const minX = 0;

    if (x >= minX && x <= maxX) {
      handle.style.left = `${x}px`;
      track.style.width = `${x}px`; // Adjust the width of the blue track
    }
  });

  document.addEventListener("mouseup", () => {
    isDragging = false;
    slider.classList.remove("active");

    // You can get the current position of the handle here
    const currentPosition = parseFloat(handle.style.left);
    console.log("Current Position:", currentPosition);

    document.removeEventListener("mousemove", () => {});
    document.removeEventListener("mouseup", () => {});
  });
});

  function swapIcon(iconDiv) {
    const icons = iconDiv.querySelectorAll(".icons");
    icons.forEach((icon) => (icon.style.display = "none"));

   
    icons[1].style.display = "block";
    setTimeout(() => {
      icons[1].style.display = "none";
      icons[0].style.display = "block";
    }, 500); 
  }