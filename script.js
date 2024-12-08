const backgroundContainer = document.querySelector('.background-container');
const dayMusic = document.getElementById('dayMusic');
const nightMusic = document.getElementById('nightMusic');

function toggleBackground(toggle) {
  const switchElement = toggle.querySelector('.switch');

  switchElement.classList.toggle('off-red-light');

  const isNight = switchElement.classList.contains('off-red-light');

  if (isNight) {
    backgroundContainer.style.backgroundImage = "url('Images/night.jpg')";
    dayMusic.pause();
    dayMusic.currentTime = 0;
    nightMusic.play();
  } else {
    backgroundContainer.style.backgroundImage = "url('Images/day.jpg')";
    nightMusic.pause();
    nightMusic.currentTime = 0;
    dayMusic.play();
  }
}

window.onload = () => {
  backgroundContainer.style.backgroundImage = "url('Images/evening.jpg')";
  dayMusic.play();
};