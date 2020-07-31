import * as React from 'react';
import { StyleSheet, View } from 'react-native';
import RnHorizontalList from 'react-native-rn-horizontal-list';

export default function App() {
  return (
    <View style={styles.container}>
      <RnHorizontalList />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
