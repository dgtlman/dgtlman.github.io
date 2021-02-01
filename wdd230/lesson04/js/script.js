window.addEventListener('load', (event)=>{
  const cry = document.querySelector('#copyrightyear');
  cry.textContent = new Date().getFullYear();
})

function toggleMenu(){
  document.getElementById("primaryNav").classList.toggle("hide");
}

function getFormattedDate(){

  let d=new Date()
  let weekday=new Array("Sunday","Monday","Tuesday","Wednesday","Thursday",
                  "Friday","Saturday")
  let monthname=new Array("January","February","March","April","May","June","July","August",
                  "September","October","November","December")

  return weekday[d.getDay()] + ", " + d.getDate() + " " + monthname[d.getMonth()] + " " + d.getFullYear();
}
