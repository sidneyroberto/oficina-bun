import { useRoutes } from 'react-router-dom'
import { routes } from './routes'

const App = () => {
  const elements = useRoutes(routes)

  return <>{elements}</>
}

export default App