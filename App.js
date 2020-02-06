import React, { useState } from 'react';
import {  StyleSheet, StatusBar, View } from 'react-native';

import Header from './components/Header';
import {WeightInput, HeightInput, CalculateButton, BackButton} from './components/Controls';
import Paper from './components/Paper';
import Footer from './components/Footer';
import Results from './components/Results';
import useDecimalState from './hooks/useDecimalState';

import bmiData from './data/bmi.json';

export default function App() {

  const [weight, setWeight] = useDecimalState('70.0');
  const [height, setHeight] = useDecimalState('1.70',1,2);
  const [BMI, setBMI] = useState(0);
  const [status, setStatus] = useState('Não definido');

  function calculateBMI() {
    const weightValue = Number(weight);
    const heightValue = Number(height);

    if (!weightValue || !heightValue)
      return;

    const BMIValue = (weightValue/Math.pow(heightValue,2)).toFixed(2);
    const findStatus = (item)=> BMIValue<=item.maxBMI || !item.maxBMI;
    const statusValue = bmiData.find(findStatus).status;
    setBMI(BMIValue);
    setStatus(statusValue);
  }

  function resetBMI() {
    setBMI(0);
    setStatus('Não definido')
  }

  return (
    <View style={style.mainContainer}>
      <StatusBar hidden/>
      <Header/>
      <Paper hidden={BMI!==0}>
        <WeightInput value={weight} onChangeWeight={setWeight}/>
        <HeightInput value={height} onChangeHeight={setHeight}/>
        <CalculateButton onPress={calculateBMI}/>
      </Paper>
      <Paper hidden={BMI===0}>
        <Results bmi={BMI} status={status}/>
        <BackButton onPress={resetBMI}/>
      </Paper>
      <Footer/>
    </View>
  );

}

const style = StyleSheet.create({

    mainContainer: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'space-between',
      backgroundColor: '#f8f9fa',
    }

});