import './App.scss'
import { Link } from 'react-router-dom'
import RouterCollection from 'src/router/RouterCollection'

function App () {
  return (
    <div className="App">
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
