const nav = document.querySelector("nav");
const toggleBtn = nav.querySelector(".toggle-btn");

toggleBtn.addEventListener("click", () => {
  nav.classList.toggle("open");
});

function onDrag({ movementY }) {
  const navStyle = window.getComputedStyle(nav);
  const navTop = parseInt(navStyle.top);
  const navHeight = parseInt(navStyle.height);
  const winHeight = window.innerHeight;

  let newTop = navTop + movementY;
  if (newTop < 0) newTop = 0;
  if (newTop > winHeight - navHeight) newTop = winHeight - navHeight;
  nav.style.top = `${newTop}px`;
}

nav.addEventListener("mousedown", () => {
  nav.addEventListener("mousemove", onDrag);
});

["mouseup", "mouseleave"].forEach((evt) =>
  nav.addEventListener(evt, () => {
    nav.removeEventListener("mousemove", onDrag);
  })
);
