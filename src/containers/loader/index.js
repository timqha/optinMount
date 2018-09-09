/**
 * @flow
 */

import React, { PureComponent } from 'react';
import {
  View,
  Easing,
  Animated,
  Dimensions
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

import styles from './styles';

const { height } = Dimensions.get('window');


type _t_props = {
  navigation: Object
};
export default class Loader extends PureComponent<_t_props> {

  spinValue = new Animated.Value(500);

  count: number = 1;

  componentDidMount() {
    this.animationDown();
  }

  animationDown() {
    Animated.timing(
      this.spinValue,
      {
        toValue: 0,
        duration: 1000,
        easing: Easing.bounce
      }
    ).start(() => this.animationUp());
  }

  animationUp() {
    // after play some animation go to next screen.
    if (this.count < 3) {
      this.count++;
      Animated.timing(
        this.spinValue,
        {
          toValue: height / 2,
          duration: 300,
          // $FlowFixMe
          easing: Easing.in
        }
      ).start(() => this.animationDown());
    } else {
      const { navigation } = this.props;
      navigation.navigate({
        routeName: 'Welcome'
      });
      // alert('goTO');
    }

  }


  render() {
    return (
      <View style={styles.container}>
        <View style={styles.line} />
        <Animated.View style={{ marginBottom: this.spinValue }}>
          {/* TODO: Move to config if use this in real word project. */}
          <Icon name="optin-monster" size={60} color="#0c0c0c" />
        </Animated.View>
      </View>
    );
  }
}
