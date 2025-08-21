/* ---------------- Utilities & Data ---------------- */

const VOWELS = new Set(['A','E','I','O','U','0','1','2','3','4','5','6','7','8','9']); // reveal numbers too
const MAX_LIVES = "BOLLYWOOD".length; // 9
const ABC = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");
const slogans = [
  "Filmy Fantastic! 🎉", "Blockbuster Brain! 💥", "Total Dhamaal! 🪩",
  "Paisaa Vasool! 🏆", "Dialoguebaaz Genius! 🎬", "Masala Magic! ✨",
  "You’re the Superstar! ⭐", "Dhol Beats of Victory! 🥁"
];
const roasts = [
  "Kya yaar… interval se pehle hi The End? 😬🍿",
  "Plot twist: guesses khatam, movie baki! 🤦‍♂️🎞️",
  "Director ne bola CUT, aur tumne maan liya! 🎬😅",
  "Next time subtitles on kar lena. 🫣📽️"
];

// Seed list (sample)
const seedMovies = [
  "3 Idiots","Lagaan","Dangal","Taare Zameen Par","PK","Ghajini","Chak De India","Swades","Kal Ho Naa Ho","Kabhi Khushi Kabhie Gham",
  "Dilwale Dulhania Le Jayenge","Kuch Kuch Hota Hai","Kabir Singh","Padmaavat","Barfi","Bajrangi Bhaijaan","Gully Boy","Zindagi Na Milegi Dobara",
  "Queen","Andhadhun","Drishyam","Uri The Surgical Strike","Baahubali","Baahubali 2","Dear Zindagi","Jab We Met","Rockstar","Tamasha",
  "Wake Up Sid","Yeh Jawaani Hai Deewani","Sanju","Kaminey","Haider","Maqbool","Omkara","Black","Devdas","Hum Dil De Chuke Sanam",
  "Tanu Weds Manu","Tanu Weds Manu Returns","Shubh Mangal Zyada Saavdhan","Bareilly Ki Barfi","Stree","Badhaai Ho","Piku","Pink","Article 15",
  "Kahaani","Kahaani 2","Talvar","Baby","Airlift","Holiday","Special 26","Hera Pheri","Phir Hera Pheri","Welcome","Singh Is Kinng","OMG Oh My God",
  "Bheja Fry","Bheja Fry 2","Golmaal","Golmaal Returns","Golmaal 3","Golmaal Again","Munna Bhai M.B.B.S.","Lage Raho Munna Bhai","Don",
  "Don 2","War","Pathaan","Jawan","Animal","Rang De Basanti","Fanaa","Veer Zaara","Rab Ne Bana Di Jodi","My Name Is Khan","Raazi","Badla",
  "Dil Chahta Hai","Dil Se","Kabhi Alvida Naa Kehna","Hum Aapke Hain Koun","Hum Saath Saath Hain","Andaaz Apna Apna","Andaz","Baazigar","Darr",
  "Kaho Naa Pyaar Hai","Koi Mil Gaya","Krrish","Krrish 3","Bang Bang","Ek Tha Tiger","Tiger Zinda Hai","Sultan","Kick","Bodyguard",
  "Dhoom","Dhoom 2","Dhoom 3","Kaabil","Agneepath","Zanjeer","Deewaar","Sholay","Amar Akbar Anthony","Namak Halaal","Coolie",
  "Trishul","Kabhi Haan Kabhi Naa","Dil To Pagal Hai","Mohabbatein","Veer","Bunty Aur Babli","Bunty Aur Babli 2","Guru","Chennai Express",
  "Simmba","Singham","Singham Returns","Satyameva Jayate","Kesari","Brahmastra","Rocky Aur Rani Kii Prem Kahaani","Jawaani Jaaneman",
  "Aashiqui","Aashiqui 2","Ek Villain","Ek Villain Returns","Malang","Baazaar","Talaash","Gangaajal","Drishyam 2","RRR","KGF","KGF Chapter 2",
  "Pushpa","Kantara","12th Fail","Sardar Udham","The Kashmir Files","Gadar","Gadar 2","Border","LOC Kargil","Bhool Bhulaiyaa","Bhool Bhulaiyaa 2",
  "OMG 2","Chhichhore","MS Dhoni The Untold Story","Kai Po Che","Udaan","Masaan","Lunchbox","Parineeta","Barah Aana","Newton","Badlapur",
  "Shahid","Aligarh","Neerja","Talash","Raanjhanaa","Padman","Toilet Ek Prem Katha","Super 30","Mary Kom","Bhaag Milkha Bhaag",
  "Rustom","Jolly LLB","Jolly LLB 2","Special 26","A Wednesday","Baby","Holiday","Kesari","Mission Mangal","Gold","A Thursday","12th Man"
];

