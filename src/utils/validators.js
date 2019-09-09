export const asyncValidator = schema => async formValues => {
  try {
    await schema.validateSync(formValues, { abortEarly: false })

    return Promise.resolve({})
  } catch (errors) {
    const resultErrors = errors.inner.reduce(
      (errors, err) => ({
        ...errors,
        [err.path]: err.message
      }), {})

    return Promise.reject(resultErrors)
  }
}

export const syncValidator = schema => formValues => {
  try {
    schema.validateSync(formValues, { abortEarly: false })

    return {}
  } catch (errors) {
    const resultErrors = errors.inner.reduce(
      (errors, err) => ({
        ...errors,
        [err.path]: err.message
      }), {})

    return resultErrors
  }
}