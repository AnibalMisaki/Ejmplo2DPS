import {useState, useEffect} from 'react';
import './App.css';


function App() {
  const [dolar, setDolar] = useState(0);
  const [euro, setEuro] = useState(0);
  const [bitcoin, setBitcoin] = useState(0);

  const [tipo, setTipo] = useState(1);
  const [total, setTotal] = useState(0);

  useEffect(() => {
    setDolar((total * tipo) / 1);
    setEuro((total * tipo) / 1.17);
    setBitcoin((total * tipo) / 46400.31);

  }, [total, tipo]);


  const handleTotalChange = e => {
    if (!isNaN(e.target.value)) {
      setTotal(e.target.value);
    }
  };


  return (
    <div className="App">
      <h1>Convertidor de divisas</h1>

      <p>Dolar: {dolar}</p>
      <p>Euro: {euro}</p>
      <p>Bitcoin: {bitcoin}</p>

      <hr />

      <h3>{total}</h3>

      <select onChange={event => setTipo(event.target.value)} value={tipo}>
        <option value={1}>Dolar</option>
        <option value={1.17}>Euro</option>
        <option value={46400.31}>Bitcoin</option>
      </select>
      <input onChange={handleTotalChange} value={total} />
    </div>
  );
}

export default App;
