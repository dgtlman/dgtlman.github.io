window.addEventListener('load', (event)=>{
  const cry = document.querySelector('#copyrightyear');
  cry.textContent = new Date().getFullYear();
})

function toggleMenu() {
  document.getElementById("primaryNav").classList.toggle("hide");
};

const options = {
  dateStyle: "full",
};

document.getElementById('current-date').textContent = new Date().toLocaleDateString('en-US', options);

window.onload = function fridayBanner() {
  let d = new Date();
  const ban = document.querySelector('.pancakeBanner');

  if (d.getDay() == 5) {
    ban.style.display = 'block';
  } else {
    ban.style.display = 'none';
  };
};