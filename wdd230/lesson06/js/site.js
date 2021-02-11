//main script

// adds copyright to the footer
window.addEventListener('load', (event)=>{
    const cry = document.querySelector('#copyrightyear');
    cry.textContent = new Date().getFullYear();
  })

  // implements hamburger menu 
  function toggleMenu() {
    document.getElementById("primaryNav").classList.toggle("hide");
  };

  // displays date updated to footer
  const options = {
    dateStyle: "full",
  };

  document.getElementById('current-date').textContent = new Date().toLocaleDateString('en-US', options);

  // preston banner for pancakes - appears only on friday
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


// toggles hamburger menu to show/hide based on display size

function toggleMenu() {
  document.getElementById("primaryNav").classList.toggle("hide");
}


// webfont loader

WebFont.load({
  google: {
    families: ["Abril Fatface", "Poppins"]
  }
});


// keeps the copywrite as current year in footer

window.addEventListener('load', (event)=>{
  const cry = document.querySelector('#copyrightyear');
  cry.textContent = new Date().getFullYear();
})


// adds current date to the footer as the last update time/date

const options = {
    dateStyle: "full",
  };
  document.getElementById('current-date').textContent = new Date().toLocaleDateString('en-US', options);