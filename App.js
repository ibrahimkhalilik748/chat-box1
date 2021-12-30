import React from 'react';
import { StyleSheet, Text, View, Dimensions, SafeAreaView } from 'react-native';
import ChatBox from './Component/ChatBox/ChatBox';
import ChatShow from './Component/ChatShow/ChatShow';


export default function app() {
  return (
    <SafeAreaView style={styles.body} >
      <View style={styles.container} >
        <Text style={styles.header}>Messenger</Text>
      </View>
      <ChatShow />
      <ChatBox />

    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 25,
    height: 60,
    width: '100%',
    zIndex: 1,
    // backgroundColor: '#000000',
    // backgroundColor: '#242526',
    alignItems: 'center',
    justifyContent: 'center',
    color: '#000000',
  },
  body: {
    // width: '100%',
    height: Dimensions.get("screen").height,
    // flex: 1,
    backgroundColor: '#000000',
    // alignItems: 'center',
    // justifyContent: 'center',
    // color: '#000000',
  },
  header: {
    
    fontSize: 30,
    fontWeight: 'bold',
    color: 'white',
    // alignItems: 'center',
  }
});

