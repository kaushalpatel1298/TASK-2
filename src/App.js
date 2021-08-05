import Signup from "./Registration/Signup";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import ExistingUser from "./Registration/ExistingUser";


function App() {
  return (
      <>
      <Router>
        <Switch>
        <Route exact path="/allusers" component={ExistingUser} />
        <Route exact path="/" component={Signup} />
        </Switch>
      </Router>
      </>
    );
}

export default App;

