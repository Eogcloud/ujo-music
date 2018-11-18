import React, { Component } from 'react';
import Dashboard from './../dashboard/Dashboard';

const Main = () => {
   constructor() {
      super();
      this.state = {
         "loading": true,
         "config": config,
         "animateInfoSection": false,
         "current": -1
      }
      setTimeout(() => {
         this.setState({ "loading": false });
      }, 750);
      setTimeout(() => {
         this.init(this.state.config);
      }, 500);
   }
   this.state = {
      "loading": true,
      "config": config,
      "animateInfoSection": false,
      "current": -1
   }
   return (
     <Switch>
       <Route exact path="/" component={Dashboard} />
       <Route
         path="/"
         render={state => <Dashboard {...state} />}
       />
     </Switch>
   );
 };

 export default (Main);