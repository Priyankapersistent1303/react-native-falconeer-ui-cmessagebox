import * as React from 'react'
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import CMessageBox from 'react-native-falconeer-ui-cmessagebox';
export default function App() {
  const [isVisible, setVisible] = React.useState(false);

  return (
    <View style={styles.container}>
      <CMessageBox
        title="Access Denied"
        message="You are not allowed to perform this operation.Please contact administrator."
        type="Warning"
        isVisible={isVisible}
        onClose={() => {
          setVisible(false);
        }}
      />
      <TouchableOpacity
        onPress={() => {
          setVisible(true);
        }}
      >
        <Text>Open</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  box: {
    width: 60,
    height: 60,
    marginVertical: 20,
  },
});
