import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Form from "./components/form/Form";
import Login from "./components/login/login";
import "./App.css";

function App() {
  return (
    <>
      <Router>
        <Switch>
          <Route path="/signup">
            <Form />
          </Route>
          <Route path="/login">
            <Login />
          </Route>
        </Switch>
      </Router>
    </>
  );
}

export default App;
