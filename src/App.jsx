import React from "react";
import Home from "./Home";
import New from "./New";
import Woman from "./Woman";
import Men from "./Men";
import Form from "./Form";
import Hooks from "./Hooks";
import Test from "./Test";
import Test2 from "./Test2";

import {Route,Switch} from "react-router-dom"
function App() {
  return (
  <>
  <Switch>
   <Route exact path="/" component={Home}/>     
   <Route exact path="/new" component={New}/>
   <Route exact path="/woman" component={Woman}/> 
   <Route exact path="/men" component={Men}/> 
   <Route exact path="/form" component={Form}/>
   <Route exact path="/hooks" component={Hooks}/>
     </Switch>
  </>
  );
}

export default App;
