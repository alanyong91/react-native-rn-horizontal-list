import React from 'react';
import { StyleSheet, Modal, Dimensions, View, TouchableOpacity, Text } from 'react-native';

const styles = StyleSheet.create({
  view: {
    marginTop: 50,
    height: Dimensions.get('window').height - 100,
  },
  closeButton: {
    backgroundColor: 'red'
  },
  closeButtonText: {
    color: '#fff',
    textAlign: 'center',
    fontSize: 20,
    textTransform: 'uppercase',
    fontWeight: '700',
    padding: 10,
  },
});

interface IWebViewProps {
  open: boolean;
  uri: string | null;
  onClose: () => void;
}

export default ({ open, uri, onClose }: IWebViewProps) => (
  <Modal
    animationType="slide"
    visible={open}
  >
    <View style={styles.view}>
      <TouchableOpacity style={styles.closeButton} onPress={onClose}>
        <Text style={styles.closeButtonText}>close</Text>
      </TouchableOpacity>
      <Text>{uri}</Text>
    </View>
  </Modal>
)