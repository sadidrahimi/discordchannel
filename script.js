document.addEventListener("DOMContentLoaded", function() {
  const videos = [
    {
      title: "Video 1",
      description: "Description of Video 1",
      price: 9.99,
      stripeLink: "https://stripe.com/link1"
    },
    {
      title: "Video 2",
      description: "Description of Video 2",
      price: 14.99,
      stripeLink: "https://stripe.com/link2"
    },
    {
      title: "Video 3",
      description: "Description of Video 3",
      price: 19.99,
      stripeLink: "https://stripe.com/link3"
    }
  ];

  const videoPreviewsContainer = document.getElementById("videoPreviews");

  videos.forEach(video => {
    const videoPreview = document.createElement("div");
    videoPreview.classList.add("videoPreview");

    const title = document.createElement("h2");
    title.classList.add("videoTitle");
    title.textContent = video.title;

    const description = document.createElement("p");
    description.classList.add("videoDescription");
    description.textContent = video.description;

    const paymentButton = document.createElement("a");
    paymentButton.classList.add("paymentButton");
    paymentButton.textContent = `Buy Now $${video.price}`;
    paymentButton.href = video.stripeLink;
    paymentButton.target = "_blank";

    videoPreview.appendChild(title);
    videoPreview.appendChild(description);
    videoPreview.appendChild(paymentButton);

    videoPreviewsContainer.appendChild(videoPreview);
  });
});
