const nav = document.querySelector("nav");
const toggleBtn = nav.querySelector(".toggle-btn");

toggleBtn.addEventListener("click", () => {
  nav.classList.toggle("open");
  toggleBtn.classList.toggle("active");
});

// DRAGGING LOGIC
let isDragging = false;
let startY;
let startTop;

function onMouseDown(e) {
  isDragging = true;
  startY = e.clientY;
  startTop = parseInt(window.getComputedStyle(nav).top);
  document.addEventListener("mousemove", onMouseMove);
  document.addEventListener("mouseup", onMouseUp);
}

function onMouseMove(e) {
  if (!isDragging) return;
  const deltaY = e.clientY - startY;
  const newTop = Math.min(
    Math.max(0, startTop + deltaY),
    window.innerHeight - nav.offsetHeight
  );
  nav.style.top = `${newTop}px`;
}

function onMouseUp() {
  isDragging = false;
  document.removeEventListener("mousemove", onMouseMove);
  document.removeEventListener("mouseup", onMouseUp);
}

nav.addEventListener("mousedown", onMouseDown);
