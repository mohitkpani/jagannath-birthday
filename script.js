// ==========================================
// JAGANNATH'S BIRTHDAY WEBSITE
// Complete JavaScript
// ==========================================

// ELEMENTS
const welcome = document.getElementById("welcome");
const mainWebsite = document.getElementById("mainWebsite");

const startBtn = document.getElementById("startBtn");
const birthdayMusic = document.getElementById("birthdayMusic");

const confettiContainer = document.getElementById("confetti-container");

// ==========================================
// BACKGROUND MUSIC
// ==========================================

async function playMusic() {
  try {
    await birthdayMusic.play();
    console.log("Birthday music started!");
  } catch (error) {
    console.log("Music playback error:", error);
  }
}

// ==========================================
// WELCOME BUTTON
// ==========================================

startBtn.addEventListener("click", async function () {
  console.log("Surprise button clicked!");

  // Start music
  await playMusic();

  // Hide welcome page
  welcome.classList.add("hidden");

  // Show main website
  mainWebsite.classList.remove("hidden");

  // Start confetti
  launchConfetti(120);

  // Scroll to top
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
});

// ==========================================
// CONFETTI
// ==========================================

const colors = [
  "#ff8fab",
  "#ffcf56",
  "#8ed8f8",
  "#a8dfb0",
  "#ff77aa",
  "#ffffff",
];

function launchConfetti(amount = 100) {
  for (let i = 0; i < amount; i++) {
    const piece = document.createElement("div");

    piece.className = "confetti";

    piece.style.left = Math.random() * 100 + "vw";

    piece.style.backgroundColor =
      colors[Math.floor(Math.random() * colors.length)];

    piece.style.animationDuration = Math.random() * 3 + 2 + "s";

    piece.style.animationDelay = Math.random() * 1.5 + "s";

    piece.style.transform = `rotate(${Math.random() * 360}deg)`;

    confettiContainer.appendChild(piece);

    setTimeout(() => {
      piece.remove();
    }, 7000);
  }
}

// ==========================================
// FUNNY ROAST GENERATOR
// ==========================================

const roastBtn = document.getElementById("roastBtn");
const roastMessage = document.getElementById("roastMessage");

const roasts = [
  "Bro is not getting older. He's becoming a limited edition fossil! 🦖",

  "Your brain has been buffering since 2003! 💀",

  "Age increased +1. Maturity increased by 0. 😂",

  "Even Google can't find your missing common sense! 🤣",

  "Your childhood expired, but your stupidity has unlimited validity! 🤡",

  "Your life needs an update. Current version: Buggy since birth! 🐛",

  "Attitude: Premium. Bank balance: Free trial! 💸",

  "Congratulations! You survived another year of your own decisions! 😂",

  "Your face says CEO. Your wallet says unemployed intern! 😭",

  "If laziness were an Olympic sport, you'd be too lazy to participate! 🥇",

  "Your maturity is like a software update: always postponed! 💀",

  "Breaking news: Local legend gets older. Intelligence still missing! 📰",

  "Even your back is starting to make sound effects! 🤣",

  "Your Wi-Fi is faster than your decision-making skills! 📶",

  "Bro is a walking notification: always active, rarely useful! 😂",

  "Scientists are still trying to understand how you survived this long! 🔬",

  "Your birthday cake has more layers than your personality! 🎂",

  "Your common sense is currently unavailable. Please try again later! 💀",
];

let previousRoast = -1;

roastBtn.addEventListener("click", function () {
  let randomIndex;

  do {
    randomIndex = Math.floor(Math.random() * roasts.length);
  } while (randomIndex === previousRoast);

  previousRoast = randomIndex;

  roastMessage.textContent = roasts[randomIndex];

  launchConfetti(15);
});

// ==========================================
// BIRTHDAY CAKE
// ==========================================

const cake = document.getElementById("cake");
const cakeBtn = document.getElementById("cakeBtn");
const cakeMessage = document.getElementById("cakeMessage");

let candlesBlown = false;

function blowCandles() {
  if (candlesBlown) {
    cakeMessage.textContent = "Bro! The candles are already gone! 😂";

    return;
  }

  candlesBlown = true;

  cake.classList.add("blown");

  cakeMessage.textContent =
    "🎉 Candles blown! But your problems are still ON! 💀";

  cakeBtn.textContent = "CANDLES BLOWN! 🎉";

  launchConfetti(120);
}

cakeBtn.addEventListener("click", blowCandles);

cake.addEventListener("click", blowCandles);

cake.addEventListener("keydown", function (event) {
  if (event.key === "Enter" || event.key === " ") {
    event.preventDefault();

    blowCandles();
  }
});

// ==========================================
// MYSTERY GIFT
// ==========================================

const gift = document.getElementById("gift");
const giftBtn = document.getElementById("giftBtn");
const giftMessage = document.getElementById("giftMessage");

let giftOpened = false;

giftBtn.addEventListener("click", function () {
  if (giftOpened) return;

  giftOpened = true;

  gift.textContent = "💩";

  gift.classList.add("opened");

  giftMessage.innerHTML =
    "SURPRISE! 🤣<br><br>" +
    "You won a lifetime supply of empty wallets, " +
    "unpaid bills and free advice from relatives! 💀";

  giftBtn.textContent = "GIFT OPENED! 😂";

  giftBtn.disabled = true;

  launchConfetti(80);
});

// ==========================================
// GRAND FINALE
// ==========================================

const finalBtn = document.getElementById("finalBtn");

finalBtn.addEventListener("click", async function () {
  await playMusic();

  launchConfetti(250);

  finalBtn.textContent = "PARTY MODE ACTIVATED! 🎉";

  finalBtn.disabled = true;

  setTimeout(() => launchConfetti(150), 1500);

  setTimeout(() => {
    launchConfetti(150);

    finalBtn.disabled = false;

    finalBtn.textContent = "LET'S PARTY AGAIN! 🎉";
  }, 4000);
});

// ==========================================
// CONSOLE
// ==========================================

console.log("🎂 HAPPY BIRTHDAY JAGANNATH!");
console.log("😂 Friendship roasting system activated!");
