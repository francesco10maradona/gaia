const screens=[...document.querySelectorAll(".screen")];
const dinner=document.getElementById("dinner");
const count=document.getElementById("count");
const selected=new Set();

function show(i){screens.forEach((s,n)=>s.classList.toggle("active",n===i));window.scrollTo({top:0,behavior:"smooth"})}
dinner.addEventListener("input",()=>count.textContent=dinner.value.length);

document.getElementById("dinnerNext").addEventListener("click",()=>show(1));
document.getElementById("backToDinner").addEventListener("click",()=>show(0));

document.querySelectorAll(".elegant-choice").forEach(btn=>{
  btn.addEventListener("click",()=>{
    const value=btn.dataset.choice;
    selected.clear();
    document.querySelectorAll(".elegant-choice").forEach(x=>x.classList.remove("selected"));
    selected.add(value);
    btn.classList.add("selected");
  });
});

document.getElementById("finish").addEventListener("click",()=>{
  const dinnerText=dinner.value.trim()||"Non me l'ha ancora detto 😌";
  const choices=[...selected];
  document.getElementById("dinnerResult").textContent=dinnerText;
  document.getElementById("choicesResult").textContent=choices.length?choices[0]:"Tutto quello che vuole ❤️";

  let message="Non vedo l'ora di rivederti, stringerti forte e recuperare tutte le coccole che ci siamo persi. ❤️";
  if(choices[0]==="Amore, coccole e Patrick") message="Allora ho già capito tutto… amore, coccole e Patrick. Non vedo l'ora di riaverti qui con me. ❤️";
  else if(choices[0]==="Coccole e Patrick") message="Coccole e Patrick? Direi che hai già organizzato perfettamente il nostro momento insieme. 🫂🐾❤️";
  else if(choices[0]==="Amore") message="Amore? Quello non poteva assolutamente mancare. ❤️";

  document.getElementById("finalText").textContent=message;
  localStorage.setItem("gaiaDinner",dinnerText);
  localStorage.setItem("gaiaChoice",choices[0]||"");
  show(2);
});

document.getElementById("restart").addEventListener("click",()=>{
  dinner.value="";count.textContent="0";selected.clear();
  document.querySelectorAll(".elegant-choice").forEach(x=>x.classList.remove("selected"));
  show(0);
});

function makeHeart(){
  const h=document.createElement("span");
  h.className="heart";h.textContent="♥";
  h.style.left=Math.random()*100+"vw";
  h.style.fontSize=(10+Math.random()*13)+"px";
  h.style.animationDuration=(8+Math.random()*8)+"s";
  document.querySelector(".hearts").appendChild(h);
  setTimeout(()=>h.remove(),17000);
}
setInterval(makeHeart,1400);
