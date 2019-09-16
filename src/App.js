import React from 'react'
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
import { listing as MemberListing } from './components/FieldArraysForm/Member/Member'
import { listing as RenderHobbiesListing } from './components/FieldArraysForm/RenderHobbies/RenderHobbies'
import RequiredButton from './components/shared/RequiredButton/RequiredButton'

function App() {
  return (
    <div className="container-fluid">
      <div className="row">

        {/* first */}
        <div className="col-sm">
          <Wrapper title="Simple from without validation.">
            <ShowCase
              codeListining={<CodeListening codeListening={SimpleFormListing} />}
              component={<SimpleForm onSubmit={logger} />}
              title="Simple from without validation."
            />
          </Wrapper>

          <Wrapper title="Initialize from state.">
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
            <ShowCase
              codeListining={<CodeListening codeListening={SyncValidationFormListing} />}
              component={<SyncValidationForm onSubmit={logger} />}
              title="Simple sync validation."
            />
          </Wrapper>

          <Wrapper title="Mixed sync validation.(field level and validation fn)">
            <ShowCase
              codeListining={<CodeListening codeListening={MixedSyncValidationListing} />}
              component={<MixedSyncValidation onSubmit={logger} />}
              title="Mixed sync validation.(field level and validation fn)"
            />
          </Wrapper>

          <Wrapper title="Selecting form values, conditional validation with yup and context">
            <ShowCase
              codeListining={<CodeListening codeListening={SelectingFormValuesListing} />}
              component={<SelectingFormValues onSubmit={logger} />}
              title="Selecting form values, conditional validation with yup and context"
            >
              <RequiredButton />
            </ShowCase>
          </Wrapper>
        </div>

        {/* third */}
        <div className="col-sm">
          <Wrapper title="Simple sync validation with yup.">
            <ShowCase
              codeListining={<CodeListening codeListening={SyncValidationFormYupListing} />}
              component={<SyncValidationFormYup onSubmit={logger} />}
              title="Simple sync validation with yup."
            />
          </Wrapper>

          <Wrapper title="Async blur validation.(fails on multiple fields validation)">
            <ShowCase
              codeListining={<CodeListening codeListening={AsyncBlurValidationListing} />}
              component={<AsyncBlurValidation onSubmit={logger} />}
              title="Async blur validation.(fails on multiple fields validation)"
            />
          </Wrapper>

          <Wrapper title="Field arrays form(moving and DnD)">
            <ShowCase
              codeListining={<CodeListening codeListening={[
                { title: 'Main', code: FieldArraysFormListing },
                { title: 'Member', code: MemberListing },
                { title: 'Hobbies', code: RenderHobbiesListing }
              ]} />}
              component={<FieldArraysForm onSubmit={logger} />}
              title="Field arrays form(moving and DnD)"
            />
          </Wrapper>
        </div>

        {/* fourth */}
        <div className="col-sm">
          <Wrapper title="Field level validation.">
            <ShowCase
              codeListining={<CodeListening codeListening={FieldLevelValidationListing} />}
              component={<FieldLevelValidation onSubmit={logger} />}
              title="Field level validation."
            />
          </Wrapper>
          <Wrapper title="Async change validation.(fails on multiple fields validation)">
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
