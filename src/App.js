import React from 'react'
import { useSelector, useDispatch } from 'react-redux';
import  { incremento , decremento , incrementoAsync}  from './actions/counterActions'


const App = () => {

  const count = useSelector((state) => state.count);
  const loading = useSelector((state) => state.loading);
  const dispatch = useDispatch();

  const handleIncrement = () => {
    dispatch(incremento());
  };

  const handleDecrement = () => {
    dispatch(decremento());
  };

  const handleIncrementAsync = () => {
    dispatch(incrementoAsync());
  };

  return (
    <div>
      <h1>Contador: {count}</h1>
      <button onClick={handleIncrement}>Incrementar</button>
      <button onClick={handleDecrement}>Decrementar</button>
      <button onClick={handleIncrementAsync} disabled={loading}>
        Incremento Asíncrono
      </button>
      {loading && <p>Cargando...</p>}
    </div>
  );
  }
export default App