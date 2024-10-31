import { useLocation } from 'react-router-dom'

const ErrorPage = () => {
  const location = useLocation()

  return (
    <>
      Path not found { location.pathname }
    </>
  )
}

export default ErrorPage
