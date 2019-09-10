import React from 'react';
import './App.css';
import Page from './pages/Page/Page';
import SyncValidationFormYup from './components/SyncValidationFormYup/SyncValidationFormYup';
import SimpleForm from './components/SimpleForm/SimpleForm';
import SyncValidationForm from './components/SyncValidationForm/SyncValidationForm';
import FieldLevelValidation from './components/FieldLevelValidation/FieldLevelValidation';
import MixedSyncValidation from './components/MixedSyncValidation/MixedSyncValidation';
import AsyncBlurValidation from './components/AsyncBlurValidation/AsyncBlurValidation';
import AsyncChangeValidation from './components/AsyncChangeValidation/AsyncChangeValidation';

function App() {
  return (
    <div className="container-fluid">
      <div className="row">

        {/* first */}
        <div className="col-sm">
          <div className="alert alert-secondary mt-2" role="alert">
            A simple from without validation.
          </div>
          <Page>
            {submit => (<SimpleForm onSubmit={submit} />)}
          </Page>
          <hr />
        </div>

        {/* second */}
        <div className="col-sm">
          <div className="alert alert-secondary mt-2" role="alert">
            Simple sync validation.
          </div>
          <Page>
            {submit => (<SyncValidationForm onSubmit={submit} />)}
          </Page>
          <hr />
          <div className="alert alert-secondary mt-2" role="alert">
            Mixed validation sync validation.(field level and validation fn)
          </div>
          <Page>
            {submit => (<MixedSyncValidation onSubmit={submit} />)}
          </Page>
          <hr />
        </div>

        {/* third */}
        <div className="col-sm">
          <div className="alert alert-secondary mt-2" role="alert">
            Simple sync validation with yup.
          </div>
          <Page>
            {submit => (<SyncValidationFormYup onSubmit={submit} />)}
          </Page>
          <hr />
          <div className="alert alert-secondary mt-2" role="alert">
            Async blur validation.(fails on multiple fields validation)
          </div>
          <Page>
            {submit => (<AsyncBlurValidation onSubmit={submit} />)}
          </Page>
          <hr />
        </div>

        {/* fourth */}
        <div className="col-sm">
          <div className="alert alert-secondary mt-2" role="alert">
            Field level validation.
          </div>
          <Page>
            {submit => (<FieldLevelValidation onSubmit={submit} />)}
          </Page>
          <hr />
          <div className="alert alert-secondary mt-2" role="alert">
          Async change validation.(fails on multiple fields validation)
          </div>
          <Page>
            {submit => (<AsyncChangeValidation onSubmit={submit} />)}
          </Page>
          <hr />
        </div>
      </div>
    </div>
  );
}

export default App;
