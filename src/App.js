import { useState } from "react";

function App() {
  const [weight, setWeight] = useState(0);
  const [height, setHeight] = useState(0);
  const [bmi, setBmi] = useState("-");
  const [status, setStatus] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (weight === 0 || height === 0) {
      alert("Please enter a valid weight and height");
      //... Add more validations as required
    } else {
      let bmi = (weight / (height * height)) * 703;
      setBmi(bmi.toFixed(1));

      if (bmi < 25) {
        setStatus("You are underweight 😥");
      } else if (bmi >= 25 && bmi < 30) {
        setStatus("You are healthy weight 😊");
      } else {
        setStatus("You are overweight 😥");
      }
    }
  };

  const handleReload = () => {
    setHeight(0);
    setWeight(0);
    setBmi("-");
    setStatus("");
  };

  return (
    <div className="app">
      <div className="container">
        {/* Title */}
        <h2>BMI Calculator</h2>
        <form onSubmit={handleSubmit}>
          {/* Input fields */}
          <div>
            <label>Weight (lbs)</label>
            <input
              type="number"
              name="weight"
              value={weight}
              placeholder="Please enter your weight"
              onChange={(e) => setWeight(e.target.value)}
            />
          </div>
          <div>
            <label>Height (in)</label>
            <input
              type="number"
              name="height"
              value={height}
              placeholder="Please enter your height"
              onChange={(e) => setHeight(e.target.value)}
            />
          </div>
          {/* Submit and Reload Buttons */}
          <div>
            <button className="btn" type="submit">
              Submit
            </button>
            <button
              className="btn btn-outline"
              type="reset"
              onClick={handleReload}
            >
              Reload
            </button>
          </div>
          {/* Output Messages */}
          <div className="center">
            <h3>Your BMI is: {bmi}</h3>
            <p>{status}</p>
          </div>
        </form>
      </div>
    </div>
  );
}

export default App;
