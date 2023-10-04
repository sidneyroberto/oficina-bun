import { RouteObject } from 'react-router-dom'
import Home from './pages/Home'
import About from './About'

export const routes: RouteObject[] = [
  {
    path: '/',
    element: <Home />
  }, {
    path: '/about',
    element: <About />
  }
]