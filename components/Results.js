import React from 'react';
import {View, Text, StyleSheet, TouchableNativeFeedback} from 'react-native';
import ProgressCircle from 'react-native-progress-circle';
import bmiData from '../data/bmi.json';

export default function Results({bmi, status}) {

    function definePercent(bmi) {
        const {sqrt, pow} = Math;
        return 100/sqrt(1+pow(40/bmi,2));
    }

    function defineColor(status) {
        const item = bmiData.find(item=> status===item.status);
        return item?item.color:'#a00';
    }

    const percent = definePercent(bmi);
    const color = defineColor(status);

    return (
        <View style={styles.resultsContainer}>
            <ProgressCircle percent={percent} radius={60} borderWidth={14} color={color} shadowColor="#ffc107" bgColor="#fff">
                <Text style={styles.bmiText}>{bmi}</Text>
            </ProgressCircle>
            <Text style={[styles.statusText, {color}]}>{status}</Text>
        </View>
    );
}

const styles = StyleSheet.create({

    resultsContainer: {
        flex:2,
        justifyContent: 'center',
        alignItems: 'center'
    },

    bmiText: {
        fontSize: 20,
        fontWeight: 'bold',
        textAlign: 'center',
        width: '100%',
        color: '#ffc107'
    },
    
    statusText: {
        fontSize: 18,
        minWidth: '100%',
        textAlign: 'center',
        fontWeight: 'bold',
        margin: 10,
    }

});