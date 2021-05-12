
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom'
import Header from "./Header/Header"
import ListaTareas from './ListaTareas/ListaTareas'
import Login from './Login/Login'

export default function TareasRoutes() {
  return (
    <Router>
      <div>
        <Header />
        <Switch>
        <Route exact path="/login" component={Login} />
          <Route exact path="/tareas" component={ListaTareas} />
          <Redirect to='/login' />
        </Switch>
      </div>
    </Router>

  )
}