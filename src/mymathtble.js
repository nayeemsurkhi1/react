import "./App.css";

function App() {
  function handleMathTable(e) {
    var tablePrint = "";
    for (let i = 1; i <= 20; i++) {
      let number = e.target.value;
      tablePrint += number + " X " + i + "=" + number * i + "<br>";
    }
    document.getElementById("table").innerHTML = tablePrint;
  }
  return (
    <div className="App">
      <h1>Multiplication Table</h1>
      <label>Enter number to generate table</label>

      <div>
        <input name="Enter Number" onChange={handleMathTable} />
      </div>
      <div id="table"></div>
    </div>
  );
}

export default App;
