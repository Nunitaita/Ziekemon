const url = "http://localhost:8080/Liste";

const input = document.getElementById("neuerEintrag");
const button = document.getElementById("lebutton");
const liste = document.getElementById("zugreifungsid");

async function loadListe() {
  const res = await fetch(url, { method: "GET" });
  const listeArr = await res.json();

  let ergebnis = "";
  for (let i = 0; i < listeArr.length; i++) {
    const item = listeArr[i];
    ergebnis += `
      <li>
        ${item}
        <button class="remove-btn" type="button" data-item="${i}">×</button>
      </li>`;
  }

  liste.innerHTML = ergebnis;
}

function getRect(el) {
  const r = el.getBoundingClientRect();
  return { left: r.left, top: r.top, width: r.width, height: r.height };
}

function ensureFlyWord() {
  let el = document.getElementById("flyWord");
  if (!el) {
    el = document.createElement("div");
    el.id = "flyWord";
    el.className = "fly-word";
    el.setAttribute("aria-hidden", "true");
    document.body.appendChild(el);
  }
  return el;
}

function ensureCartIcon() {
  let el = document.getElementById("cartIcon");
  if (!el) {
    el = document.createElement("div");
    el.id = "cartIcon";
    el.className = "cart-icon";
    el.setAttribute("aria-hidden", "true");
    document.body.appendChild(el);
  }
  return el;
}

async function hinzufuegen() {
  const text = input.value.trim();
  if (!text) return;

  const flyWord = ensureFlyWord();
  const cartIcon = ensureCartIcon();

  const start = getRect(input);

  const countBefore = liste.querySelectorAll("li").length;

  // POST zuerst, damit das Item existiert (Target-Bereich braucht das neue LI)
  await fetch(`${url}/add`, { method: "POST", body: text });

  // Liste aktualisieren, aber neues LI unsichtbar lassen
  await loadListe();
  const newLi = liste.querySelectorAll("li")[countBefore];
  if (newLi) newLi.style.opacity = "0";

  // Zielposition (für Wort + Wagen)
  if (!newLi) return;
  const target = getRect(newLi);

  // Flug-Elemente initialisieren
  flyWord.textContent = text;

  flyWord.style.setProperty("--sx", `${start.left}px`);
  flyWord.style.setProperty("--sy", `${start.top}px`);
  flyWord.style.setProperty("--tx", `${target.left}px`);
  flyWord.style.setProperty("--ty", `${target.top}px`);

  cartIcon.style.setProperty("--sx", `${start.left}px`);
  cartIcon.style.setProperty("--sy", `${start.top}px`);
  cartIcon.style.setProperty("--tx", `${target.left}px`);
  cartIcon.style.setProperty("--ty", `${target.top}px`);

  cartIcon.classList.remove("is-flying");
  void flyWord.offsetHeight;
  void cartIcon.offsetHeight;

  cartIcon.classList.add("is-flying");

  // Nach Animation einblenden (+ optional bouncen)
  const ANIM_MS = 2100;
  setTimeout(() => {
    if (newLi) {
      newLi.style.opacity = "";
      newLi.animate(
        [{ transform: "scale(1)" }, { transform: "scale(1)" }, { transform: "scale(1)" }],
        { duration: 360, easing: "cubic-bezier(1,.9,0.5,0.5)" }
      );
    }
  }, ANIM_MS);

  input.value = "";
  input.focus();
}

liste.addEventListener("click", async (e) => {
  if (!e.target.classList.contains("remove-btn")) return;

  const item = e.target.dataset.item;
  await fetch(`${url}/deleate?servuus=${item}`, { method: "DELETE" });
  await loadListe();
});

button.addEventListener("click", hinzufuegen);
input.addEventListener("keydown", (e) => {
  if (e.key === "Enter") hinzufuegen();
});

loadListe();
