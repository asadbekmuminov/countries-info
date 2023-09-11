import getData from "./request.js";
const select = document.getElementById("selector");
const hero = document.getElementById("hero");
const api = "https://countries-api-v7sn.onrender.com/countries?limit=250";
getData(api)
  .then((data) => updateUi(data.data))
  .catch((error) => console.log(error));

//CREATE ELEMENT
function updateUi(data) {
  const template = document.createDocumentFragment();
  data.forEach((countr) => {
    const linkCountr = elementFactory("a", "linkCountr");
    linkCountr.setAttribute(
      "href",
      `./files/pages/countr.html?slug=${countr.name.slug}`
    );
    const li = elementFactory("li", "card", countr);
    const img = elementFactory("img", "img-stlye");
    const h4 = elementFactory("h4", "country-title");
    const population = elementFactory("p", "conuntry-info_text");
    const region = elementFactory("p", "conuntry-info_text");
    region.classList.add("for-select");
    const capital = elementFactory("p", "conuntry-info_text");
    const div = elementFactory("div", "country-info__wrapper");
    img.src = countr.flags.png;
    h4.textContent = countr.name.common;
    population.textContent = `Population: ${countr.population}`;
    region.textContent = `Region: ${countr.region}`;
    capital.textContent = `Capital: ${countr.capital}`;
    div.append(population, region, capital);
    template.append(img, h4, div);
    li.appendChild(template);
    linkCountr.appendChild(li);
    hero.appendChild(linkCountr);

    // console.log(countr._id);
  });
}

function elementFactory(...elementSetting) {
  const [elementName, elementClass, elementInfo] = elementSetting;
  const element = document.createElement(elementName);
  elementClass && element.classList.add(elementClass);
  return element;
}
//SELECT
select.addEventListener("click", () => {
  const selectValue = select.value;
  const countryRegion = document.getElementsByClassName("for-select");
  Array.from(countryRegion).forEach((countr) => {
    if (selectValue == "All") {
      countr.parentElement.parentElement.classList.remove("hidden");
    } else if (countr.textContent.includes(selectValue)) {
      countr.parentElement.parentElement.classList.remove("hidden");
    } else {
      countr.parentElement.parentElement.classList.add("hidden");
    }
  });
});
//SEARCH

const input = document.getElementById("search-form-input");

input.addEventListener("input", () => {
  const inputValue = input.value.toLowerCase();
  const countryName = document.getElementsByClassName("country-title");
  Array.from(countryName).forEach((item) => {
    if (item.textContent.toLowerCase().includes(inputValue)) {
      item.parentElement.parentElement.classList.remove("hidden");
    } else {
      item.parentElement.parentElement.classList.add("hidden");
    }
  });
});
