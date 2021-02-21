// spda springs script - the only thing that is unique for springs script is the pancake banner

// adds pancake banner to the springs script page when it is friday

window.onload = function thursdayBanner() {
    let d = new Date();
    const ban = document.querySelector('.sodaFloat');
  
    if (d.getDay() == 3) {
      ban.style.display = 'block';
    } else {
      ban.style.display = 'none';
    };
  };