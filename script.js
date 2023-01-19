const refreshBtn = document.querySelector(".refersh-btn");
const contanier = document.querySelector(".contanier");

const maxPaletteSize = 12;

const generatepalette = () => {
    contanier.innerHTML = "";

    for (let i = 0; i < maxPaletteSize; i++) {
        

    //Generate Random Hex Color Code
    let randomHex = Math.floor(Math.random() * 0xffffff).toString(16);
    randomHex = `#${randomHex.padStart(6, "0")}`;


    const color = document.createElement("li");
    color.classList.add("color");
    color.innerHTML = `<div class="react-box" style="background:${randomHex} ;"></div>
    <span class="hex-value">${randomHex}</span>`;
    //add event to li to copied color
    color.addEventListener("click",  () => copyColor(color,randomHex));

    contanier.appendChild(color);
}

};

generatepalette();
const copyColor = (element,hexValue) => {
    const colorElement = element.querySelector(".hex-value");
    navigator.clipboard.writeText(hexValue).then( () => {
        colorElement.innerText = "Copied";
        setTimeout(() => colorElement.innerText = hexValue , 1000);
    }).catch( () => alert("falied to copy the color code!"));
}

refreshBtn.addEventListener("click",generatepalette);