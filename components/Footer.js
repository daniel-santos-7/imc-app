import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function Footer() {
  return (
    <View style={styles.footerContainer}>
        <Text style={styles.footerText}>Desenvolvido por Daniel Santos</Text>
    </View>
  );
}

const styles = StyleSheet.create({

    footerContainer: {
      width: '100%',
      padding: 3,
      backgroundColor: '#ffc107'
    },
    
    footerText: {
      color: '#fff',
      fontWeight: 'bold',
      textAlign: 'center'
    }

});