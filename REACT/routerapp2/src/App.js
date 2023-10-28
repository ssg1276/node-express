import { NavLink, Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './components/Home'
import Support from './components/Support'
import About from './components/About'
import Labs from './components/Labs'
import NotFound from './components/NotFound'
import MainHeader from './components/MainHeader'

function App() {
  return <div className="App">
    <div>
      <ul>
        <li>
          <NavLink to='/'>Home</NavLink>
        </li>
        <li>
          <NavLink to='/support'>Support</NavLink>
        </li>
        <li>
          <NavLink to='/about'>About</NavLink>
        </li>
        <li>
          <NavLink to='/labs'>Labs</NavLink>
        </li>
        <li>
          <NavLink to='/*'>NotFound</NavLink>
        </li>

      </ul>
    </div>
    <Routes>
      <Route path='/' element={<MainHeader />} >
        <Route index element={<Home></Home>} />
        <Route path='/support' element={<Support></Support>} />
        <Route path='/about' element={<About></About>} />
        <Route path='/labs' element={<Labs></Labs>} />
        <Route path='/*' element={<NotFound></NotFound>} />
      </Route>
    </Routes>
  </div >
}

export default App
