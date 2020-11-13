import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
import Header from './Component/Header'

export default function App() {
  return (
    <View style={styles.container}>
      <View>
        <Header />
        <StatusBar style="auto" />
      </View>

      <Image source={require('./assets/Baby.png')} style={styles.image} />

      <View style={styles.profileInfo}>
          <Text style={styles.greyInfo}>School</Text>
          <Text style={{ fontSize: 17 }}>CodeTrain Ghana</Text>
        </View>

        <View style={styles.profileInfo}>
          <Text style={styles.greyInfo}>Email</Text>
          <Text style={{ fontSize: 17 }}>danelrozar@gmail.com</Text>
        </View>

        <View style={styles.profileInfo}>
          <Text style={styles.blueInfo}>Name</Text>
          <Text style={{ fontSize: 17 }}>Daniel Rozar</Text>
        </View>

        <View style={styles.profileInfo}>
          <Text style={styles.blueInfo}>Nick Name</Text>
          <Text style={{ fontSize: 17 }}>r.denial</Text>
        </View>

        <View style={styles.profileInfo}>
          <Text style={styles.blueInfo}>Emergency Contact</Text>
          <Text style={{ fontSize: 17 }}>+1-987654321</Text>
        </View>

        <TouchableOpacity
          onPress={() => alert('Profile Updated!')}
          style={styles.button}>
          <Text style={styles.buttonText}>UPDATE PROFILE</Text>
        </TouchableOpacity>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  
  },

  image:{
    marginTop:30,
    width:150,
    height:150,
    marginBottom:50,
    alignSelf:"center",
    borderRadius:75
  },
  
  profileInfo: {
    marginHorizontal: 50,
    marginBottom: 10,
    alignItems: "flex-start",
    borderBottomColor: "lightgrey",
    borderBottomWidth: 0.3,
    fontSize: 20,
  },

  greyInfo: {
    color: "grey",
  },

  blueInfo: {
    color: "deepskyblue",
  },

  button:{ 
    marginTop:30,
    backgroundColor: 'deepskyblue',
    padding: 10,
    borderRadius: 50,
  },

  buttonText:{
    fontSize: 15,
    color: 'white',
    textAlign:'center'
  },

});
