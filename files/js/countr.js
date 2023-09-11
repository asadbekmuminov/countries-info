import getData from "./request.js";
const div = document.getElementById("country-hero");
const queryString = window.location.search;
const urlSearchParams = new URLSearchParams(queryString).get("slug");
const api = `https://countries-api-v7sn.onrender.com/countries/slug/${urlSearchParams}`;
function updateUi(countr) {
  console.log(countr);
  div.innerHTML = `
  <img
  class="hero-img"
  id="image"
  src="${countr.flags.png}"
  width="560"
  height="400"
  alt=""
/>
<div class="hero-info">
  <div class="hero-info-wrapper">
    <div class="hero-info-left">
      <h2 id="countr-name">${countr.name.common}</h2>
      <p class="hero-info-text" id="Nname">Native name:<span class="info-text">${
        countr.name.nativeName
      }</span></p>
      <p class="hero-info-text" id="population">Population: <span class="info-text">${
        countr.population
      }</span></p>
      <p class="hero-info-text" id="region">Region: <span class="info-text">${
        countr.region
      }</span></p>
      <p class="hero-info-text" id="Sregion">Sregion:<span class="info-text"> ${
        countr.subregion
      }</span></p>
      <p class="hero-info-text" id="capital">Capital: <span class="info-text">${
        countr.capital.style
      }</span></p>
    </div>
    <div class="hero-info-right">
      <p class="hero-info-text" id="domain">Top Level Domain</p>
      <p class="hero-info-text" id="curren"> Currencies: <span class="info-text">${
        countr.currencies
      }</span></p>
      <p class="hero-info-text" id="lang">Language: <span class="info-text">${
        countr.languages
      }</span></p>
    </div>
  </div>
  <div class="hero-info-borders">
    <p class="hero-info-text">Border countries:<span>
    
    ${
      countr.borders && countr.borders.length > 0
        ? (() => {
            const borderLinks = [];
            countr.borders.forEach((border) => {
              borderLinks.push(
                `<a class="border-style" href="countr.html?slug=${border.slug}">${border.common}</a>`
              );
            });
            return borderLinks.join(" ");
          })()
        : "no borders"
    }
    </span>
    </p>
  </div>
</div>
  `;
}
getData(api)
  .then((data) => updateUi(data))
  .catch((error) => console.log(error));
