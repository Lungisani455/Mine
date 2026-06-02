document.body.addEventListener("click", function(e) {
  const heart = document.createElement("div");
  heart.className = "heart";
  heart.style.left = e.clientX + "px";
  heart.style.top = e.clientY + "px";
  document.body.appendChild(heart);

  // remove after animation
  setTimeout(() => {
    heart.remove();
  }, 2000);
});

