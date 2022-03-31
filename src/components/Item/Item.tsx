import React from "react";
import {
    Text, View
} from 'react-native';
import ClearButton from "../ClearButton/ClearButton";
import item from './Item.styles';
import MainScreen from "../MainScreen/MainScreen"
import { Goal } from "../../types/goal";

interface ItemProps { item: Goal, onDeleteGoal : (goal : Goal) => void }

const Item = (props: ItemProps) => {

    const deleteButton = () => {
        props.onDeleteGoal(props.item);
    }
    return (
        <View style={item.item}>
            <Text style={item.title}>{props.item.name}</Text><ClearButton title="Delete!" onPress={deleteButton} />
        </View>

    );
};

export default Item;