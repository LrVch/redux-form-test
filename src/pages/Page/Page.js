const Page  = ({children}) => {
  const submit = values => {
    console.log('='.repeat(20))
    console.log(values)
    console.log('='.repeat(20))
  }
    return children(submit)
}

export default Page