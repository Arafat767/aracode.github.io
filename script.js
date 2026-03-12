function changeLanguage(language) {
  document.documentElement.lang = language;

  console.log("Changing language to:", language);

  for (let key in languageMap[language]) {
    const element = document.getElementById(key);
    if (element) {
      element.textContent = languageMap[language][key];
    }
  }
  document.body.style.opacity = "0";
  setTimeout(() => {
    document.body.style.opacity = "1";
  }, 600);
}

document.body.style.opacity = "0";
setTimeout(() => {
  document.body.style.opacity = "1";
}, 600);

document.querySelectorAll(".img-container img").forEach((img) => {
  img.onclick = () => {
    document.querySelector(".pop-up").style.display = "block";
    document.querySelector(".pop-up img").src = img.getAttribute("src");
  };
});

document.querySelector(".pop-up span").onclick = () => {
  document.querySelector(".pop-up").style.display = "none";
};

document.querySelectorAll(".img-container .img").forEach((imgContainer) => {
  imgContainer.onclick = () => {
    const img = imgContainer.querySelector("img");
    const caption = imgContainer.querySelector(".img-caption");

    document.querySelector(".pop-up").style.display = "block";
    document.querySelector(".pop-up img").src = img.getAttribute("src");

    document.querySelector(".pop-up .img-caption").textContent =
      caption.textContent;
  };
});

document.querySelector(".pop-up span").onclick = () => {
  document.querySelector(".pop-up").style.display = "none";
};
