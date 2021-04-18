//main script

// keeps the copywrite as current year in footer
window.addEventListener('load', (event)=>{
    const cry = document.querySelector('#copyrightyear');
    cry.textContent = new Date().getFullYear();
  })

  // toggles hamburger menu to show/hide based on display size
  function toggleMenu() {
    document.getElementById("primaryNav").classList.toggle("hide");
  };

// adds current date to the footer as the last update time/date
  const options = {
    dateStyle: "full",
  };

  document.getElementById('current-date').textContent = new Date().toLocaleDateString('en-US', options);


 // uses local storage to count how many times each unique visitor returns to site.  
var n = localStorage.getItem('on_load_counter'); 
if (n === null) {
    n = 0;
}
n++;
localStorage.setItem("on_load_counter", n);
document.querySelector('#counter').innerHTML = n;


// webfont loader
WebFont.load({
    google: {
      families: ['Ubuntu', 'Ubuntu Condensed', 'Poiret One']
    }
  });