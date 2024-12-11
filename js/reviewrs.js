fetch("./data.json")
  .then((response) => {
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }
    return response.json();
  })
  .then((data) => {
    const reviewsData = data.map((item) => item.review);

    const slider = document.querySelector(".slider");
    const dotsContainer = document.querySelector(".slider-dots");

    // Функція створення відгуків
    function createReviewCard(review) {
      const card = document.createElement("div");
      card.classList.add("review-cards");

      card.innerHTML = `
      <div class="stars">${review.stars}</div>
      <h3 class="review-title">${review.title}</h3>
      <span class="review-text-wrap">
      <p class="review-text">${review.text}</p>

      <div class="buyer-info">
       <p> ${review.buyer} </p>
       <span class="verified-text">
        <img src="${review.verifiedIcon}" alt="Verified" class="verified-buyer-icon">
     Verified Buyer
        </span>
        </div>
      </span>
    `;

      return card;
    }

    // Додаємо всі картки
    reviewsData.forEach((review) => {
      const reviewCard = createReviewCard(review);
      slider.appendChild(reviewCard);
    });

    // Клонування для безшовного прокручування
    const firstClone = slider.children[0].cloneNode(true);
    const lastClone =
      slider.children[slider.children.length - 1].cloneNode(true);
    firstClone.classList.add("clone");
    lastClone.classList.add("clone");
    slider.appendChild(firstClone);
    slider.insertBefore(lastClone, slider.children[0]);

    let currentSlide = 1;
    const totalSlides = slider.children.length;

    // Функція оновлення слайдів
    function updateSlider() {
      const slideWidth = slider.children[0].offsetWidth;
      const offset = (slider.offsetWidth - slideWidth) / 2; // Центруємо активну картку
      slider.style.transform = `translateX(${
        -currentSlide * slideWidth + offset
      }px)`;

      // Оновлення точок
      dotsContainer.innerHTML = ""; // Очистити старі точки
      for (let i = 0; i < reviewsData.length; i++) {
        const dot = document.createElement("div");
        dot.classList.add("dot");
        if (i === (currentSlide - 1 + reviewsData.length) % reviewsData.length)
          dot.classList.add("active");
        dotsContainer.appendChild(dot);
      }

      // Оновлення розмірів карток
      Array.from(slider.children).forEach((card, index) => {
        card.classList.remove("active");
        card.style.transform = "scale(1)";
        //   card.style.opacity = "0.7";
        if (index === currentSlide) {
          card.classList.add("active");
          // card.style.transform = "scale(1.1)"; // Трохи збільшити
          // card.style.opacity = "1";
        }
      });
    }

    // Плавний перехід між клонованими картками
    function checkBoundary() {
      if (slider.children[currentSlide].classList.contains("clone")) {
        slider.style.transition = "none"; // Вимкнути анімацію
        currentSlide = currentSlide === 0 ? totalSlides - 2 : 1; // Повернення до реальної картки
        updateSlider();
        setTimeout(() => {
          slider.style.transition = "transform 0.5s ease-in-out"; // Увімкнути анімацію
        });
      }
    }

    // Події для кнопок
    document.querySelector(".prev-btn").addEventListener("click", () => {
      currentSlide = currentSlide === 0 ? totalSlides - 1 : currentSlide - 1;
      updateSlider();
      checkBoundary();
    });

    document.querySelector(".next-btn").addEventListener("click", () => {
      currentSlide = currentSlide === totalSlides - 1 ? 0 : currentSlide + 1;
      updateSlider();
      checkBoundary();
    });

    // Оновлення слайдера при завантаженні
    updateSlider();
  })
  .catch((error) => {
    console.error("Error loading JSON:", error);
  });
