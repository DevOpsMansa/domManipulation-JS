import "domMan.css";

const mainEl = document.getElementsByTagName("main")[0];
// mainEl.Style.background = "#4a4e4d"
// console.log(mainEl);
mainEl.style.background = "var(--main-bg)";

//adding the text
mainEl.innerHTML = "<h1>DOM Manipulation</h1>";

//adding class to mainEl called "flex - ctr"
mainEl.classList.add("flex-ctr");

// Part 2:

// Select and cache the <nav id="top-menu"> element
const topMenuEl = document.getElementById("top-menu");

// Set the height of topMenuEl to be 100%
topMenuEl.style.height = "100%";

// Set the background color of topMenuEl to the value stored in --top-menu-bg CSS custom property
topMenuEl.style.backgroundColor = "var(--top-menu-bg)";
topMenuEl.classList.add("flex-around");

// Part 3:
var menuLinks = [
  { text: "about", href: "/about" },
  { text: "catalog", href: "/catalog" },
  { text: "orders", href: "/rders" },
  { text: "accountt", href: "/ccount" },
];
menuLinks.forEach((i) => {
  const link = document.createElement("a");
  link.innerText = i.text;
  link.href = `${i.href}`;
  topMenuEl.appendChild(link);
});
