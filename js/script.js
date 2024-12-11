// Дані у форматі JSON
fetch("./data.json")
  .then((response) => {
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }
    return response.json();
  })
  .then((data) => {
    // Контейнер для секції
    const featuresContainer = document.querySelector(".features");

    // Функція для створення однієї "feature" на основі даних
    function createFeature(featureData) {
      const featureDiv = document.createElement("div");
      featureDiv.classList.add("feature");

      featureDiv.innerHTML = `
    <div class="feature-img-wrap">
      <img src="${featureData.img}" alt="Feature Image" class="feature-img">
      </div>
      <div class="feature-description-wrap">
      <h2 class="feature-title-number">${featureData.titleNumber}</h2>
      <h2 class="feature-title">${featureData.title}</h2>
      <p class="feature-description">${featureData.description}</p>
      <div class="review-card">
        <div class="stars">${featureData.review.stars}</div>
        <div>
          <span class="title">${featureData.review.title}</span>
          <span class="buyer-info">${featureData.review.buyer}</span>
          <span class="verified-buyer">
            <img src="${featureData.review.verifiedIcon}" alt="Verified Icon" class="verified-buyer-icon">
            Verified Buyer
          </span>
        </div>
        <p class="review-text">${featureData.review.text}</p>
      </div>
      </div>
    `;

      return featureDiv;
    }

    // Рендеримо всі дані
    data.forEach((featureData) => {
      const featureElement = createFeature(featureData);
      featuresContainer.appendChild(featureElement);
    });
  })
  .catch((error) => {
    console.error("Error loading JSON:", error);
  });
