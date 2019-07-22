import React from 'react';
import './css/normalize.css'
import './css/skeleton.css'
import './css/style.css'
import {Route, Switch} from "react-router"
import NewScrawly from "./containers/NewScrawly";
import Index from "./containers/Index";
import Scrawly from "./containers/Scrawly";



function App() {
  return (
    <div className="App">
      <Switch>
        <Route path="/" exact component={Index}/>
        <Route path="/scrawly/new" component = {NewScrawly}/>
        <Route path="/scrawly/:id"
               render={scawlyProps=><Scrawly {...scawlyProps}/>}
        />
      </Switch>
    </div>
  );
}

export default App;
