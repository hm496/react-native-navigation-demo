const React = require('react');
const Root = require('../components/Root');
const Button = require('../components/Button')
const {
  WELCOME_SCREEN_HEADER,
  STACK_BTN,
  BOTTOM_TABS_BTN,
  BOTTOM_TABS,
  SIDE_MENU_BTN
} = require('../testIDs');
const Screens = require('./Screens');
const Navigation = require('../services/Navigation');
const {stack, component} = require('../commons/Layouts');

class LayoutsScreen extends React.Component {
  static options() {
    return {
      topBar: {
        testID: WELCOME_SCREEN_HEADER,
        title: {
          text: 'React Native Navigation'
        }
      }
    };
  }

  render() {
    return (
      <Root componentId={this.props.componentId}>
        <Button label='Button' testID={SIDE_MENU_BTN} onPress={this.clickFn}/>
      </Root>
    );
  }

  clickFn () {
  }
}

module.exports = LayoutsScreen;
