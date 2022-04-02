import React from "react";
import {
    Text, View
} from 'react-native';
import ClearButton from "../ClearButton/ClearButton";
import styles from './Item.styles';
import ItemProps from "./Item.types";

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