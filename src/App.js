import "./App.css";
import SignIn from "./components/auth/SignIn";

import AuthDetails from "./components/AuthDetails";
import LoggedIn from "./components/logged";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  useHistory,
} from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/logged">
            <LoggedIn />
          </Route>

          <Route path="signin">
            <SignIn />
          </Route>

          <Route path="/details">
            <AuthDetails />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
