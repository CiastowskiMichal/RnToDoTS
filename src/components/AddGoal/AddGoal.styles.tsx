import React from "react";
import { StyleSheet } from "react-native";

const addgoal = StyleSheet.create({

    addGoalInput: {
        borderTopLeftRadius: 20,
        borderBottomLeftRadius: 20,
        backgroundColor: '#E8EFFF',
        borderColor: '#2E4172',
        borderStyle: 'solid',
        borderTopWidth: 2,
        borderBottomWidth: 2,
        borderLeftWidth: 2,
        borderRightWidth: 1,
        marginTop: 10,
        marginBottom: 10,
        padding: 10,
        width: 150,
        height: 40,
        alignSelf: 'center',
        color: '#2E4172',
        fontSize: 15,
    },
    addGoalView: {
        flexDirection: 'row',
        alignSelf: 'center',
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.23,
        shadowRadius: 2.62,
        elevation: 4,
    }
});

export default addgoal;