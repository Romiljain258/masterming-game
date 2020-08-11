import React from 'react';
import { BrowserRouter as Router, Route,Switch} from "react-router-dom";
import ChoiceCard from "./ChoiceCard";
import MainCard from "./MainCard";
import Register from "./Register";
import Login from "./Login";
function Frontpage() {
  return (
    <Router>
    <Switch>
      <Route path='/' exact component={ChoiceCard}/>
      <Route path='/main' exact component={MainCard}/>
      <Route path='/register' component={Register}/>
      <Route path='/login' exact component={Login}/>
      </Switch>
    </Router>
  );
};

export default Frontpage;
