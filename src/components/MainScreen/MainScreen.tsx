import React, { useState } from 'react';
import 'react-native-get-random-values';
import { v4 as uuidv4 } from 'uuid';
import {
  SafeAreaView,
  Text,
  FlatList,
  Button,
} from 'react-native';
import { useTranslation } from 'react-i18next';
import AddGoalForm from '../AddGoalForm/AddGoalForm';
import GoalListElement from '../GoalListElement/GoalListElement';
import styles from './MainScreen.styles';
import { Goal } from '../../types/goal';

function MainScreen() {
  const { t, i18n } = useTranslation();
  const originalGoals: Goal[] = [{
    id: uuidv4(),
    name: 'Take photos',
  },
  {
    id: uuidv4(),
    name: 'Make scans',
  },
  {
    id: uuidv4(),
    name: '...',
  },
  {
    id: uuidv4(),
    name: 'Profit',
  }];

  const [goalList, setGoals] = useState<Goal[]>(
    originalGoals,
  );

  const addNewGoalHandler = (name: string) => {
    if (!name.length) {
      return;
    }

    const newGoal : Goal = {
      id: uuidv4(),
      name,
    };
    setGoals([...goalList, newGoal]);
  };

  const deleteGoalHandler = (item: Goal) => {
    setGoals((prevGoals: Goal[]) => {
      prevGoals.splice(prevGoals.indexOf(item), 1);
      return prevGoals.slice();
    });
  };

  const renderItem = (item: Goal) => (
    <GoalListElement item={item} onDeleteGoal={deleteGoalHandler} />
  );

  const changeLanguage = () => {
    if (i18n.language === 'en') i18n.changeLanguage('pl');
    else i18n.changeLanguage('en');
  };

  return (
    <SafeAreaView style={styles.container}>
      <Button title={t('common:changeLanguage')} onPress={changeLanguage} />
      <Text style={styles.appTitle}>
        {t('common:title')}
        :
      </Text>
      <AddGoalForm onAddGoal={addNewGoalHandler} />
      <FlatList
        data={goalList}
        renderItem={({ item }) => renderItem(item)}
        keyExtractor={({ id }) => id}
      />
    </SafeAreaView>
  );
}

export default MainScreen;
