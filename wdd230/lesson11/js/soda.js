// adds soda social banner to the springs script page when it is wednesday

window.onload = function thursdayBanner() {
    let d = new Date();
    const ban = document.querySelector('.sodaFloat');
  
    if (d.getDay() == 3) {
      ban.style.display = 'block';
    } else {
      ban.style.display = 'none';
    };
  };