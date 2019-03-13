// @ts-check
const { Navigation } = require('react-native-navigation');
const { registerScreens } = require('./screens');
const { Platform } = require('react-native');
const { setDefaultOptions } = require('./commons/Options')
const testIDs = require('./testIDs');
const Screens = require('./screens/Screens');

if (Platform.OS === 'android') {
  alert = (title) => {
    Navigation.showOverlay({
      component: {
        name: Screens.Alert,
        passProps: {
          title
        },
        options: {
          layout: {
            componentBackgroundColor: 'transparent'
          },
          overlay: {
            interceptTouchOutside: true
          }
        }
      }
    });
  };
}

function start() {
  registerScreens();
  Navigation.events().registerAppLaunchedListener(async () => {
    setDefaultOptions();

    Navigation.setRoot({
      root: {
        bottomTabs: {
          children: [
            {
              stack: {
                children: [
                  {
                    component: {
                      name: 'Layouts'
                    }
                  }
                ],
                options: {
                  bottomTab: {
                    text: 'Layouts',
                    iconColor: "#e8e4e6",
                    selectedIconColor: "#ff60c8",
                    icon: require('../img/layouts.png'),
                    testID: testIDs.LAYOUTS_TAB
                  }
                }
              }
            },
          ]
        }
      }
    });
  });
}

module.exports = {
  start
};
