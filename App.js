import React, { Component } from 'react';
import { StyleSheet, Text, View, Image, Button, Alert } from 'react-native';

export default class homePage extends Component {
  render() {
    let link = {
      uri: 'https://image.flaticon.com/icons/png/512/373/373600.png'
    };
    return (
      <View style={{ flex: 1, backgroundColor: '#20252d'}}>
        <View style={{ flex: 1, alignItems: "flex-start", flexDirection: 'row', justifyContent: 'center' }}>
          <Text style={{color: 'white', fontSize: 40, top: 100}}>Sleep Ninja</Text>
          <Image source={link} style={{width: 50, height: 50, top: 100}}/>
        </View>

        <View style={{ flex: 1, alignItems: "center", justifyContent: 'center' }}>
          <Button 
            title="Get Started"
            onPress={() => Alert.alert('hi papa!')}
          />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
