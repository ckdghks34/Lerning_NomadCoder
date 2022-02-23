import { useState, useEffect } from "react";

function App() {
  const [loading, setLoading] = useState(true);
  const [amount, setAmount] = useState("");
  const [coins, setCoins] = useState([]);
  const [selectopt, setSelectopt] = useState([]);
  const [calculate, setCalculate] = useState("");

  useEffect(() => {
    fetch("https://api.coinpaprika.com/v1/tickers")
      .then((response) => {
        return response.json();
      })
      .then((json) => {
        let tmp = [];
        for (let i = 0; i < json.length; i++) {
          json[i].quotes.USD.price = json[i].quotes.USD.price.toFixed(4);
          if (json[i].quotes.USD.price > 0.0001) tmp.push(json[i]);
        }
        setCoins(tmp);
      })
      .then(() => {
        setLoading(false);
      });
  }, []);

  const onChangedAmount = (event) => setAmount(event.target.value);
  const onSubmitAmount = (event) => {
    event.preventDefault();
    console.log(selectopt);
    if (amount === "" || selectopt.length === 0) {
      return;
    }
    setCalculate(amount / selectopt.quotes.USD.price);
    setAmount("");
  };
  const onSelectopt = (event) => {
    if (event.target.value === "") {
      setSelectopt([]);
      setCalculate("");
      return;
    }
    setSelectopt(JSON.parse(event.target.value));
    setCalculate("");
  };

  return (
    <div>
      <h1>The Coins!</h1>

      <hr />
      {loading ? <strong>Loadings...</strong> : <h2>Kinds of Coins({coins.length})</h2>}
      {loading ? null : (
        <form onSubmit={onSubmitAmount}>
          <label>Amount : </label>
          <input
            onChange={onChangedAmount}
            type="text"
            placeholder="Holding amount.."
            value={amount}
          ></input>
          <button>calculate</button>
        </form>
      )}
      <br />
      {loading ? null : (
        <select onChange={onSelectopt} multiple={false}>
          <option value="">Select Coin</option>
          {coins.map((coin) => (
            <option key={coin.id} value={JSON.stringify(coin)}>
              {coin.name} ({coin.symbol}) : ${coin.quotes.USD.price} USD
            </option>
          ))}
        </select>
      )}
      {calculate === "" ? null : (
        <div>
          <h3>
            You selected : {selectopt.name} ({selectopt.symbol})
          </h3>
          <h4>You can Buy the coin : {calculate}</h4>
        </div>
      )}
    </div>
  );
}

export default App;
