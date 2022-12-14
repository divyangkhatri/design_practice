import React from 'react';
import { SafeAreaView, StyleSheet, Text, ScrollView } from 'react-native';
import {
  DEFAULT_PADDING,
  FONT_FAMILY,
  FONT_SIZE,
} from '../../constants/constants';

const ScrollViewExampleDont = () => {
  return (
    <SafeAreaView style={styles.safeAreaView}>
      <ScrollView style={styles.mainView}>
        <Text style={styles.titleStyle}>Test 1</Text>
        <Text style={styles.descriptionStyle}>
          {
            "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
          }
        </Text>
        <Text style={styles.titleStyle}>Test 2</Text>
        <Text style={styles.descriptionStyle}>
          {
            "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
          }
        </Text>
        <Text style={styles.titleStyle}>Test 3</Text>
        <Text style={styles.descriptionStyle}>
          {
            "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
          }
        </Text>
        <Text style={styles.titleStyle}>Test 4</Text>
        <Text style={styles.descriptionStyle}>
          {
            "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
          }
        </Text>
      </ScrollView>
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
    padding: DEFAULT_PADDING,
  },
  titleStyle: {
    fontFamily: FONT_FAMILY.roboto_bold,
    fontSize: FONT_SIZE.large,
    marginTop: 24,
  },
  descriptionStyle: {
    fontFamily: FONT_FAMILY.roboto_regular,
    fontSize: FONT_SIZE.regular,
    marginTop: 12,
  },
});
export default ScrollViewExampleDont;
