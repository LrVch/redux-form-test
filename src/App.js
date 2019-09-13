import React, { useState } from 'react'
import './App.css'
import Page from './pages/Page/Page'
import SyncValidationFormYup, { listing as SyncValidationFormYupListing } from './components/SyncValidationFormYup/SyncValidationFormYup'
import SimpleForm, { listing as SimpleFormListing } from './components/SimpleForm/SimpleForm'
import SyncValidationForm, { listing as SyncValidationFormListing } from './components/SyncValidationForm/SyncValidationForm'
import FieldLevelValidation, { listing as FieldLevelValidationListing } from './components/FieldLevelValidation/FieldLevelValidation'
import MixedSyncValidation, { listing as MixedSyncValidationListing } from './components/MixedSyncValidation/MixedSyncValidation'
import AsyncBlurValidation, { listing as AsyncBlurValidationListing } from './components/AsyncBlurValidation/AsyncBlurValidation'
import AsyncChangeValidation, { listing as AsyncChangeValidationListing } from './components/AsyncChangeValidation/AsyncChangeValidation'
import InitializeFromState, { listing as InitializeFromStateListing } from './components/InitializeFromState/InitializeFromState'
import SelectingFormValues, { listing as SelectingFormValuesListing } from './components/SelectingFormValues/SelectingFormValues'
import FieldArraysForm, { listing as FieldArraysFormListing } from './components/FieldArraysForm/FieldArraysForm'
import ShowCase from './components/ShowCase/ShowCase'
import Wrapper from './components/Wrapper/Wrapper'
import CodeListening from './components/CodeListening/CodeListening'
import { logger } from './utils'


function App() {
  const [nicknameRequired, setNicknameRequired] = useState({ nicknameRequired: false })
  const { nicknameRequired: nickRequired } = nicknameRequired
  return (
    <div className="container-fluid">
      <div className="row">

        {/* first */}
        <div className="col-sm">
          <Wrapper title="Simple from without validation.">
            <Page>
              {submit => (<SimpleForm onSubmit={submit} />)}
            </Page>
            <hr />
            <ShowCase
              codeListining={<CodeListening codeListening={SimpleFormListing} />}
              component={<SimpleForm onSubmit={logger} />}
              title="Simple from without validation."
            />
          </Wrapper>

          <Wrapper title="Initialize from state.">
            <Page>
              {submit => (<InitializeFromState onSubmit={submit} />)}
            </Page>
            <hr />
            <ShowCase
              codeListining={<CodeListening codeListening={InitializeFromStateListing} />}
              component={<InitializeFromState onSubmit={logger} />}
              title="Initialize from state."
            />
          </Wrapper>
        </div>

        {/* second */}
        <div className="col-sm">
          <Wrapper title="Simple sync validation.">
            <Page>
              {submit => (<SyncValidationForm onSubmit={submit} />)}
            </Page>
            <hr />
            <ShowCase
              codeListining={<CodeListening codeListening={SyncValidationFormListing} />}
              component={<SyncValidationForm onSubmit={logger} />}
              title="Simple sync validation."
            />
          </Wrapper>

          <Wrapper title="Mixed sync validation.(field level and validation fn)">
            <Page>
              {submit => (<MixedSyncValidation onSubmit={submit} />)}
            </Page>
            <hr />
            <ShowCase
              codeListining={<CodeListening codeListening={MixedSyncValidationListing} />}
              component={<MixedSyncValidation onSubmit={logger} />}
              title="Mixed sync validation.(field level and validation fn)"
            />
          </Wrapper>

          <Wrapper title="Selecting form values, conditional validation with yup and context">
            <button
              onClick={() => setNicknameRequired(obj => ({ nicknameRequired: !obj.nicknameRequired }))}
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
            <ShowCase
              codeListining={<CodeListening codeListening={MixedSyncValidationListing} />}
              component={<MixedSyncValidation onSubmit={logger} />}
              title="Selecting form values, conditional validation with yup and context"
            />
          </Wrapper>
        </div>

        {/* third */}
        <div className="col-sm">
          <Wrapper title="Simple sync validation with yup.">
            <Page>
              {submit => (<SyncValidationFormYup onSubmit={submit} />)}
            </Page>
            <hr />
            <ShowCase
              codeListining={<CodeListening codeListening={SyncValidationFormYupListing} />}
              component={<SyncValidationFormYup onSubmit={logger} />}
              title="Simple sync validation with yup."
            />
          </Wrapper>

          <Wrapper title="Async blur validation.(fails on multiple fields validation)">
            <Page>
              {submit => (<AsyncBlurValidation onSubmit={submit} />)}
            </Page>
            <hr />
            <ShowCase
              codeListining={<CodeListening codeListening={AsyncBlurValidationListing} />}
              component={<AsyncBlurValidation onSubmit={logger} />}
              title="Async blur validation.(fails on multiple fields validation)"
            />
          </Wrapper>

          <Wrapper title="Field arrays form(moving and DnD)">
            <Page>
              {submit => (<FieldArraysForm maxHobbiesLength="5" onSubmit={submit} />)}
            </Page>
            <hr />
            <ShowCase
              codeListining={<CodeListening codeListening={FieldArraysFormListing} />}
              component={<FieldArraysForm onSubmit={logger} />}
              title="Field arrays form(moving and DnD)"
            />
          </Wrapper>
        </div>

        {/* fourth */}
        <div className="col-sm">
          <Wrapper title="Field level validation.">
            <Page>
              {submit => (<FieldLevelValidation onSubmit={submit} />)}
            </Page>
            <hr />
            <ShowCase
              codeListining={<CodeListening codeListening={FieldLevelValidationListing} />}
              component={<FieldLevelValidation onSubmit={logger} />}
              title="Field level validation."
            />
          </Wrapper>
          <Wrapper title="Async change validation.(fails on multiple fields validation)">
            <Page>
              {submit => (<AsyncChangeValidation onSubmit={submit} />)}
            </Page>
            <hr />
            <ShowCase
              codeListining={<CodeListening codeListening={AsyncChangeValidationListing} />}
              component={<AsyncChangeValidation onSubmit={logger} />}
              title="Async change validation.(fails on multiple fields validation)"
            />
          </Wrapper>
        </div>
      </div>
    </div>
  )
}

export default App
