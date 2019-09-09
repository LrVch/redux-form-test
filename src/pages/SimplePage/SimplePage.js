import React from 'react'
import SimpleForm from '../../components/SimpleForm/SimpleForm'

const SimplePage  = () => {
  const submit = values => {
    console.log(values)
  }
    return <SimpleForm onSubmit={submit} />
}

export default SimplePage