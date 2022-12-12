import React from 'react';
import {
  SafeAreaView,
  View,
  StyleSheet,
  Text,
  TextInput,
  Pressable,
} from 'react-native';
import {
  DEFAULT_PADDING,
  FONT_FAMILY,
  FONT_SIZE,
} from '../../constants/constants';

const ViewExampleDont = () => {
  return (
    <SafeAreaView style={styles.safeAreaView}>
      <View style={styles.mainView}>
        <TextInput style={styles.textInputStyle} placeholder={'Username'} />
        <Pressable style={styles.buttonStyle} onPress={() => {}}>
          <Text style={styles.buttonTitle} numberOfLines={2}>
            {'Submit'}
          </Text>
        </Pressable>
      </View>
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  safeAreaView: {
    flex: 1,
    backgroundColor: '#fff',
  },
  mainView: {
    flex: 1,
    backgroundColor: '#fff',
    paddingHorizontal: DEFAULT_PADDING,
  },
  textInputStyle: {
    width: '100%',
    height: 44,
    borderBottomWidth: 1,
    paddingHorizontal: 12,
    borderRadius: 8,
    marginTop: 30,
    fontFamily: FONT_FAMILY.roboto_regular,
    fontSize: FONT_SIZE.regular,
  },
  buttonStyle: {
    width: '100%',
    height: 50,
    borderRadius: 25,
    backgroundColor: '#59dc4c',
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 12,
    position: 'absolute',
    bottom: 20,
    left: 20,
  },
  buttonTitle: {
    fontFamily: FONT_FAMILY.roboto_bold,
    fontSize: FONT_SIZE.extra_large,
    color: '#fff',
    textAlign: 'center',
  },
});
export default ViewExampleDont;
