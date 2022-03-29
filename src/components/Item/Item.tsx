import React from "react";
import {
    Text, View
} from 'react-native';
import item from './Item.styles';

interface ItemProps { name: string }

const Item = (props: ItemProps) => {
    return (
        <View style={item.item}>
            <Text style={item.title}>{props.name}</Text>
        </View>
    );
};

export default Item;