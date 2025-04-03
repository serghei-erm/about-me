const img = document.getElementById("projects img");

img.addEventListener("click", function() {
  // Проверяем, если картинка уже увеличена, то убираем стили
  if (this.style.width === "70%") {
    this.style.removeProperty("width");
    this.style.removeProperty("height");
  } else {
    // Если не увеличена, добавляем стили для увеличения
    this.style.width = "70%";
    this.style.height = "100%";
  }
});