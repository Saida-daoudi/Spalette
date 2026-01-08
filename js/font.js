const generateBtn = document.querySelector(".generate-btn");
const fontContainer = document.getElementById("font-container");

const fontFamilies = [
    "Arial", "Verdana", "Helvetica", "Tahoma", "Georgia", "Times New Roman", "Courier New", "Comic Sans MS", "Impact", "Lucida Console",
    "Trebuchet MS", "Palatino Linotype", "Book Antiqua", "Poppins", "Roboto", "Open Sans", "Lato", "Montserrat", "Merriweather",
    "Oswald", "Playfair Display", "Raleway", "Quicksand", "Nunito", "Source Sans Pro", "Droid Sans", "Pacifico", "Roboto Slab",
    "Anton", "Indie Flower", "Lora", "Fira Sans", "Abril Fatface", "PT Sans", "Slabo 27px", "Work Sans", "Zilla Slab",
    "Barlow", "Cabin", "Noto Sans", "Ubuntu", "Exo 2", "Titillium Web", "Lobster", "Fjalla One", "Garamond", "Bebas Neue"
];

const createFontCard = (fontFamily) => {
    const card = document.createElement("div");
    card.className = "font-card";
    card.innerHTML = `
        <div class="font-preview" style="font-family: ${fontFamily};">
            The quick brown fox jumps over the lazy dog.
        </div>
        <div class="font-info">
            <span class="font-name">${fontFamily}</span>
            <button class="copy-button" title="Copy Font Family">
                <i class="fa-regular fa-copy"></i>
                <i class="fa-solid fa-check check-icon"></i>
            </button>
        </div>
    `;

    const copyBtn = card.querySelector(".copy-button");
    copyBtn.onclick = () => copyToClipboard(copyBtn, fontFamily);

    return card;
};

const generateFontPalette = () => {
    fontContainer.innerHTML = "";
    const shuffled = [...fontFamilies].sort(() => 0.5 - Math.random());
    const selected = shuffled.slice(0, 24);

    selected.forEach(font => {
        fontContainer.appendChild(createFontCard(font));
    });
};

const copyToClipboard = (btn, text) => {
    navigator.clipboard.writeText(text).then(() => {
        btn.classList.add("copied");
        setTimeout(() => btn.classList.remove("copied"), 1500);
    });
};

generateBtn.addEventListener("click", generateFontPalette);
document.addEventListener("DOMContentLoaded", generateFontPalette);
