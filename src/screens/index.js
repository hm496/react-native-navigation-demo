const React = require('react');
const { Navigation } = require('react-native-navigation');
const Screens = require('./Screens');

function registerScreens() {
  Navigation.registerComponent(Screens.Layouts, () => require('./LayoutsScreen'));
}

module.exports = {
  registerScreens
};
