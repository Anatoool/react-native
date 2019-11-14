import React from 'react';
import PropTypes from 'prop-types';
import {
  SafeAreaView,
  View,
  Text,
  StyleSheet,
  TouchableHighlight,
} from 'react-native';
import {TripModal} from './TripModal';
import ArrowDownIcon from '../../../assets/images/icons/arrow-down.svg';
import {STYLES_CONSTANTS} from '../../../constants/styles';

export class Header extends React.PureComponent {
  static propTypes = {
    trip: PropTypes.object,
  };

  state = {
    modalVisible: false,
  };

  setModalVisible = visible => {
    this.setState({modalVisible: visible});
  };

  render() {
    const {trip = {}} = this.props;
    const {title = ''} = trip;

    return (
      <SafeAreaView>
        <TripModal
          trip={trip}
          modalVisible={this.state.modalVisible}
          setModalVisible={this.setModalVisible}
        />
        <View style={styles.container}>
          <TouchableHighlight
            onPress={() => {
              this.setModalVisible(true);
            }}
            underlayColor="transparent"
            style={styles.button}>
            <>
              <Text style={styles.text}>{title}</Text>
              <ArrowDownIcon width={12} height={12} fill="white" />
            </>
          </TouchableHighlight>
        </View>
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    height: 60,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: STYLES_CONSTANTS.mainBlueBackground,
  },
  button: {
    paddingHorizontal: 10,
    height: 36,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    color: '#FFF',
    marginRight: 10,
    fontSize: 15,
    fontWeight: 'bold',
  },
});
