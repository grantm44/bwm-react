import React, { Component } from 'react';
import {BrowserRouter, Route, Redirect} from 'react-router-dom';
import * as redux from 'redux';
import {Provider} from 'react-redux';

import logo from './logo.svg';
import './App.css';
import {Header} from './shared/Header';
import RentalList from 'components/rental/rental-listing/RentalList';
import RentalDetail from 'components/rental/rental-detail/RentalDetail';


const store = require('./reducers').init();

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <BrowserRouter>
        <div className="App">
          <Header />
          <div className='container'>
            <Route exact path='/' render={()=> <Redirect to='/rentals' /> } />
            <Route exact path="/rentals" component={RentalList}/>
            <Route exact path="/rentals/:id" component={RentalDetail}/>
          </div>
        </div>
        </BrowserRouter>
      </Provider>
    );
  }
}

export default App;
