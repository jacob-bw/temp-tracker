const printToDom = (toPrint, divId) => {
  document.getElementById(divId).innerHTML = toPrint;
};

const toCelsius = () => {
  let domString = "";
  let formInput =
    ((document.getElementById("exampleFormControlInput1").value - 32) * 5) / 9;
  let celsius = Math.round(formInput);
  domString += `
      <div class='card col-md-4 justify-center'>
        <div class='card-body'>
        <h3 class='card-title'>${celsius}</h3>
        </div>
      </div>
    `;
  printToDom(domString, "convertedTemp");
  if (celsius > 32) {
    document.getElementById("convertedTemp").style.color = "red";
  } else if (celsius < 0) {
    document.getElementById("convertedTemp").style.color = "blue";
  } else {
    document.getElementById("convertedTemp").style.color = "green";
  }
};

const toFahrenheit = () => {
  let domString = "";
  let formInput =
    (document.getElementById("exampleFormControlInput1").value * 9) / 5 + 32;
  let fahrenheit = Math.round(formInput);
  domString += `
      <div class='card col-md-4 justify-center'>
        <div class='card-body'>
        <h3 class='card-title'>${fahrenheit}</h3>
        </div>
      </div>
    `;
  printToDom(domString, "convertedTemp");
  if (fahrenheit > 90) {
    document.getElementById("convertedTemp").style.color = "red";
  } else if (fahrenheit < 32) {
    document.getElementById("convertedTemp").style.color = "blue";
  } else {
    document.getElementById("convertedTemp").style.color = "green";
  }
};

const determineConverter = e => {
  if (document.getElementById("radioF").checked) {
    toFahrenheit();
  } else if (document.getElementById("radioC").checked) {
    toCelsius();
  }
};

const clearConverter = e => {
  printToDom([], "convertedTemp");
  document.getElementById("exampleFormControlInput1").value = "";
};

const convertButton = document.getElementById("convert");
const clearButton = document.getElementById("clear");

convertButton.addEventListener("click", determineConverter);
clearButton.addEventListener("click", clearConverter);
