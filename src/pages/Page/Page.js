const Page  = ({children}) => {
  const submit = values => {
    console.log('='.repeat(20))
    console.log(JSON.stringify(values, null, 4))
    console.log('='.repeat(20))
  }
    return children(submit)
}

export default Page