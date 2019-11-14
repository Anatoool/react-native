import React from 'react';
import PropTypes from 'prop-types';
import {
  Modal,
  Alert,
  Text,
  StyleSheet,
  TouchableOpacity,
  TouchableHighlight,
  View,
} from 'react-native';
import CrossIcon from '../../../../assets/images/icons/cross.svg';
import TimerIcon from '../../../../assets/images/icons/timer.svg';
import LevelEasyIcon from '../../../../assets/images/icons/level-easy.svg';
import {STYLES_CONSTANTS} from '../../../../constants/styles';

const buttonPaddingHorizontal = 25;
const buttonPaddingVertical = 20;

export class TripModal extends React.PureComponent {
  static propTypes = {
    trip: PropTypes.object,
    modalVisible: PropTypes.bool,
    setModalVisible: PropTypes.func,
  };

  render() {
    const {trip = {}, modalVisible, setModalVisible} = this.props;
    const {title = ''} = trip;

    return (
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          Alert.alert('Modal has been closed.');
        }}>
        <TouchableOpacity
          style={styles.backdrop}
          activeOpacity={1}
          onPress={() => setModalVisible(false)}>
          <TouchableOpacity activeOpacity={2} style={styles.content}>
            <View style={styles.crossContainer}>
              <TouchableOpacity
                style={{...styles.crossButton, ...styles.paddingHorizontal}}
                onPress={() => setModalVisible(false)}>
                <CrossIcon width={10} height={10} />
              </TouchableOpacity>
            </View>

            <Text style={{...styles.tripTitle, ...styles.paddingHorizontal}}>
              {title}
            </Text>

            <View style={{...styles.tripInfoContainer}}>
              <View style={{...styles.paddingHorizontal, ...styles.tripInfo}}>
                <TimerIcon
                  width={13}
                  height={13}
                  fill={STYLES_CONSTANTS.mainGrayText}
                />
                <Text style={styles.tripInfoText}>12h</Text>
              </View>
              <View style={{...styles.paddingHorizontal, ...styles.tripInfo}}>
                <LevelEasyIcon
                  width={12}
                  height={12}
                  fill={STYLES_CONSTANTS.mainGrayText}
                />
                <Text style={styles.tripInfoText}>Easy</Text>
              </View>
            </View>

            <TouchableHighlight
              underlayColor={STYLES_CONSTANTS.touchableHighlightColor}
              onPress={() => {}}>
              <View
                style={{
                  ...styles.paddingHorizontal,
                  ...styles.button,
                }}>
                <Text
                  style={{
                    color: STYLES_CONSTANTS.mainBlueText,
                  }}>
                  Go Kjerag
                </Text>
              </View>
            </TouchableHighlight>

            <TouchableHighlight
              underlayColor={STYLES_CONSTANTS.touchableHighlightColor}
              onPress={() => {}}>
              <View
                style={{
                  ...styles.paddingHorizontal,
                  ...styles.button,
                }}>
                <Text style={styles.lightRedText}>Add a trip</Text>
                <Text style={styles.lightRedText}>+</Text>
              </View>
            </TouchableHighlight>
          </TouchableOpacity>
        </TouchableOpacity>
      </Modal>
    );
  }
}

const styles = StyleSheet.create({
  backdrop: {
    backgroundColor: 'rgba(0,0,0,0.5)',
    flex: 1,
    justifyContent: 'flex-end',
  },
  content: {
    backgroundColor: '#FFF',
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    overflow: 'hidden',
  },
  crossContainer: {
    alignItems: 'flex-end',
  },
  paddingHorizontal: {
    paddingHorizontal: buttonPaddingHorizontal,
  },
  crossButton: {
    paddingTop: 20,
    paddingBottom: 5,
  },
  tripTitle: {
    color: STYLES_CONSTANTS.mainGrayText,
    fontWeight: 'bold',
    marginBottom: 12,
    fontSize: 16,
  },
  tripInfoContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  tripInfo: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingBottom: 20,
  },
  tripInfoText: {
    color: STYLES_CONSTANTS.mainGrayText,
    marginLeft: 4,
    fontWeight: '600',
  },
  button: {
    paddingVertical: buttonPaddingVertical,
    borderTopColor: STYLES_CONSTANTS.grayLight,
    borderTopWidth: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  lightRedText: {
    color: STYLES_CONSTANTS.lightRed,
  },
});
