import React from 'react';
import './css/normalize.css';
import './css/skeleton.css';
import './css/style.css';
import 'font-awesome/css/font-awesome.min.css';
import {Route, Switch} from "react-router"
import NewScrawly from "./containers/NewScrawly";
import Index from "./containers/Index";
import Scrawly from "./containers/Scrawly";
import ScrawlyEdit from "./containers/ScrawlyEdit";



function App() {
  return (
    <div className="App">
      <Switch>
        <Route path="/" exact component={Index}/>
        <Route path="/scrawly/edit" exact component={ScrawlyEdit}/>
        <Route path="/scrawly/new" exact component={NewScrawly}/>
        <Route path="/scrawly/:slug" component={Scrawly}/>

      </Switch>
    </div>
  );
}

export default App;
