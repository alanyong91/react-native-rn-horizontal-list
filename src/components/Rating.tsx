import React from 'react'
import {StyleSheet, Image, View} from 'react-native';

const styles = StyleSheet.create({
  ratingView: {
    display: 'flex',
    flexDirection: 'row',
    marginBottom: 10,
  },
  ratingIcon: {
    marginRight: 5,
  },
});

interface IRatingProps {
  rating: number;
}

export default ({rating}: IRatingProps) => {
  let full, half, none;
  if (rating) {
    full = Math.floor(rating);
    half = rating - Math.floor(rating) === 0.5 ? 1 : 0;
    none = Math.floor(5 - Math.floor(rating)) - half;
  } else {
    full = 0;
    half = 0;
    none = 5;
  }

  return (
    <View style={styles.ratingView}>
      {[...Array(full)].map((_, i) => <Image key={i} style={styles.ratingIcon} source={require('../assets/icons/star.png')} />)}
      {[...Array(half)].map((_, i) => <Image key={i} style={styles.ratingIcon} source={require('../assets/icons/half-star.png')} />)}
      {[...Array(none)].map((_, i) => <Image key={i} style={styles.ratingIcon} source={require('../assets/icons/no-star.png')} />)}
    </View>
  )
}