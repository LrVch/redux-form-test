import React from 'react'
import SyncValidationForm from '../../components/SyncValidationForm/SyncValidationForm'

const SyncValidationPage  = () => {
  const submit = values => {
    console.log(values)
  }
    return <SyncValidationForm onSubmit={submit} />
}

export default SyncValidationPage