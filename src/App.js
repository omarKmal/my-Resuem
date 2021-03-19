import { Route, Switch } from "react-router";
import Home from "./containers/Home";

function App() {
  return (
    <Switch>
      <Route path="/home" component={Home} />
    </Switch>
  );
}

export default App;
