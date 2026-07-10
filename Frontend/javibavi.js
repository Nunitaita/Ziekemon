const con = document.getElementById("concontainer");
for (let i = 0; i < 171; i++) {
    let neuesElement = document.createElement("img");
    // document.body.insertAdjacentElement("beforebegin", neuesElement );
    con.appendChild(neuesElement)
    if (i % 2 == 0) {
        neuesElement.setAttribute('class', 'vieleziegen');
        neuesElement.setAttribute('src', 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fimg.freepik.com%2Ffotos-kostenlos%2Ffotorealistische-ziegenfarm_23-2151450348.jpg&f=1&nofb=1&ipt=409c00a34837d23ebbea1f1a26481a4412e63b7e506c5ed1e712975d9268d063');
        neuesElement.setAttribute('alt', 'Ziege');
    } else {
        neuesElement.setAttribute('class', 'vieleziegen2');
        neuesElement.setAttribute('src', 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fi.pinimg.com%2Foriginals%2Fa1%2F6c%2Fcf%2Fa16ccfdca8f1975b416119b63730e152.jpg&f=1&nofb=1&ipt=9762b7a2daacbcb72902d5e0a92df89cb9431661a8582fd5cd311d43c976b26d');
        neuesElement.setAttribute('alt', 'Ziege mit Sonnenbrille');
    }
}

let zekrom = document.createElement("img");
zekrom.setAttribute('class', 'ziegenschlächter');
zekrom.setAttribute('src', 'https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fstatic.pokemonpets.com%2Fimages%2Fmonsters-images-800-800%2F644-Zekrom.png&f=1&nofb=1&ipt=b07c0ebfb018db60b9a86af2ddede140ef955dcfa0528dc68f524d575512ff06');
zekrom.setAttribute('alt', 'Das Pokemon Zekrom');
con.appendChild(zekrom)
let x = (15)
let y = (15)
let step = (100)
let zekromHeight = zekrom.getBoundingClientRect().height
let zekromWidth = zekrom.getBoundingClientRect().width
let boxHeight = con.getBoundingClientRect().height
let boxWidth = con.getBoundingClientRect().width
console.log(zekromHeight, zekromWidth)
document.addEventListener("keydown", (z) => {
    if (z.key === "a") {
        if (y > step) {
        } else { return }
        y -= step
    } else if (z.key === "ArrowRight" || z.key === "d") {
        if (y + zekromWidth <= boxWidth - step) {
        } else { return }
        y += step;
    } else if (z.key === "ArrowUp" || z.key === "w") {
        if (x > step) {
        } else { return }
        x -= step;
    } else if (z.key === "ArrowDown" || z.key === "s") {
        if (x + zekromHeight <= boxHeight - step) {
        } else { return }
        x += step;
    } else if (z.key === "ArrowLeft") {
        let schuss = document.createElement("div")
        let schussposition = y + 0.5 * zekromWidth
        schuss.setAttribute('class', 'zekromsschuss');
        con.appendChild(schuss)
        schuss.style.top = x + 0.5 * zekromHeight + "px";
        schuss.style.left = schussposition + "px";
        setInterval(() => {
            schussposition--
            schuss.style.left = schussposition - 1 + "px";
        }, 1);


    } else {
        return
    }
    zekrom.style.top = x + "px";
    zekrom.style.left = y + "px";
    console.log(x, y, step)
});


// if (bedingung) {
//     sachen
// } else if (noch eine bedingung) {
//     noch andere sachen
// } else {
//     andere sachen
// } 

// 

// const rect = con.getBoundingClientRect()
// rect.width
// con.getBoundingClientRect().width

// console.log("Breite:", document.querySelector('.element').getBoundingClientRect().width)
