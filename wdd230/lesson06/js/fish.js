// fish haven script - the only thing that is unique for fish haven is the pancake banner

// adds pancake banner to the fish haven page when it is friday

window.onload = function tuesdayBanner() {
    let d = new Date();
    const ban = document.querySelector('.fishFry');
  
    if (d.getDay() == 1) {
      ban.style.display = 'block';
    } else {
      ban.style.display = 'none';
    };
  };