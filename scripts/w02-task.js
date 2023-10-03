/* W02-Task - Profile Home Page */

/* Step 1 - Setup type tasks - no code required */

/* Step 2 - Variables */
const fullName = "Philip Izekor";
const currentYear = "2023";
const profilePicture = "images/myphoto.jpg";

/* Step 3 - Element Variables */

const foodElement = document.getElementById("food");
const yearElement = document.querySelector("#year");
const imageElement = document.querySelector("img");
const nameElement = document.getElementById("name");

/* Step 4 - Adding Content */


nameElement.innerHTML = `<strong>${fullName}</strong>`;
yearElement.textContent = `${currentYear}`;

imageElement.setAttribute("src", profilePicture);
imageElement.setAttribute ("alt", `This is image of ${profilePicture}`);

/* Step 5 - Array */

let favoriteFoods = ["Beans", "Rice", "Chichen", "Egg Sauce", "Shawama", "Pizza","menlo soup"]
foodElement.innerHTML = favoriteFoods;
let anotherfavfood = "Yam"

favoriteFoods.push(anotherfavfood)

foodElement.innerHTML  += `<br>${favoriteFoods}`;
favoriteFoods.shift()
foodElement.innerHTML += `<br>${favoriteFoods}`;
favoriteFoods.pop();
foodElement.innerHTML += `<br>${favoriteFoods}`;
