import React, { useState } from 'react';
import './App.css';
import MiApi from './components/MiApi';
import Buscador from './components/Buscador';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  const [info, setInfo] = useState('');

  return (
    <>
      <div className="container">
        <div className="row">
          <div className="position-relative min-vh-100">
            <h1
              className="position-absolute top-50 start-50 translate-middle text-light"
              style={{
                textShadow: '0 0 10px rgba(0, 0, 0, 0.7)',
                fontSize: '8em',
              }}
            >
              AnimeHunter
            </h1>
          </div>
        </div>
        <div className="row justify-content-center">
          <Buscador setInfo={setInfo} />
        </div>
        <MiApi info={info} />
      </div>
    </>
  );
}

export default App;
