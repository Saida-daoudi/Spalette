let generateBtn=document.querySelector(".generate-btn");
let paletteBox=document.querySelector(".container")
let gererateColor=()=>{
    let hexCode="#";
    let chars="abcdef0123456789"
    for(let i=0;i<6;i++){
        hexCode +=chars[Math.floor(Math.random()*chars.length)];
    }
    return hexCode;
}
let generatePalette=()=>{
    let li="";
    paletteBox.innerHTML="";
    for(let i=0;i<28;i++){
        let color=gererateColor();
        li += `
            <div class="palette">
                <div class="output-box" style="background: ${color};"></div>
                <div class="details-box">
                    <span>${color}</span>
                    <button class="copy-btn" onclick="copyCode(this, '${color}')">
                        <i class="fa-regular fa-copy"></i>
                        <span><i class="fa-solid fa-check"></i></span>
                    </button>
                </div>
            </div>
        `;
    }
    paletteBox.innerHTML= li;
}
let copyCode=(elem, color)=>{
    navigator.clipboard.writeText(color);
    elem.classList.add("active");
    setTimeout(()=>{
        elem.classList.remove("active");
    },700);
}
generatePalette();
generateBtn.addEventListener("click", generatePalette);