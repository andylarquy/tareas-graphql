import logo from './logo.svg'
import './Header.css'

export default function Header() {
  return (
    <header className="Header-bar">
      <img src={logo} className="App-logo" alt="logo" />
      <h1 className="Header-title">Tareas</h1>
    </header>
  )
}
