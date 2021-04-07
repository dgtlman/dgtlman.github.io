function toggleMenu() {
    document.getElementById("primaryNav").classList.toggle("hide");
  }
  const options = {
    year: 'numeric'
  };
  document.getElementById('current-date').textContent = new Date().toLocaleDateString('en-US', options);
  document.getElementById('last-updated').innerHTML = document.lastModified;
  WebFont.load({
    google: {
      families: ["Roboto Condensed", "Nanum Gothic"]
    }
  });