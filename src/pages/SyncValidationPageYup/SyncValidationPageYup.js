import React from 'react'
import SyncValidationFormYup from '../../components/SyncValidationFormYup/SyncValidationFormYup'

const SyncValidationPageYup  = () => {
  const submit = values => {
    console.log(values)
  }
    return <SyncValidationFormYup onSubmit={submit} />
}

export default SyncValidationPageYup