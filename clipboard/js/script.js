function validateChecklist(className) {
  const checkboxes = document.querySelectorAll("." + className);
  const anyChecked = Array.from(checkboxes).some((cb) => cb.checked);
  if (!anyChecked) {
    alert("Please select at least one item before copying.");
    return false;
  }
  return true;
}

function posDone() {
  const checks = document.querySelectorAll(".pos-checkbox");
  const list = document.getElementById("pos-list");
  list.innerHTML = "";
  checks.forEach((el) => {
    if (el.checked) {
      list.innerHTML += `<li>${el.parentElement.innerText}</li>`;
    }
  });
}

function negDone() {
  const checks = document.querySelectorAll(".neg-checkbox");
  const list = document.getElementById("neg-list");
  list.innerHTML = "";
  checks.forEach((el) => {
    if (el.checked) {
      list.innerHTML += `<li>${el.parentElement.innerText}</li>`;
    }
  });
}

function copyToClipboard(previewFn, elementId, btn) {
  if (!validateChecklist(btn.closest("form").querySelector("input").className))
    return;
  previewFn();
  const el = document.getElementById(elementId);
  const range = document.createRange();
  range.selectNode(el);
  window.getSelection().removeAllRanges();
  window.getSelection().addRange(range);
  document.execCommand("copy");
  window.getSelection().removeAllRanges();
  btn.textContent = "✅ Copied!";
  setTimeout(() => (btn.textContent = "Copy Again"), 2000);
}
