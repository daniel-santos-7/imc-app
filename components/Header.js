import React from 'react';
import { StyleSheet, View, Image, Text } from 'react-native';
import womanImage from '../assets/images/adult.jpg';

export default function Header() {
  return (
    <View style={styles.headerContainer}>
        <Image source={womanImage} style={styles.coverImage}/>
        <Text style={styles.headerTitle}> Índice de Massa Corporal </Text>
    </View>
  );
}

const styles = StyleSheet.create({

    headerContainer: {
        flex: 1,
        backgroundColor: '#ffc107'
    },

    coverImage: {
        flex: 1,
        maxWidth: '100%'
    },

    headerTitle: {
        fontSize: 16,
        fontWeight: 'bold',
        color: '#fff',
        padding: 10,
        textAlign: 'center'
    }

});

