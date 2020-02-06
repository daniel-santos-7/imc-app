import React from 'react';
import { StyleSheet, View, TextInput, TouchableOpacity, Text } from 'react-native';
import { MaterialCommunityIcons, MaterialIcons } from '@expo/vector-icons';

export function WeightInput({value, onChangeWeight}) {
    return (
        <View style={styles.inputGroup}>
            <MaterialCommunityIcons name="weight-kilogram" size={32} color="green"/>
            <TextInput placeholder="70,0 kg" style={styles.input} returnKeyType="next" keyboardType="decimal-pad" value={value} onChangeText={onChangeWeight} autoCapitalize="none"/>
        </View>
    );
}

export function HeightInput({value, onChangeHeight}) {
    return (
        <View style={styles.inputGroup}>
            <MaterialCommunityIcons name="human" size={32} color="blue"/>
            <TextInput placeholder="1,70 m" style={styles.input}  keyboardType="decimal-pad" value={value} onChangeText={onChangeHeight} autoCapitalize="none"/>
        </View>
    );
}

export function CalculateButton({onPress}) {
    return (
        <View style={styles.inputGroup}>
            <TouchableOpacity style={styles.calculateButton} onPress={onPress}>
                <Text style={styles.calculateButtonText}>CALCULAR</Text>
            </TouchableOpacity>
        </View>
    );
}

export function BackButton({onPress}) {
    return (
        <View style={styles.inputGroup}>
            <TouchableOpacity style={styles.backButton} onPress={onPress}>
                <MaterialIcons name="arrow-back" size={32} color="#ffc107"/>
                <Text style={styles.backButtonText}>Voltar</Text>
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({

    inputGroup: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        padding: 5,
        marginVertical: 5,
        marginHorizontal: 15,
        maxHeight: 64
    },

    input: {
        borderWidth: 2,
        borderColor: '#f8f9fa',
        textAlign: 'right',
        flex: 1,
        marginVertical: 5,
        marginLeft: 15,
        padding: 5
    },

    calculateButton: {
        flex: 1,
        backgroundColor: '#ffc107',
        padding: 15,
        borderRadius: 2
    },

    calculateButtonText: {
        color: '#fff',
        fontWeight: 'bold',
        textAlign: 'center'
    },

    backButton: {
        flex:1,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center'
    },

    backButtonText: {
        color: '#ffc107',
        textAlign: 'left',
        fontWeight: 'bold'
    }

});
