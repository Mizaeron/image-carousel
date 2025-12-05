import "./styles.css";
import cat1 from "./cat.jpeg";
import cat2 from "./cat2.jpg";
import man1 from "./man1.jpeg";
import man2 from "./man2.jpeg";
import woman1 from "./woman1.jpeg";
import woman2 from "./woman2.jpg";

const pictureHolder = document.querySelector(".picture-frame");
const firstMan = document.querySelector(".first-man");
const secondMan = document.querySelector(".second-man");
const firstCat = document.querySelector(".first-cat");
const secondCat = document.querySelector(".second-cat");
const firstWoman = document.querySelector(".first-woman");
const secondWoman = document.querySelector(".second-woman");

const catpic1 = document.createElement("img");
catpic1.classList.add("cat1");
catpic1.src = cat1;

const catpic2 = document.createElement("img");
catpic2.classList.add("cat2");
catpic2.src = cat2;

const manpic1 = document.createElement("img");
manpic1.classList.add("man1");
manpic1.src = man1;

const manpic2 = document.createElement("img");
manpic2.classList.add("man2");
manpic2.src = man2;

const womanpic1 = document.createElement("img");
womanpic1.classList.add("woman1");
womanpic1.src = woman1;

const womanpic2 = document.createElement("img");
womanpic2.classList.add("woman2");
womanpic2.src = woman2;

pictureHolder.append(manpic1);

const allPics = [
  firstMan,
  secondMan,
  firstCat,
  secondCat,
  firstWoman,
  secondWoman,
];

function nextSlide() {
  const rightArrow = document.querySelector(".arrow-right");

  rightArrow.addEventListener("click", () => {
    if (pictureHolder.contains(manpic1)) {
      manpic1.remove();
      pictureHolder.append(manpic2);
    } else if (pictureHolder.contains(manpic2)) {
      manpic2.remove();
      pictureHolder.append(catpic1);
    } else if (pictureHolder.contains(catpic1)) {
      catpic1.remove();
      pictureHolder.append(catpic2);
    } else if (pictureHolder.contains(catpic2)) {
      catpic2.remove();
      pictureHolder.append(womanpic1);
    } else {
      womanpic1.remove();
      pictureHolder.append(womanpic2);
    }
  });
}

function previousSlide() {
  const leftArrow = document.querySelector(".arrow-left");

  leftArrow.addEventListener("click", () => {
    if (pictureHolder.contains(manpic2)) {
      manpic2.remove();
      pictureHolder.append(manpic1);
    } else if (pictureHolder.contains(catpic1)) {
      catpic1.remove();
      pictureHolder.append(manpic2);
    } else if (pictureHolder.contains(catpic2)) {
      catpic2.remove();
      pictureHolder.append(catpic1);
    } else if (pictureHolder.contains(womanpic1)) {
      womanpic1.remove();
      pictureHolder.append(catpic2);
    } else if (pictureHolder.contains(womanpic2)) {
      womanpic2.remove();
      pictureHolder.append(womanpic1);
    }
  });
}

function checkImage() {
  const images = pictureHolder.getElementsByTagName("img");

  if (images.length === 0) {
    console.log("No images present.");
    return;
  }

  const currentImage = images[0];

  if (currentImage.src.includes(manpic1.src)) {
    allPics.forEach((pic) => {
      pic.style.fill = "white";
    });
    firstMan.style.fill = "black";
  } else if (currentImage.src.includes(manpic2.src)) {
    allPics.forEach((pic) => {
      pic.style.fill = "white";
    });
    secondMan.style.fill = "black";
  } else if (currentImage.src.includes(catpic1.src)) {
    allPics.forEach((pic) => {
      pic.style.fill = "white";
    });
    firstCat.style.fill = "black";
  } else if (currentImage.src.includes(catpic2.src)) {
    allPics.forEach((pic) => {
      pic.style.fill = "white";
    });
    secondCat.style.fill = "black";
  } else if (currentImage.src.includes(womanpic1.src)) {
    allPics.forEach((pic) => {
      pic.style.fill = "white";
    });
    firstWoman.style.fill = "black";
  } else if (currentImage.src.includes(womanpic2.src)) {
    allPics.forEach((pic) => {
      pic.style.fill = "white";
    });
    secondWoman.style.fill = "black";
  }
}

function clickCircle() {
  const circles = document.querySelector(".circle");

  circles.addEventListener("click", (e) => {
    if (e.target.closest(".first-man")) {
      pictureHolder.removeChild(pictureHolder.firstChild);
      pictureHolder.append(manpic1);
    } else if (e.target.closest(".second-man")) {
      pictureHolder.removeChild(pictureHolder.firstChild);
      pictureHolder.append(manpic2);
    } else if (e.target.closest(".first-cat")) {
      pictureHolder.removeChild(pictureHolder.firstChild);
      pictureHolder.append(catpic1);
    } else if (e.target.closest(".second-cat")) {
      pictureHolder.removeChild(pictureHolder.firstChild);
      pictureHolder.append(catpic2);
    } else if (e.target.closest(".first-woman")) {
      pictureHolder.removeChild(pictureHolder.firstChild);
      pictureHolder.append(womanpic1);
    } else if (e.target.closest(".second-woman")) {
      pictureHolder.removeChild(pictureHolder.firstChild);
      pictureHolder.append(womanpic2);
    }
  });
}

const images = [manpic1, manpic2, catpic1, catpic2, womanpic1, womanpic2];

function advanceImage() {
  if (pictureHolder.contains(manpic1)) {
    pictureHolder.removeChild(pictureHolder.firstChild);
    pictureHolder.append(manpic2);
  } else if (pictureHolder.contains(manpic2)) {
    pictureHolder.removeChild(pictureHolder.firstChild);
    pictureHolder.append(catpic1);
  } else if (pictureHolder.contains(catpic1)) {
    pictureHolder.removeChild(pictureHolder.firstChild);
    pictureHolder.append(catpic2);
  } else if (pictureHolder.contains(catpic2)) {
    pictureHolder.removeChild(pictureHolder.firstChild);
    pictureHolder.append(womanpic1);
  } else if (pictureHolder.contains(womanpic1)) {
    pictureHolder.removeChild(pictureHolder.firstChild);
    pictureHolder.append(womanpic2);
  } else {
    pictureHolder.removeChild(pictureHolder.firstChild);
    pictureHolder.append(manpic1);
  }
}

const observer = new MutationObserver(() => {
  checkImage();
});

setInterval(advanceImage, 5000);

observer.observe(pictureHolder, { childList: true, subtree: true });

nextSlide();
previousSlide();
clickCircle();
