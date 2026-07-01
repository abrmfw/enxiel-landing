document.addEventListener("DOMContentLoaded", () => {
  const form = document.querySelector("form");

  if (!form) return;

  form.addEventListener("submit", () => {
    const btn = form.querySelector("button");
    btn.innerText = "Sending...";
    btn.disabled = true;
  });
});