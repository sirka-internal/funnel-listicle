// Дані у форматі JSON
const data = [
    {
      img: "assets/images/image-1.png",
      titleNumber: "1.",
      title: "It’s Your Skin On A Great Skin Day, Every Day",
      description: "Don’t you wish every day was a flawless skin day? Now it can be with What The Foundation. Easily covers redness, dark spots, and discoloration without even looking like you’re wearing foundation.",
      review: {
        stars: "★★★★★",
        title: "SUBTLE & GORGEOUS",
        buyer: "Marianne M.",
        verifiedIcon: "assets/images/verified.svg",
        text: "“I love the Miracle Balm. I’ve not wore makeup in many years. This balm is light and very easy to apply. I’d buy it again... and probably will.”"
      }
    },
    {
      img: "assets/images/image-2.png",
      titleNumber: "2.",
      title: "This is Foundation Reinvented",
      description: "Forget everything you know about foundation. What The Foundation is tinted moisture balm meets foundation. Made with skin-nourishing ingredients like Jojoba Oil to make your skin look like your skin, but better.",
      review: {
        stars: "★★★★★",
        title: "AMAZING RESULTS",
        buyer: "Sophia L.",
        verifiedIcon: "assets/images/verified.svg",
        text: "“This is the best foundation I've ever used. Lightweight and perfect for everyday wear.”"
      }
    },
    {
      img: "assets/images/image-3.png",
      titleNumber: "3.",
      title: "Created by Bobbi Brown herself",
      description: "Bobbi Brown has done it again. This is decades of helping women look more beautiful in a jar. Brown has taken years of industry experience and excellence and bottled in in this jar of goodness that will make you say “What The….Foundation?“",
      review: {
        stars: "★★★★☆",
        title: "LIGHT & BREATHABLE",
        buyer: "Emma W.",
        verifiedIcon: "assets/images/verified.svg",
        text: "“I love how light this feels on my skin. It doesn't feel like makeup at all!”"
      }
    },
    {
      img: "assets/images/image-4.png",
      titleNumber: "4.",
      title: "Not Heavy, Cakey, Or Dry",
      description: "WTF is made with a proprietary blend of Jojoba Oil and Sodium Hyaluronate that feels light on your skin and provides a beautiful glow you’ve never gotten from the likes of foundation. You don’t even need a moisturizer, unless you have very dry skin.",
      review: {
        stars: "★★★★★",
        title: "SUPER EASY TO USE",
        buyer: "Olivia J.",
        verifiedIcon: "assets/images/verified.svg",
        text: "“This product saves me so much time in the morning. It's a game changer!”"
      }
    },
    {
      img: "assets/images/image-5.png",
      titleNumber: "5.",
      title: "It's Your Skin On A Great Skin Day, Every Day",
      description: "One of the hard parts of buying foundation online is finding your shade, but we've made it easy for you. Use the chart to the left to find your shade once you know your Face Pencil Shade.",
      review: {
        stars: "★★★★★",
        title: "BEST FOR ALL SKIN TYPES",
        buyer: "Ava K.",
        verifiedIcon: "assets/images/verified.svg",
        text: "“I have combination skin, and this foundation works perfectly for me. Highly recommend!”"
      }
    }
  ];
  
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
  data.forEach(featureData => {
    const featureElement = createFeature(featureData);
    featuresContainer.appendChild(featureElement);
  });