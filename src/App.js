import React from 'react';
import './App.css';
import SimplePage from './pages/SimplePage/SimplePage';
import SyncValidationPage from './pages/SyncValidationPage/SyncValidationPage';

function App() {
  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-sm">
          <SimplePage />
          <hr />
        </div>
        <div className="col-sm">
          <SyncValidationPage />
          <hr />
        </div>
        <div className="col-sm">

          <hr />
        </div>
        <div className="col-sm">

          <hr />
        </div>
      </div>
    </div>
  );
}

export default App;
