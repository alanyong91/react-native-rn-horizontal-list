import React from 'react';
import { StyleSheet, View, Text } from 'react-native';

const styles = StyleSheet.create({
  view: {
    marginBottom: 10,
  },
  text: {
    fontSize: 24,
    fontWeight: '600',
  },
});

interface ITitleProps {
  title: string;
}

export default ({ title }: ITitleProps) => (
  <View style={styles.view}>
    <Text style={styles.text}>{title}</Text>
  </View>
);
