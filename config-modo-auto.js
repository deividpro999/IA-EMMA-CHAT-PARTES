document.addEventListener("DOMContentLoaded", function () {
  const configBtn = document.getElementById('config-btn');
  const configBox = document.getElementById('config-box');
  const fontSelect = document.getElementById('font-select');

  configBtn.addEventListener('click', () => {
    configBox.classList.toggle('hidden');
  });

  fontSelect.addEventListener('change', () => {
    document.body.style.fontFamily = fontSelect.value;
  });
});
