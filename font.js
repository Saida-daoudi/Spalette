let generateBtn = document.querySelector(".generate-btn");
let paletteBox = document.querySelector(".container");

// List of font families
let fontFamilies = [
    "Arial", "Verdana", "Helvetica", "Tahoma", "Georgia", "Times New Roman", "Courier New", "Comic Sans MS", "Impact", "Lucida Console",
    "Trebuchet MS", "Palatino Linotype", "Book Antiqua", "Poppins", "Roboto", "Open Sans", "Lato", "Montserrat", "Merriweather",
    "Oswald", "Playfair Display", "Raleway", "Quicksand", "Nunito", "Source Sans Pro", "Droid Sans", "Pacifico", "Roboto Slab",
    "Anton", "Indie Flower", "Lora", "Fira Sans", "Abril Fatface", "PT Sans", "Slabo 27px", "Lora", "Work Sans", "Zilla Slab",
    "Barlow", "Cabin", "Noto Sans", "Ubuntu", "Exo 2", "Titillium Web", "Lobster", "Fjalla One", "Garamond", "Bebas Neue"
];

// Function to generate the font palette dynamically
let generatePalette = () => {
    let li = "";
    paletteBox.innerHTML = "";
    for (let i = 0; i < 28; i++) {
        let fontFamily = fontFamilies[Math.floor(Math.random() * fontFamilies.length)];
        li += `
            <div class="palette">
                <div class="output-box" style="font-family: ${fontFamily};">Hello Word</div>
                <div class="details-box">
                    <span>${fontFamily}</span>
                    <button class="copy-btn" onclick="copyFontFamily(this, '${fontFamily}')">
                        <i class="fa-regular fa-copy"></i>
                        <span><i class="fa-solid fa-check"></i></span>
                    </button>
                </div>
            </div>
        `;
    }
    paletteBox.innerHTML = li;
};

// Function to copy the font family name to the clipboard
let copyFontFamily = (elem, fontFamily) => {
    navigator.clipboard.writeText(fontFamily);
    elem.classList.add("active");
    setTimeout(() => {
        elem.classList.remove("active");
    }, 700);
};

// Generate the palette when the page loads
generatePalette();

// Event listener to generate the palette when the button is clicked
generateBtn.addEventListener("click", generatePalette);
