// preston script - the only thing that is unique for preston is the pancake banner

// adds pancake banner to the PRESTON page when it is friday

window.onload = function fridayBanner() {
    let d = new Date();
    const ban = document.querySelector('.pancakeBanner');
  
    if (d.getDay() == 5) {
      ban.style.display = 'block';
    } else {
      ban.style.display = 'none';
    };
  };