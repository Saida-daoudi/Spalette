const generateBtn = document.querySelector(".generate-btn");
const paletteContainer = document.getElementById("palette-container");

const generateRandomHex = () => {
    const chars = "0123456789abcdef";
    let color = "#";
    for (let i = 0; i < 6; i++) {
        color += chars[Math.floor(Math.random() * 16)];
    }
    return color;
};

const createPaletteCard = (color) => {
    const card = document.createElement("div");
    card.className = "palette-card";
    card.innerHTML = `
        <div class="color-preview" style="background: ${color};"></div>
        <div class="color-info">
            <span class="hex-value">${color.toUpperCase()}</span>
            <button class="copy-button" title="Copy Hex Code">
                <i class="fa-regular fa-copy"></i>
                <i class="fa-solid fa-check check-icon"></i>
            </button>
        </div>
    `;

    const copyBtn = card.querySelector(".copy-button");
    copyBtn.onclick = () => copyToClipboard(copyBtn, color);

    return card;
};

const generatePalette = () => {
    paletteContainer.innerHTML = "";
    for (let i = 0; i < 30; i++) {
        const color = generateRandomHex();
        paletteContainer.appendChild(createPaletteCard(color));
    }
};

const copyToClipboard = (btn, text) => {
    navigator.clipboard.writeText(text).then(() => {
        btn.classList.add("copied");
        setTimeout(() => btn.classList.remove("copied"), 1500);
    });
};

generateBtn.addEventListener("click", generatePalette);
document.addEventListener("DOMContentLoaded", generatePalette);