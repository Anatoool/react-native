import React from 'react';
import {createBottomTabNavigator} from 'react-navigation-tabs';
import {TripScreen} from './screens/TripScreen';
import {GuideScreen} from './screens/GuideScreen';
import {DocsScreen} from './screens/DocsScreen';
import {MoreScreen} from './screens/MoreScreen';
import ClockIcon from './assets/images/icons/clock.svg';
import MegaphoneIcon from './assets/images/icons/megaphone.svg';
import DocIcon from './assets/images/icons/doc.svg';
import MoreIcon from './assets/images/icons/more.svg';
import {STYLES_CONSTANTS} from './constants/styles';

const ROUTE_NAMES = {
  TRIP: 'Trip',
  GUIDE: 'Guide',
  DOCS: 'Docs',
  MORE: 'More',
};

const activeTintColor = STYLES_CONSTANTS.mainBlueText;
const inactiveTintColor = STYLES_CONSTANTS.mainGrayText;

export const TabNavigator = createBottomTabNavigator(
  {
    [ROUTE_NAMES.TRIP]: {screen: TripScreen},
    [ROUTE_NAMES.GUIDE]: {screen: GuideScreen},
    [ROUTE_NAMES.DOCS]: {screen: DocsScreen},
    [ROUTE_NAMES.MORE]: {screen: MoreScreen},
  },
  {
    defaultNavigationOptions: ({navigation}) => {
      const {routeName} = navigation.state;
      let IconComponent;
      switch (routeName) {
        case ROUTE_NAMES.TRIP:
          IconComponent = ClockIcon;
          break;
        case ROUTE_NAMES.GUIDE:
          IconComponent = MegaphoneIcon;
          break;
        case ROUTE_NAMES.DOCS:
          IconComponent = DocIcon;
          break;
        case ROUTE_NAMES.MORE:
          IconComponent = MoreIcon;
          break;
        default:
          IconComponent = null;
      }
      return {
        tabBarIcon: ({focused, horizontal, tintColor}) => {
          return <IconComponent height={20} fill={tintColor} />;
        },
      };
    },
    tabBarOptions: {
      activeTintColor,
      inactiveTintColor,
      style: {
        borderTopWidth: 0,
        shadowColor: '#000',
        shadowOffset: {
          width: 0,
          height: 6,
        },
        shadowOpacity: 0.43,
        shadowRadius: 8,
        elevation: 1,
      },
      tabStyle: {
        flex: 1,
        justifyContent: 'space-between',
      },
      labelStyle: {
        marginTop: -2,
        paddingBottom: 2,
      },
    },
  },
);
