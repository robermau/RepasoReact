


export const incremento = () => ({
    type: 'INCREMENTO',
  });
  
  export const decremento = () => ({
    type: 'DECREMENTO',
  });
  
  export const incrementoAsync = () => {
    return (dispatch) => {
      dispatch({ type: 'INCREMENTO_ASYNC_REQUEST' });
      // Simulamos una tarea asíncrona
      setTimeout(() => {
        dispatch({ type: 'INCREMENTO' });
        dispatch({ type: 'INCREMENTO_ASYNC_SUCCESS' });
      }, 1000);
    };
  };