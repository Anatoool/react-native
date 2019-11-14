import React from 'react';
import {Text} from 'react-native';
import {Header} from './Header';

export class TripScreen extends React.Component {
  static navigationOptions = {
    title: 'My trip',
  };

  render() {
    const trip = {
      title: 'Go Island Hopping Bulandet',
    };

    return (
      <>
        <Header trip={trip} />
        <Text style={{padding: 20}}>Content</Text>
      </>
    );
  }
}
