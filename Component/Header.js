import React from 'react';
import { StyleSheet, Text, View } from 'react-native';


export default function Header() {
  return (
    <View style={styles.header}>
      <Text style={styles.title}>Edit Profile</Text>
    </View>
  );
}

const styles = StyleSheet.create({
    header: {
        height: 80,
        paddingTop: 40,
        backgroundColor: "grey",
        
    },
    title: {
        textAlign: 'center',
        fontSize: 22,
        color: '#fff',
        fontWeight: 'bold'
        
    }

});