function buildMovieVault() {
  const set = new Set(seedMovies.map(s => s.toUpperCase()));
  const starts = ["Dil","Ishq","Pyaar","Dhadkan","Dhoom","Josh","Deewana","Dost","Zindagi","Lamhe","Saath","Anjaana","Apna","Badla","Chori",
                  "Hum","Yaadein","Mohabbat","Junoon","Dastaan","Aashiq","Khushi","Dhadak","Kal","Zara","Naya","Nehle","Golmaal","Andaaz",
                  "Mast","Rangeela","Sangam","Talash","Kismat","Tashan","Nikkamma","Rangeen","Ajnabee","Haseena","Mard","Sher","Sitam"];
  const middles = ["Ke","Ki","Aur","Ka","Kaun","Se","Mein","Wale","Waali","Ka Safar","Ka Jazba","Ka Aandhi","Ka Jadoo","Ka Andaaz","Ka Raaz"];
  const ends = ["Kahani","Dastaan","Safar","Prem Kahani","Dilruba","Returns","Reloaded","Again","Forever","Zara Hatke","Express","Diaries",
                "Connection","Saga","Ki Barish","Ki Baarat","Ki Mehfil","Ki Shaan","Ki Awaaz","Ki Jung","Ki Kasam","Ki Udaan","Factor"];
  const singles = ["Kaalia","Kranti","Shivaay","Baaghi","Phantom","Badla","Heropanti","Warrior","Drona","Asoka","Ra.One","Zero","Fan","Tubelight",
                   "Race","Race 2","Race 3","Kick 2","Sultan 2","Housefull","Housefull 2","Housefull 3","Housefull 4","Dhamaal","Double Dhamaal",
                   "Total Dhamaal","Welcome Back","Fukrey","Fukrey Returns","Force","Force 2","Jai Ho","Jai Jai Shivshankar"];
  const target = 1200;
  while (set.size < target) {
    if (Math.random() < 0.35) {
      const t = singles[Math.floor(Math.random()*singles.length)];
      set.add(t.toUpperCase());
    } else {
      const a = starts[Math.floor(Math.random()*starts.length)];
      const b = middles[Math.floor(Math.random()*middles.length)];
      const c = ends[Math.floor(Math.random()*ends.length)];
      set.add(`${a} ${b} ${c}`.toUpperCase());
    }
  }
  return Array.from(set).sort();
}

const MOVIES = buildMovieVault();

/* ---------------- State ---------------- */

const state = {
  mode: "solo",
  movieRaw: "",
  movie: "",
  revealed: [],
  guessed: new Set(),
  livesUsed: 0,
  over: false,
  players: [],
  currentGuesserIndex: 0
};

/* ---------------- DOM Refs ---------------- */

const el = {
  secret: document.getElementById("secret"),
  keys: document.getElementById("keys"),
  lives: document.getElementById("lives"),
  status: document.getElementById("status"),
  win: document.getElementById("winBox"),
  lose: document.getElementById("loseBox"),
  fullGuessBtn: document.getElementById("fullGuessBtn"),
  hintBtn: document.getElementById("hintBtn"),
  resetBtn: document.getElementById("resetBtn"),
  modePicker: document.getElementById("modePicker"),
  roundSub: document.getElementById("roundSub"),
  setupSolo: document.getElementById("setupSolo"),
  setupDuo: document.getElementById("setupDuo"),
  setupGroup: document.getElementById("setupGroup"),
  duoMovie: document.getElementById("duoMovie"),
  groupMovie: document.getElementById("groupMovie"),
  players: document.getElementById("players"),
  currentGuesser: document.getElementById("currentGuesser"),
  startSolo: document.getElementById("startSolo"),
  startDuo: document.getElementById("startDuo"),
  startGroup: document.getElementById("startGroup"),
  shuffleGuesser: document.getElementById("shuffleGuesser"),
  peekBtn: document.getElementById("peekBtn"),
  toast: document.getElementById("toast"),
  fx: document.getElementById("fx")
};

/* ---------------- Helpers ---------------- */

function toast(msg, ms=1400){
  el.toast.textContent = msg;
  el.toast.style.display = "block";
  setTimeout(()=> el.toast.style.display = "none", ms);
}

function normalizeMovieTitle(raw){
  const up = raw.toUpperCase();
  return up.replace(/[^A-Z0-9 ]/g," ").replace(/\s+/g," ").trim();
}

function renderLives(){
  const str = "BOLLYWOOD".split("");
  el.lives.innerHTML = str.map((ch,i)=>
    `<span class="life ${i < state.livesUsed ? 'cut' : ''}">${ch}</span>`).join("");
}

