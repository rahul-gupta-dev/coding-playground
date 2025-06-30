function getRandomColor() {
  const letters = "0123456789ABCDEF";
  let color = "#";
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}

function createLoaders() {
  const count = parseInt(document.getElementById("loaderCount").value);
  const container = document.getElementById("loaderContainer");
  container.innerHTML = "";

  if (!count || count <= 0) {
    alert("Enter a number greater than 0");
    return;
  }

  for (let i = 0; i < count; i++) {
    const color1 = getRandomColor();
    const color2 = getRandomColor();
    const size = Math.floor(Math.random() * 40) + 40; // 40–80px
    const speed = (Math.random() * 1.5 + 0.5).toFixed(2); // 0.5–2s

    const wrapper = document.createElement("div");
    wrapper.style.position = "relative";
    wrapper.style.display = "flex";
    wrapper.style.flexDirection = "column";
    wrapper.style.alignItems = "center";

    const loader = document.createElement("div");
    loader.className = "loader";
    loader.style.width = `${size}px`;
    loader.style.height = `${size}px`;
    loader.style.background = `conic-gradient(${color1}, ${color2})`;
    loader.style.animation = `spin ${speed}s linear infinite`;

    const center = document.createElement("div");
    center.style.width = `${size / 1.5}px`;
    center.style.height = `${size / 1.5}px`;
    center.style.backgroundColor = "#111";
    center.style.borderRadius = "50%";
    center.style.position = "absolute";
    center.style.top = `${(size - size / 1.5) / 2}px`;
    center.style.left = `${(size - size / 1.5) / 2}px`;

    loader.appendChild(center);

    // Show code button
    const showBtn = document.createElement("button");
    showBtn.textContent = "Show Code";
    showBtn.style.marginTop = "10px";
    showBtn.style.fontSize = "0.8rem";
    showBtn.style.padding = "4px 8px";
    showBtn.style.borderRadius = "5px";
    showBtn.style.border = "1px solid #444";
    showBtn.style.background = "#00f2ff";
    showBtn.style.cursor = "pointer";

    // Code block
    const codeBlock = document.createElement("pre");
    codeBlock.style.display = "none";
    codeBlock.style.background = "#1c1c1c";
    codeBlock.style.color = "#0f0";
    codeBlock.style.padding = "10px";
    codeBlock.style.borderRadius = "6px";
    codeBlock.style.fontSize = "0.75rem";
    codeBlock.style.maxWidth = "250px";
    codeBlock.style.marginTop = "5px";

    // Fill the code sample
    const loaderCode = `
<div class="loader" style="
width: ${size}px;
height: ${size}px;
background: conic-gradient(${color1}, ${color2});
animation: spin ${speed}s linear infinite;
">
<div style="
  width: ${size / 1.5}px;
  height: ${size / 1.5}px;
  background: #111;
  border-radius: 50%;
  position: absolute;
  top: ${(size - size / 1.5) / 2}px;
  left: ${(size - size / 1.5) / 2}px;
"></div>
</div>`.trim();

    codeBlock.textContent = loaderCode;

    // Toggle code visibility
    showBtn.onclick = () => {
      codeBlock.style.display =
        codeBlock.style.display === "none" ? "block" : "none";
    };

    wrapper.appendChild(loader);
    wrapper.appendChild(showBtn);
    wrapper.appendChild(codeBlock);
    container.appendChild(wrapper);
  }
}
