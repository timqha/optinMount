/**
 * @flow
 */

import React from 'react';
import {
  StyleSheet,
  View,

} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

import Navigator from './navigator';

export default () => (
  <View style={styles.container}>
    <Navigator />
  </View>
);