function renderSecret(){
  el.secret.innerHTML = "";
  const chars = state.movie.split("");
  state.revealed = chars.map(ch=>{
    if (ch === " ") return {show:" ", cls:"sp"};
    if (VOWELS.has(ch)) return {show:ch, cls:"ch"};
    return {show: state.guessed.has(ch) ? ch : "•", cls:"ch"};
  });
  for (const r of state.revealed){
    const span = document.createElement("span");
    span.className = r.cls;
    span.textContent = r.show;
    el.secret.appendChild(span);
  }
}

function allConsonantsRevealed(){
  for (let i=0;i<state.movie.length;i++){
    const ch = state.movie[i];
    if (ch !== " " && !VOWELS.has(ch) && !state.guessed.has(ch)){
      return false;
    }
  }
  return true;
}

function setStatus(msg){ el.status.textContent = msg; }

function buildKeyboard(){
  el.keys.innerHTML = "";
  "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("").forEach(letter=>{
    const btn = document.createElement("button");
    btn.className = "key";
    btn.textContent = letter;
    if (VOWELS.has(letter)) btn.disabled = true;
    btn.addEventListener("click", ()=> handleGuess(letter, btn));
    el.keys.appendChild(btn);
  });
}

function resetUIBoxes(){ el.win.style.display="none"; el.lose.style.display="none"; }

function fireworks(){
  const c = el.fx, ctx = c.getContext("2d");
  const W = c.width = window.innerWidth, H = c.height = window.innerHeight;
  const particles = [];
  function spawnBurst(x,y){
    const n = 80 + Math.floor(Math.random()*40);
    for(let i=0;i<n;i++){
      const angle = Math.random()*Math.PI*2;
      const speed = 2 + Math.random()*4;
      particles.push({
        x,y, vx: Math.cos(angle)*speed, vy: Math.sin(angle)*speed,
        life: 60 + Math.random()*20, size: 2 + Math.random()*2
      });
    }
  }
  for (let i=0;i<5;i++){
    spawnBurst(W*(.15 + .7*Math.random()), H*(.2 + .6*Math.random()));
  }
  let t = 0;
  const id = setInterval(()=>{
    ctx.clearRect(0,0,W,H);
    particles.forEach(p=>{
      p.x+=p.vx; p.y+=p.vy; p.vy+=0.03; p.life-=1;
      ctx.globalAlpha = Math.max(p.life/80, 0);
      ctx.beginPath(); ctx.arc(p.x,p.y,p.size,0,Math.PI*2); ctx.fill();
    });
    for (let k=0;k<12;k++){
      ctx.globalAlpha = .85;
      ctx.fillRect(Math.random()*W, (t*3 + k*30)%H, 3, 10);
    }
    t++;
    if (t>180){ clearInterval(id); ctx.clearRect(0,0,W,H); }
  }, 16);
}

function gameOver(win, by="letters"){
  state.over = true;
  [...el.keys.children].forEach(b=> b.disabled = true);

  if (win){
    const msg = slogans[Math.floor(Math.random()*slogans.length)];
    el.win.textContent = `🎆 ${msg} — You guessed it: ${state.movieRaw}`;
    el.win.style.display = "block";
    setStatus(by === "full" ? "Nailed the full title! 🏁" : "All consonants cracked! 🎉");
    fireworks();
  } else {
    const burn = roasts[Math.floor(Math.random()*roasts.length)];
    el.lose.textContent = `💔 ${burn}\nThe movie was: ${state.movieRaw}`;
    el.lose.style.display = "block";
    setStatus("Out of lives. Better luck next take!");
  }
}

function handleGuess(letter, btn){
  if (state.over) return;
  btn.disabled = true;
  if (state.guessed.has(letter)) return;

  const good = state.movie.includes(letter);
  if (good){
    state.guessed.add(letter);
    renderSecret();
    setStatus(`Nice! “${letter}” is in the title.`);
    if (allConsonantsRevealed()) gameOver(true);
  } else {
    state.livesUsed++;
    renderLives();
    setStatus(`Nope! “${letter}” isn’t there.`);
    if (state.livesUsed >= MAX_LIVES){
      gameOver(false);
    }
  }
}

function revealRandomVowel(){
  const unrevealedVowels = state.movie.split("").filter(ch=> VOWELS.has(ch) && ch !== " " && !state.guessed.has(ch));
  if (unrevealedVowels.length === 0){
    toast("All vowels already visible!");
    return;
  }
  const pick = unrevealedVowels[Math.floor(Math.random()*unrevealedVowels.length)];
  toast(`Hint: There’s a “${pick}” 😉`);
}

