import React from 'react';
import './App.css';
import {Route, Switch} from "react-router-dom"
import Scrawly from "./components/Scrawly";
import Index from "./components/Index";
import NewScrawly from "./components/NewScrawly";


function App() {
  return (
    <div className="App">
      <Switch>
          <Route path="/" exact component={Index}/>
          <Route path="/scrawly/:id" render={()=><Scrawly/>}/>}
          <Route path="/scrawly/new" component = {NewScrawly}/>

          />
      </Switch>
    </div>
  );
}

export default App;
