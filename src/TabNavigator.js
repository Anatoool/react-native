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

const ROUTE_NAMES = {
  TRIP: 'Trip',
  GUIDE: 'Guide',
  DOCS: 'Docs',
  MORE: 'More',
};

const activeTintColor = 'rgb(10, 68, 245)';
const inactiveTintColor = 'gray';

export const TabNavigator = createBottomTabNavigator(
  {
    [ROUTE_NAMES.TRIP]: {screen: TripScreen},
    [ROUTE_NAMES.GUIDE]: {screen: GuideScreen},
    [ROUTE_NAMES.DOCS]: {screen: DocsScreen},
    [ROUTE_NAMES.MORE]: {screen: MoreScreen},
  },
  {
    defaultNavigationOptions: ({navigation}) => ({
      tabBarIcon: ({focused, horizontal, tintColor}) => {
        const {routeName} = navigation.state;
        switch (routeName) {
          case ROUTE_NAMES.TRIP:
            return <ClockIcon height={20} fill={tintColor} />;
          case ROUTE_NAMES.GUIDE:
            return <MegaphoneIcon height={20} fill={tintColor} />;
          case ROUTE_NAMES.DOCS:
            return <DocIcon height={20} fill={tintColor} />;
          case ROUTE_NAMES.MORE:
            return <MoreIcon height={20} fill={tintColor} />;
          default:
            return null;
        }
      },
    }),
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
        marginTop: -5,
        paddingBottom: 3,
      },
    },
  },
);
