import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.center}>
          <Text style={styles.title}>Adam Smith</Text>
          <View style={styles.hairline} />
          <Text style={styles.maintext}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since</Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#eaefee',
    alignItems: 'center',
    justifyContent: 'center',
  },
  center: {
    width: 200,
    height: 200,
    padding: 20,
    borderRadius:100,
    borderWidth: 5,
    borderColor: '#99e265',
    textAlign: 'center'
  },
  title: {
    textAlign: 'center'
  },
  maintext: {
    textAlign: 'center',
    paddingTop: 10
  },
  hairline: {
    alignSelf: 'center',
    backgroundColor: '#000',
    height: 1,
    width: 30
  }
});
