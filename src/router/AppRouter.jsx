import {
    BrowserRouter as Router,
    Switch,
    Route,
  } from "react-router-dom";
import { Login } from "../pages/Login";
import { DashboardRoute } from "./DashboardRoute";


  const AppRouter = () => {
    return (
      <Router>
        <Switch>
          <Route exact path="/login" component={Login}/>
          <Route  path="/" component={DashboardRoute}/>
        </Switch>
      </Router>
    )
  }
   
  export default AppRouter;