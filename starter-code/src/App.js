import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import NavBar from './components/NavBar';
import { Switch, Route,  Link } from 'react-router-dom';
import countries from './countries.json'
import SideBar from './components/SideBar';
import CountryDetail from './components/CountryDetail';


function App() {
  const styleToApply = {
    maxHeight: '90vh',
    overflow: 'scroll'
  }
  return (
    <div className="App">
      <NavBar />
      <div className="container">
        <div className="row">
          <div className="col-5" style={styleToApply}>
            <SideBar countries={countries}/>
          </div>
          <div className="col-7">
            <Switch>
              <Route exact render={(props) => <CountryDetail {...props} countries={countries}/>} />
            </Switch>
          </div>
        </div>
      </div>

    </div>
  );
}

export default App;
