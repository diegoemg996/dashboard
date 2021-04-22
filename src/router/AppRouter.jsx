import {
    BrowserRouter as Router,
    Switch,
    Route,
  } from "react-router-dom";
import { Login } from "../pages/Login";
import { Signin } from "../pages/Signin";
import { DashboardRoute } from "./DashboardRoute";


  const AppRouter = () => {
    return (
      <Router>
        <Switch>
          <Route exact path="/login" component={Login}/>
          <Route exact path="/signin" component={Signin}/>
          <Route  path="/" component={DashboardRoute}/>
        </Switch>
      </Router>
    )
  }
   
  export default AppRouter;