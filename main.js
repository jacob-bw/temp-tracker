console.log("This is to test if the pages are linked correctly");

//
const printToDOM = (textToPrint, divID) => {
    document.getElementById(divID).innerHTML = textToPrint;
  };  


//function to convert to celsius
const toCelsius =  () => {
  let inputTemp = document.getElementById('tempInputField');
  let temp = inputTemp.value;
  console.log(temp);
  let domString = '';
  domString = `
  <div class="card col-md-4">
    <div class="card-body">
      <h5 class="card-title">${temp}</h5>
      <button class="btn btn-primary">Clear</button>
    </div>
  </div>
  `
  printToDOM(domString, 'temp-zone')
};

//function to convert to farenheit
//const toFahrenheit =  () => {

//}

// Get a reference to the button element in the DOM
//const button = document.getElementById(toCelsius, 'convert');

// This function should determine which conversion should
// happen based on which radio button is selected.
//const determineConverter = (e) => {
  //console.log("event", e);
//}

// Assign a function to be executed when the button is clicked
//button.addEventListener("click", determineConverter);
document.getElementById('convert').addEventListener('click', toCelsius);