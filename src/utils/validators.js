import { sleep } from './common'

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

export const required = (message = 'Required') => value =>
  value ? undefined : message

// eslint-disable-next-line no-template-curly-in-string
export const maxLength = (max, message = 'Must be ${max} characters or less') =>
  (value) => {
    // eslint-disable-next-line no-template-curly-in-string
    const regexMax = new RegExp('\\${max}', 'gi')
    // eslint-disable-next-line no-template-curly-in-string
    const regexValue = new RegExp('\\${value}', 'gi')
    // eslint-disable-next-line no-template-curly-in-string
    const regexLength = new RegExp('\\${length}', 'gi')

    return value && value.length > max ? message
      .replace(regexMax, max)
      .replace(regexValue, value)
      .replace(regexLength, value.length) : undefined
  }

// eslint-disable-next-line no-template-curly-in-string
export const minLength = (min, message = 'Must be ${min} characters or more') =>
  (value = '') => {
    // eslint-disable-next-line no-template-curly-in-string
    const regexMin = new RegExp('\\${min}', 'gi')
    // eslint-disable-next-line no-template-curly-in-string
    const regexValue = new RegExp('\\${value}', 'gi')
    // eslint-disable-next-line no-template-curly-in-string
    const regexLength = new RegExp('\\${length}', 'gi')

    return value.length < min ? message
      .replace(regexMin, min)
      .replace(regexValue, value)
      .replace(regexLength, value.length) : undefined
  }

export const number = (message = 'Must be a number') => value => {
  // eslint-disable-next-line no-template-curly-in-string
  const regexValue = new RegExp('\\${value}', 'gi')
  return value && isNaN(Number(value)) ? message.replace(regexValue, value) : undefined
}


// eslint-disable-next-line no-template-curly-in-string
export const minValue = (min, message = 'Must be at least ${min}') => value => {
  // eslint-disable-next-line no-template-curly-in-string
  const regexMin = new RegExp('\\${min}', 'gi')
  // eslint-disable-next-line no-template-curly-in-string
  const regexValue = new RegExp('\\${value}', 'gi')

  return value && value < min ? message
    .replace(regexMin, min)
    .replace(regexValue, value) : undefined

}

export const email = (message = 'Invalid email address') => value =>
  value && !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value)
    ? message
    : undefined

export const tooYoung = (age = 0, message = 'You do not meet the minimum age requirement!') =>
  value => {
    // eslint-disable-next-line no-template-curly-in-string
    const regexAge = new RegExp('\\${age}', 'gi')
    return value && value < age
      ? message.replace(regexAge, age)
      : undefined
  }

export const aol = (message = 'Really? You still use AOL for your email?') => value =>
  value && /.+@aol\.com/.test(value)
    ? message
    : undefined

export const alphaNumeric = (message = 'Only alphanumeric characters') =>
  value => value && /[^a-zA-Z0-9 ]/i.test(value)
    ? message
    : undefined

export const russianPhoneNumberPattern = (
  pattern = '+7 (XXX) XXX-XX-XX',
  // eslint-disable-next-line no-template-curly-in-string
  message = 'Invalid phone number, a format of a phone number must be ${pattern} '
) =>
  (value) => {
    // eslint-disable-next-line no-template-curly-in-string
    const regexLength = new RegExp('\\${pattern}', 'gi')
    return value && !/^(\+7 \([0-9]{3}\)\s[0-9]{3}-[0-9]{2}-[0-9]{2})$/i.test(value)
      ? message.replace(regexLength, pattern)
      : undefined
  }


const checkUserName = (username, props) => {
  if (['john', 'paul', 'george', 'ringo'].includes(username)) {
    // eslint-disable-next-line no-throw-literal
    throw {...props.asyncErrors, username: 'That username is taken' }
  }
}

const checkUserEmail = (email, props) => {
  if (['john@mail.com', 'paul@mail.com', 'george@mail.com', 'ringo@mail.com']
    .includes(email)) {
    // eslint-disable-next-line no-throw-literal
    throw {...props.asyncErrors, email: 'That email is already taken' }
  }
}

const checkUserAge = (age, props) => {
  if (age < 16) {
    // eslint-disable-next-line no-throw-literal
    throw {...props.asyncErrors, age: 'You are too young :(' }
  }
}


export const asyncValidate = (values, dispatch, props, blurredField) => {
  console.log(props)
  return sleep(1000).then(() => {
    if (blurredField === 'username') {
      checkUserName(values.username, props)
    }

    if (blurredField === 'email') {
      checkUserEmail(values.email, props)
    }

    if (blurredField === 'age') {
      checkUserAge(values.age, props)
    }
  })
}


