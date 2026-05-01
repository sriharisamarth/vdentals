const popup = document.getElementById("popup");
const music = document.getElementById("music");

// POPUP
function openPopup(){
popup.style.display="flex";
}

function closePopup(){
popup.style.display="none";
}

// EMAIL (FIXED)
function sendMail(){
const name = document.getElementById("name").value;
const date = document.getElementById("date").value;

window.location.href =
`mailto:shilpasris@gmail.com?subject=Appointment Booking&body=Name: ${name}%0APreferred Date: ${date}`;
}

// MUSIC
function toggleMusic(){
music.paused ? music.play() : music.pause();
}

/* ========================= */
/* RANDOM QUOTES (FIXED) */
/* ========================= */
const quotes = document.querySelectorAll(".quote");

function showRandomQuote(){
quotes.forEach(q => q.classList.remove("active"));

let randomIndex = Math.floor(Math.random() * quotes.length);
quotes[randomIndex].classList.add("active");
}

// first load
showRandomQuote();

// every 5 seconds
setInterval(showRandomQuote, 5000);
/* ========================= */
/* BACK TO TOP FUNCTION */
/* ========================= */

const topBtn = document.getElementById("topBtn");

window.onscroll = function(){
if(document.body.scrollTop > 300 || document.documentElement.scrollTop > 300){
topBtn.style.display = "block";
}else{
topBtn.style.display = "none";
}
};

function scrollToTop(){
window.scrollTo({
top:0,
behavior:"smooth"
});
}
