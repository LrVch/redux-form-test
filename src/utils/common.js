export const sleep = ms => new Promise(resolve => setTimeout(resolve, ms))

export const logger = value => {
  console.log('='.repeat(20))
  console.log(JSON.stringify(value, null, 4))
  console.log('='.repeat(20))
}