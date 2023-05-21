import react from 'react';
import style from './style.css'
import TitleAndText from './view/TitleAndText';


function App() {
  //Calculating the number of washes and dries with a given amount of money."
  function calculate(total, of) {
    if(total == "" || of == "") {
      return;
    }
    var result = document.getElementById("result");
    result.innerHTML += "<br>Total: $" + total + "<br>Of: $" + of;
    result.innerHTML += "<br>We can determine how many times you can spend $" + of + " with $" + total + ". ";
    var counter = 0;
    var lonies = 0;
    var quarters = 0;

    while (total >= of) {
      if (total >= of) {
        total = total - of;
        lonies = lonies + 4;
        quarters = quarters + 5;
        counter++;
      }
    }
    result.innerHTML += "You will be able to use $" + of + " a total of " + counter + " times. ";
    result.innerHTML += "This corresponds to " + lonies + " Lonies and " + quarters + " Quarters. ";
    result.innerHTML += "What's left is: $" + total;
    result.innerHTML += "<br>If you add just $" + (of - total) + " you can do an extra wash and dry.";
  }

  function calculateCoin() {
    var result = document.getElementById("result");
    var amount = document.getElementById("amount").value;
    var washer = document.getElementById("washer").value;
    var dryer = document.getElementById("dryer").value;
    console.log(amount + ' ' + washer + ' ' + dryer);
    result.innerHTML = "";
    result.innerHTML += "Washer Cost: $" + washer + "<br>Dryer Cost: $" + dryer;
    calculate(amount, (parseFloat(washer) + parseFloat(dryer)));
  }

  return (
    <>
      <div className="style" >
        <h1>The Wash and Dry Calculation</h1>
        <fieldset class="container">
          <table>
            <tbody>
              <tr>
                <TitleAndText name="Amount: " id="amount" />
              </tr>
              <tr>
                <TitleAndText name="Washer Cost: " id="washer" />
              </tr>
              <tr>
                <TitleAndText name="Dryer Cost: " id="dryer" />
              </tr>
            </tbody>
          </table>
          <input id="btn" onClick={calculateCoin} type="button" value="Calculate"></input>
          <br></br>
          <div class="content">
            <p id="result"></p>
          </div>
        </fieldset>
      </div>
    </>
  );
}

export default App;
