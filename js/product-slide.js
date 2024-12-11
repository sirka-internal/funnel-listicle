function changeImage(thumbnail) {
    const mainImage = document.getElementById("main-image");
    mainImage.src = thumbnail.src;

    document
      .querySelectorAll(".thumbnail")
      .forEach((img) => img.classList.remove("active"));
    thumbnail.classList.add("active");
  }