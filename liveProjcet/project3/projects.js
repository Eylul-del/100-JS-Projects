// Array of testimonials
const testimonials = [
  {
    text: "I would also like to say thank you to all your staff. Wow what great service, I love it! Apple impressed me on multiple levels.",
    author: "Rosetta Q"
  },
  {
    text: "The product quality exceeded my expectations. I will definitely recommend it to my friends and family!",
    author: "Michael B"
  },
  {
    text: "Customer support was fantastic, they solved my issue within minutes. Really impressed!",
    author: "Sofia L"
  },
  {
    text: "This is by far the best purchase I’ve made this year. Totally worth every penny!",
    author: "James T"
  },
  {
    text: "A seamless experience from start to finish. I’m extremely satisfied and will come back again.",
    author: "Emma W"
  }
];

const textEl = document.getElementById("testimonial-text");
const authorEl = document.getElementById("testimonial-author");

// Function to change testimonial randomly
function changeTestimonial() {
  const randomIndex = Math.floor(Math.random() * testimonials.length);
  textEl.textContent = testimonials[randomIndex].text;
  authorEl.textContent = testimonials[randomIndex].author;
}

// Change every 1 minute (60000 ms)
setInterval(changeTestimonial, 10000);
