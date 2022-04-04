import React from 'react';
import {  StyleSheet } from 'react-native';

const newbutton = StyleSheet.create({
    addGoalButton: {
        borderTopRightRadius: 20,
        borderBottomRightRadius: 20,
        backgroundColor: '#FFF',
        borderColor: '#2E4172',
        borderStyle: 'solid',
        borderTopWidth: 2,
        borderBottomWidth: 2,
        borderLeftWidth: 1,
        borderRightWidth: 2,
        marginTop: 10,
        marginBottom: 10,
        padding: 10,
        width: 150,
        height: 40,
        alignSelf: 'center'
      },
      addGoalButtonText: {
        fontSize: 15,
        color: '#2E4172',
        //textAlign: 'center',
        alignSelf: 'center'
      },
});

export default newbutton;