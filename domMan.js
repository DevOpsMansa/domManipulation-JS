// import "domMan.css";

//Dylans code

//Part 1
//Select and cache the <main> element in a variable named mainEl.
const mainEl = document.querySelector(`main`);

// Set the background color of mainEl to the value stored in the --main-bg CSS custom property.
// Hint: Assign a string that uses the CSS var() function like this: 'var(--main-bg)'.
mainEl.style.backgroundColor = "var(--main-bg)";

// Set the content of mainEl to <h1>DOM Manipulation</h1>. There are a variety of ways to do this; pick whichever one that you think works best in this situation.
mainEl.innerHTML = "<h1>DOM Manipulation</h1>";

// Add a class of flex-ctr to mainEl.
mainEl.classList.add(`flex-ctr`);

// Hint: Use the Element.classList API.

//Part 2:

// Select and cache the <nav id="top-menu"> element in a variable named topMenuEl.save in a variable
const topMenuEl = document.getElementById("top-menu");
// console.log(topMenuEl);

// Set the height of the topMenuEl element to be 100%.
topMenuEl.style.height = `100%`;

// Set the background color of topMenuEl to the value stored in the --top-menu-bg CSS custom property.
topMenuEl.style.backgroundColor = `var(--top-menu-bg)`
;
// Add a class of flex-around to topMenuEl.
topMenuEl.classList.add(`flex-around`);

//Part 3:
// Menu data structure
var menuLinks = [
  { text: 'about', href: '/about' },
  { text: 'catalog', href: '/catalog' },
  { text: 'orders', href: '/orders' },
  { text: 'account', href: '/account' },
];     //this is an array
// Iterate over the entire menuLinks array and for each "link" object: 
menuLinks.forEach((link) => {

//Create an <a> element.
let menuItems = document.createElement(`a`);

// On the new element, add an href attribute with its value set to the href property of the "link" object.
menuItems.setAttribute(`href`, link.href);
// console.log(menuItems) // always console to see your code is workig

// Set the new element's content to the value of the text property of the "link" object.
menuItems.textContent = link.text
// console.log(menuItems)
// Append the new element to the topMenuEl element.
topMenuEl.appendChild(menuItems)
});






// //ORR

// //Select and cache the <main> element in a variable named mainEl.
// const mainEl = document.getElementsByTagName("main")[0];
// // mainEl.Style.background = "#4a4e4d"
// // console.log(mainEl);
// mainEl.style.background = "var(--main-bg)";

// //adding the text
// mainEl.innerHTML = "<h1>DOM Manipulation</h1>";

// //adding class to mainEl called "flex - ctr"
// mainEl.classList.add("flex-ctr");

// // Part 2:

// // Select and cache the <nav id="top-menu"> element
// const topMenuEl = document.getElementById("top-menu");

// // Set the height of topMenuEl to be 100%
// topMenuEl.style.height = "100%";

// // Set the background color of topMenuEl to the value stored in --top-menu-bg CSS custom property
// topMenuEl.style.backgroundColor = "var(--top-menu-bg)";
// topMenuEl.classList.add("flex-around");

// // Part 3:
// var menuLinks = [
//   { text: "about", href: "/about" },
//   { text: "catalog", href: "/catalog" },
//   { text: "orders", href: "/rders" },
//   { text: "accountt", href: "/ccount" },
// ];
// menuLinks.forEach((i) => {
//   const link = document.createElement("a");
//   link.innerText = i.text;
//   link.href = `${i.href}`;
//   topMenuEl.appendChild(link);
// });