function promptFullGuess(){
  if (state.over) return;
  let who = "You";
  if (state.mode === "group" && el.currentGuesser.value){
    who = el.currentGuesser.value;
  }
  const g = prompt(`${who}, type your full movie guess:`);
  if (!g) return;
  const norm = normalizeMovieTitle(g);
  if (!norm){
    toast("Empty guess. Try again!");
    return;
  }
  if (norm === state.movie){
    setStatus(`${who} guessed the full title!`);
    gameOver(true,"full");
  } else {
    toast("Not quite. That’s not it!");
    state.livesUsed++;
    renderLives();
    if (state.livesUsed >= MAX_LIVES){ gameOver(false); }
  }
}

/* ---------------- Round Setup ---------------- */

function pickRandomMovie(){
  const t = MOVIES[Math.floor(Math.random()*MOVIES.length)];
  return t;
}

function beginRoundWith(rawTitle){
  state.movieRaw = rawTitle;
  state.movie = normalizeMovieTitle(rawTitle);
  state.guessed = new Set();
  state.livesUsed = 0;
  state.over = false;

  resetUIBoxes();
  renderLives();
  renderSecret();
  buildKeyboard();
  setStatus("Guess a letter!");
}

function switchMode(newMode){
  state.mode = newMode;
  [...el.modePicker.querySelectorAll(".chip")].forEach(ch=>{
    ch.classList.toggle("active", ch.dataset.mode === newMode);
  });
  el.setupSolo.style.display = newMode === "solo" ? "grid" : "none";
  el.setupDuo.style.display = newMode === "duo" ? "grid" : "none";
  el.setupGroup.style.display = newMode === "group" ? "grid" : "none";
  resetUIBoxes();
  setStatus("Ready?");
}

function startSolo(){
  const title = pickRandomMovie();
  beginRoundWith(title);
  el.roundSub.textContent = `Solo mode: I’ve picked a movie for you. Lives: ${MAX_LIVES} (BOLLYWOOD).`;
}

function startDuo(){
  const raw = el.duoMovie.value || "";
  const norm = normalizeMovieTitle(raw);
  if (!norm){ toast("Please enter a movie for your friend!"); return; }
  beginRoundWith(raw);
  el.roundSub.textContent = `Duo mode: Your friend set the movie. Guess away!`;
}

function startGroup(){
  const raw = el.groupMovie.value || "";
  const norm = normalizeMovieTitle(raw);
  if (!norm){ toast("Director, enter a movie!"); return; }
  const names = (el.players.value || "").split(",").map(s=> s.trim()).filter(Boolean);
  state.players = names;
  state.currentGuesserIndex = 0;
  el.currentGuesser.innerHTML = "";
  names.forEach((n,i)=>{
    const opt = document.createElement("option");
    opt.value = n; opt.textContent = n + (i===0?" (starts)":"");
    el.currentGuesser.appendChild(opt);
  });
  beginRoundWith(raw);
  el.roundSub.textContent = `Group mode: Director set the movie. First to guess the full title wins!`;
}

function rotateGuesser(){
  if (!state.players.length){ toast("Add player names first!"); return; }
  state.currentGuesserIndex = (state.currentGuesserIndex + 1) % state.players.length;
  el.currentGuesser.selectedIndex = state.currentGuesserIndex;
  toast(`It’s ${state.players[state.currentGuesserIndex]}'s turn to guess full title!`);
}

/* ---------------- Wire up ---------------- */

function init(){
  el.modePicker.addEventListener("click", (e)=>{
    const btn = e.target.closest(".chip"); if (!btn) return;
    switchMode(btn.dataset.mode);
  });
  el.startSolo.addEventListener("click", startSolo);
  el.startDuo.addEventListener("click", startDuo);
  el.startGroup.addEventListener("click", startGroup);
  el.shuffleGuesser.addEventListener("click", rotateGuesser);
  el.peekBtn.addEventListener("click", ()=>{
    const inp = el.duoMovie;
    inp.type = (inp.type === "password") ? "text" : "password";
    inp.focus();
  });
  el.fullGuessBtn.addEventListener("click", promptFullGuess);
  el.hintBtn.addEventListener("click", revealRandomVowel);
  el.resetBtn.addEventListener("click", ()=>{
    resetUIBoxes();
    setStatus("Ready?");
    if (state.mode === "solo") startSolo();
    else if (state.mode === "duo") { el.duoMovie.value=""; toast("Enter a new movie!"); }
    else { el.groupMovie.value=""; toast("Director, enter a new movie!"); }
  });

  startSolo();
}
init();

document.addEventListener("keydown", (e)=>{
  const k = e.key.toUpperCase();
  if (k.length===1 && k>='A' && k<='Z'){
    const btn = [...el.keys.children].find(b=> b.textContent === k);
    if (btn && !btn.disabled) handleGuess(k, btn);
  }
  if (e.key === "Enter" && !state.over){
    const tag = document.activeElement?.tagName || "";
    if (!["INPUT","TEXTAREA","SELECT"].includes(tag)) promptFullGuess();
  }
});
