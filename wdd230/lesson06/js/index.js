// index script - the only thing that is unique for index is the pancake banner

// adds pancake banner to the PRESTON page when it is friday

window.onload = function sundayBanner() {
  let d = new Date();
  const ban = document.querySelector('.sabbath');

  if (d.getDay() == 0) {
    ban.style.display = 'block';
  } else {
    ban.style.display = 'none';
  };
};