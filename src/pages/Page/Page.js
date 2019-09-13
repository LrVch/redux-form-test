import { logger } from '../../utils'

const Page  = ({children}) => {
  const submit = values => {
    logger(values)
  }
    return children(submit)
}

export default Page