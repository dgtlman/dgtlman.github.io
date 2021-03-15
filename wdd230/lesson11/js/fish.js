// adds fishfry banner to the fish haven page when it is monday

window.onload = function tuesdayBanner() {
    let d = new Date();
    const ban = document.querySelector('.fishFry');
  
    if (d.getDay() == 1) {
      ban.style.display = 'block';
    } else {
      ban.style.display = 'none';
    };
  };