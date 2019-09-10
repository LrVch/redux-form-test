import React, { useState } from 'react';
import './App.css';
import Page from './pages/Page/Page';
import SyncValidationFormYup from './components/SyncValidationFormYup/SyncValidationFormYup';
import SimpleForm from './components/SimpleForm/SimpleForm';
import SyncValidationForm from './components/SyncValidationForm/SyncValidationForm';
import FieldLevelValidation from './components/FieldLevelValidation/FieldLevelValidation';
import MixedSyncValidation from './components/MixedSyncValidation/MixedSyncValidation';
import AsyncBlurValidation from './components/AsyncBlurValidation/AsyncBlurValidation';
import AsyncChangeValidation from './components/AsyncChangeValidation/AsyncChangeValidation';
import InitializeFromState from './components/InitializeFromState/InitializeFromState';
import SelectingFormValues from './components/SelectingFormValues/SelectingFormValues';

function App() {
  const [nicknameRequired, setNicknameRequired] = useState({nicknameRequired: false})
  const {nicknameRequired: nickRequired} = nicknameRequired
  return (
    <div className="container-fluid">
      <div className="row">

        {/* first */}
        <div className="col-sm">
          {/* <div className="alert alert-secondary mt-2" role="alert">
            A simple from without validation.
          </div>
          <Page>
            {submit => (<SimpleForm onSubmit={submit} />)}
          </Page>
          <hr /> */}
          <div className="alert alert-secondary mt-2" role="alert">
            Initialize from state.
          </div>
          <Page>
            {submit => (<InitializeFromState onSubmit={submit} />)}
          </Page>
          <hr />
        </div>

        {/* second */}
        <div className="col-sm">
          {/* <div className="alert alert-secondary mt-2" role="alert">
            Simple sync validation.
          </div>
          <Page>
            {submit => (<SyncValidationForm onSubmit={submit} />)}
          </Page>
          <hr />
          <div className="alert alert-secondary mt-2" role="alert">
            Mixed sync validation.(field level and validation fn)
          </div>
          <Page>
            {submit => (<MixedSyncValidation onSubmit={submit} />)}
          </Page>
          <hr /> */}
          <div className="alert alert-secondary mt-2" role="alert">
            Selecting form values, conditional validation with yup and context
          </div>
          <button
            onClick={() => setNicknameRequired(obj => ({nicknameRequired: !obj.nicknameRequired}))}
            type="submit"
            className="btn btn-secondary">
            Toggle nickname required "{nickRequired ? 'required' : 'not required'}"
          </button>
          <Page>
            {submit => (<SelectingFormValues
              context={nicknameRequired}
              onSubmit={submit} />)}
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
