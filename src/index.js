import "./styles.css";
import cat1 from "./cat.jpeg";
import cat2 from "./cat2.jpg";
import man1 from "./man1.jpeg";
import man2 from "./man2.jpeg";
import woman1 from "./woman1.jpeg";
import woman2 from "./woman2.jpg";

const pictureHolder = document.querySelector(".picture-frame");

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

// pictureHolder.append(manpic1);
// pictureHolder.append(manpic2);
// pictureHolder.append(catpic1);
// pictureHolder.append(catpic2);
// pictureHolder.append(womanpic1);
pictureHolder.append(womanpic2);
