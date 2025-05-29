
import RegisterForm from './RegisterForm.jsx'
import Login  from './Login.jsx'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

function App() {

  return (
    <>
      <Router>

          <Switch>

            <Route exact path="/">
              <Login />
            </Route>
            

            <Route path="/register">
              <RegisterForm />
            </Route>

          </Switch>

      </Router>
    </>
  )
}

export default App
