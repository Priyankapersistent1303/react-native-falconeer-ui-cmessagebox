// eslint-disable-next-line @typescript-eslint/no-unused-vars
import React from 'react';
import { StyleSheet, View, Text, Modal, Image } from 'react-native';
import * as IMG_CONST from './assets';

interface Props {
  title: string;
  message: string;
  type: 'Warning' | 'Error' | 'Information';
  isVisible: boolean;
  onClose: () => void;
}

const CMessageBox: React.FC<Props> = ({
  title,
  message,
  type,
  isVisible,
  onClose,
}) => {
  const getIcon = () => {
    switch (type) {
      case 'Warning':
        return IMG_CONST.warning;
      case 'Error':
        return IMG_CONST.error;
      case 'Information':
        return IMG_CONST.info;
      default:
        return IMG_CONST.info;
    }
  };
  return (
    <Modal visible={isVisible} transparent={true}>
      <View style={styles.container}>
        <View style={styles.modal}>
          <View style={styles.imageAndTextContainer}>
            <Image
              resizeMode="contain"
              source={getIcon()}
              style={styles.iconStyle}
            />
            <View style={styles.body}>
              <Text style={styles.title}>{title}</Text>
              <Text style={styles.message}>{message}</Text>
            </View>
          </View>
          <View style={styles.footer}>
            <Text style={styles.closeButton} onPress={onClose}>
              Close
            </Text>
          </View>
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'rgba(52,52,52,0.6)',
    justifyContent: 'center',
  },
  modal: {
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
    width: '95%',
    borderRadius: 10,
    backgroundColor: 'white',
    padding: 20,
  },
  imageAndTextContainer: {
    flexDirection: 'row',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  title: {
    fontSize: 15,
    fontWeight: 'bold',
    color: 'black',
  },
  body: {
    justifyContent: 'space-around',
    padding: 10,
    marginLeft: 5,
  },
  message: {
    fontSize: 14,
    color: '#333',
    fontWeight: '500',
    marginTop: 10,
  },
  footer: {
    alignSelf: 'flex-end',
    backgroundColor: 'blue',
    alignItems: 'center',
    margin: 7,
    borderRadius: 5,
    paddingVertical: 8,
    paddingHorizontal: 20,
  },
  closeButton: {
    fontSize: 14,
    color: '#FFF',
    textAlign: 'center',
    alignSelf: 'center',
  },
  iconStyle: {
    height: 25,
    width: 25,
    alignSelf: 'center',
    marginLeft: 10,
  },
});

export default CMessageBox;
