// preston script - the only thing that is unique for preston is the pancake banner

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

  // webfont loader

WebFont.load({
    google: {
      families: ["Ubuntu", "Ubuntu Condensed", "Poiret One"]
    }
  });