import React from 'react';
import './App.css';
import Page from './pages/Page/Page';
import SyncValidationFormYup from './components/SyncValidationFormYup/SyncValidationFormYup';
import SimpleForm from './components/SimpleForm/SimpleForm';
import SyncValidationForm from './components/SyncValidationForm/SyncValidationForm';
import FieldLevelValidation from './components/FieldLevelValidation/FieldLevelValidation';

function App() {
  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-sm">
          <div className="alert alert-secondary mt-2" role="alert">
            A simple from without validation.
          </div>
          <Page>
            {submit => (<SimpleForm onSubmit={submit} />)}
          </Page>
          <hr />
        </div>
        <div className="col-sm">
          <div className="alert alert-secondary mt-2" role="alert">
            Simple sync validation.
          </div>
          <Page>
            {submit => (<SyncValidationForm onSubmit={submit} />)}
          </Page>
          <hr />
        </div>
        <div className="col-sm">
          <div className="alert alert-secondary mt-2" role="alert">
            Simple sync validation with yup.
          </div>
          <Page>
            {submit => (<SyncValidationFormYup onSubmit={submit} />)}
          </Page>
          <hr />
        </div>
        <div className="col-sm">
        <div className="alert alert-secondary mt-2" role="alert">
            Field level validation.
          </div>
          <Page>
            {submit => (<FieldLevelValidation onSubmit={submit} />)}
          </Page>
          <hr />
        </div>
      </div>
    </div>
  );
}

export default App;
