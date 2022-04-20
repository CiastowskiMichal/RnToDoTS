import { t } from 'i18next';
import React from 'react';
import {
  Text, View,
} from 'react-native';
import ClearButton from '../ClearButton/ClearButton';
import styles from './GoalListElement.styles';
import ItemProps from './GoalListElement.types';

const Item = ({ item, onDeleteGoal }: ItemProps) => {
  const deleteButton = () => {
    onDeleteGoal(item);
  };
  return (
    <View style={styles.item}>
      <Text style={styles.title}>{item.name}</Text>
      <ClearButton title={t('common:delete')} onPress={deleteButton} />
    </View>

  );
};

export default Item;
