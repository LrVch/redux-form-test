import React from 'react';
import './App.css';
import SimplePage from './pages/SimplePage/SimplePage';
import SyncValidationPage from './pages/SyncValidationPage/SyncValidationPage';
import SyncValidationPageYup from './pages/SyncValidationPageYup/SyncValidationPageYup';

function App() {
  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-sm">
          <div className="alert alert-secondary mt-2" role="alert">
            A simple from without validation.
          </div>
          <SimplePage />
          <hr />
        </div>
        <div className="col-sm">
          <div className="alert alert-secondary mt-2" role="alert">
            Simple sync validation.
          </div>
          <SyncValidationPage />
          <hr />
        </div>
        <div className="col-sm">
          <div className="alert alert-secondary mt-2" role="alert">
            Simple sync validation with yup.
          </div>
          <SyncValidationPageYup />
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
