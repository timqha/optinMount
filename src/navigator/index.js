// @flow


/* REACT */
import React, { Component } from 'react';

/* MODULES */
import { createStackNavigator } from 'react-navigation';
import { fromTop } from 'react-navigation-transitions';

/* CUSTOM MODULES */
import Loader from '../containers/loader';
import Welcome from '../containers/welcome';

/* TYPES */
type _t_props = {};


const routeConfig = {
  Loader: { screen: Loader, },
  Welcome: { screen: Welcome },
};


export const setNavigatorConfig = () => ({
  initialRouteName: "Loader",
  navigationOptions: () => ({
    header: null
  }),
  cardStyle: { backgroundColor: '#F5FCFF' },
  transitionConfig: () => fromTop(500),

});


export default class Navigator extends Component<_t_props> {

  initRouter = () => createStackNavigator(routeConfig, setNavigatorConfig())

  render() {
    const Router = this.initRouter();

    return <Router screenProps={{}} />;
  }
}
