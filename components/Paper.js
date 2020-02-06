import React, { useRef, useEffect, Children, cloneElement } from 'react';
import {View, ScrollView, StyleSheet, Dimensions} from 'react-native';

export default function Paper({children, hidden}) {
  return (
    <View style={hidden?{display:'none'}:styles.paper}>
      {children}
    </View>
  );
}

const styles = StyleSheet.create({

  paper: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    margin: 5,
    backgroundColor: '#fff',
    shadowColor: '#000',
    shadowOffset: { width: 2, height: 2 },
    shadowRadius: 1,
    elevation: 1
  }

});