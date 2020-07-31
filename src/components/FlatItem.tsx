import React from 'react';
import {StyleSheet, Dimensions, TouchableOpacity, Image, View, Text} from 'react-native';
import Rating from './Rating';

const styles = StyleSheet.create({
  view: {
    width: Dimensions.get('window').width / 2.5,
    height: 300,
    marginRight: 20,
  },
  viewLast: {
    marginRight: 0,
  },
  imageView: {
    height: Dimensions.get('window').width / 2.5,
    overflow: 'hidden',
    borderRadius: 10,
    marginBottom: 10,
  },
  image: {
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
  },
  category: {
    fontSize: 12,
    color: '#666',
    textTransform: 'uppercase',
    marginBottom: 10,
  },
  title: {
    fontSize: 18,
    lineHeight: 23,
    fontWeight: '600',
  },
});

interface IFlatItemProps {
  item: {
    [key: string]: any;
  };
  index: number;
  total: number;
  onOpen: (uri?: string | null) => void;
}

export default ({item, index, total, onOpen}: IFlatItemProps) => {
  const lastIndex = total === index + 1;

  const onOpenUrl = () => onOpen(item.uri)

  return (
    <View
      style={[
        styles.view,
        ...[lastIndex ? styles.viewLast : {}],
      ]}
    >
      <View style={styles.imageView}>
        <TouchableOpacity onPress={onOpenUrl}>
          <Image
            style={styles.image}
            source={item.image}
          />
        </TouchableOpacity>
      </View>
      <Text style={styles.category}>{item.category}</Text>
      <Rating rating={item.rating} />
      <TouchableOpacity onPress={onOpenUrl}>
        <Text style={styles.title}>{item.title}</Text>
      </TouchableOpacity>
    </View>
  );
};
