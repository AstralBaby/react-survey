import logo from './logo.svg';
import './App.css';
import Survey from './survey'
import Provider from './Provider'

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";


function App() {
  return (
    <Provider>
      <div className="App">
        <Router>
          <Switch>
            <Route path='/survey/1'>
              <Survey.Address></Survey.Address>
            </Route>
            <Route path='/survey/2'>
              <Survey.Review></Survey.Review>
            </Route>
            <Route path='/survey/completed'>
              <Survey.Completed></Survey.Completed>
            </Route>
            <Route path='/'>
              <Survey.PersonalInformation/>
            </Route>
          </Switch>
        </Router>
      </div>
    </Provider>
  );
}

export default App;
