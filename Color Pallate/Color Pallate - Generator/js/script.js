const container = document.querySelector(".container");
const refreshBtn = document.querySelector(".refresh-btn");
const colorText = document.getElementById("colorText");
const maxPaletteBoxes = 24;

const generatePalette = () => {
  container.innerHTML = "";

  for (let i = 0; i < maxPaletteBoxes; i++) {
    let hex =
      "#" +
      Math.floor(Math.random() * 0xffffff)
        .toString(16)
        .padStart(6, "0");

    const li = document.createElement("li");
    li.className = "color";
    li.innerHTML = `
          <div class="rect-box" style="background: ${hex}"></div>
          <span class="hex-value">${hex}</span>
        `;

    li.addEventListener("click", () => copyToClipboard(li, hex));
    container.appendChild(li);
  }
};

const copyToClipboard = (element, hex) => {
  const textElement = element.querySelector(".hex-value");
  colorText.innerText = `: ${hex}`;
  colorText.style.borderBottom = `1px solid ${hex}`;

  navigator.clipboard
    .writeText(hex)
    .then(() => {
      textElement.innerText = "Copied!";
      setTimeout(() => (textElement.innerText = hex), 1000);
    })
    .catch(() => {
      alert("❌ Failed to copy color code.");
    });
};

refreshBtn.addEventListener("click", generatePalette);
generatePalette();
