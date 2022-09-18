import './App.scss'
import { Link } from 'react-router-dom'
import RouterCollection from 'src/router/RouterCollection'
import Zustand from 'src/components/StateManagement/Zustand'
import Zustand2 from 'src/components/StateManagement/Zustand2'
import MobxReact from 'src/components/StateManagement/MobxReact'
import MobxReact2 from 'src/components/StateManagement/MobxReact2'
import Redux from 'src/components/StateManagement/Redux'

function App () {
  return (
    <div className="App">
      <Zustand></Zustand>
      <Zustand2></Zustand2>
      <MobxReact></MobxReact>
      <MobxReact2></MobxReact2>
      <Redux></Redux>
      <div className="Layout">
        <div className="NavBar">
          <Link className="NavBarItem" to="/home">home</Link>
          <Link className="NavBarItem" to="/mine">mine</Link>
          <Link className="NavBarItem" to="/about">about</Link>
        </div>
        <h2 style={{ textAlign: 'center' }}>Welcome to React Router!</h2>
        <div className="NavBar">
          <Link className="NavBarItem" to="/home">home</Link>
          <Link className="NavBarItem" to="/mine">mine</Link>
          <Link className="NavBarItem" to="/about">about</Link>
        </div>
        <RouterCollection />
      </div>
    </div>
  )
}

export default App
