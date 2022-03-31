import React from "react";
import {
    Text, View
} from 'react-native';
import ClearButton from "../ClearButton/ClearButton";
import styles from './Item.styles';
import { Goal } from "../../types/goal";

interface ItemProps {
    item: Goal,
    onDeleteGoal: (goal: Goal) => void
}

const Item = ({item, onDeleteGoal} : ItemProps) => {

    const deleteButton = () => {
        onDeleteGoal(item);
    }
    return (
        <View style={styles.item}>
            <Text style={styles.title}>{item.name}</Text><ClearButton title="Delete!" onPress={deleteButton} />
        </View>

    );
};

export default Item;