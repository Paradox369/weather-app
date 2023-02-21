const cityForm = document.querySelector("form");

const updateCity = async (city) => {
  const cityDetails = await getCity(city);
  const weather = await getWeather(cityDetails.Key);
};

cityForm.addEventListener("submit", (e) => {
  e.preventDefault();

  // get city
  const city = cityForm.city.value.trim();
  cityForm.reset();

  // update ul with new city
  updateCity(city);
});
