import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

const compEjemplo = () => {
  return <div>Ejemplo</div>;
};

function App() {
  return (
    <div>
      <BrowserRouter>
        <div>
          <Route exact path='/' component={compEjemplo} />
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
