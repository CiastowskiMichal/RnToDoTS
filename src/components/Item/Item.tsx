import React from "react";
import {
    Text, View
} from 'react-native';
import ClearButton from "../ClearButton/ClearButton";
import item from './Item.styles';
import { useTranslation } from 'react-i18next';

interface ItemProps { item: any, onDeleteGoal : (goalId : string) => void }


const Item = (props: ItemProps) => {

    const { t } = useTranslation();

    const deleteButton = () => {
        props.onDeleteGoal(props.item);
    }
    return (
        <View style={item.item}>
            <Text style={item.title}>{props.item.name}</Text><ClearButton title={t('common:delete')} onPress={deleteButton} />
        </View>

    );
};

export default Item;