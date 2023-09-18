import React from "react";
import Home from "./Home";
import New from "./New";
import Woman from "./Woman";
import Men from "./Men";
import Form from "./Form";
import Hooks from "./Hooks";


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
   <Route component={Home}/>
     </Switch>
  </>
  );
}

export default App;
