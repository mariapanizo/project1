function search(event) {
  event.preventDefault();
  let h1 = document.querySelector("#city");
  let cityInput = document.querySelector("#city-input");
  if (cityInput.value !== null) {
    h1.innerHTML = `${cityInput.value}`;
  } else {
    h1.innerHTML = "What city are you currently in?";
  }
}
