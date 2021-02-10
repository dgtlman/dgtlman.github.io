//main script


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