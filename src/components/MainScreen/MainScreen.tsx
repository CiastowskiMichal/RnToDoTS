import React, {useState} from 'react';
import 'react-native-get-random-values'
import { v4 as uuidv4} from 'uuid';
import {
  SafeAreaView,
  Text,
  FlatList} from 'react-native';
import AddGoal from '../AddGoal/AddGoal';
import Item from '../Item/Item';
import styles from './MainScreen.styles';
import { Goal } from '../../types/goal';


const MainScreen = () => {

  const originalGoals: Goal[] = [{
    id: uuidv4(),
    name: 'Take photos'
  },
  {
    id: uuidv4(),
    name: 'Make scans'
  },
  {
    id: uuidv4(),
    name: '...'
  },
  {
    id: uuidv4(),
    name: 'Profit'
  }];

  const [goalList, setGoals] = useState<Goal[]>(
    originalGoals
  );


  const addNewGoalHandler = (text: string) => {
    if (!text.length) {
      return
    }

    const newGoal : Goal = {
      id: uuidv4(),
      name: text
    };
    setGoals([...goalList, newGoal]);
  };

  const deleteGoalHandler = (item: Goal) => {
    setGoals((prevGoals: Goal[]) => {
      prevGoals.splice(prevGoals.indexOf(item), 1);
      return prevGoals.slice();
    });
  };

  const renderItem = (item: Goal) => {
    return (
      <Item item={item} onDeleteGoal={deleteGoalHandler} />
    );
  };

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.appTitle}>Goals:</Text>
      <AddGoal onAddGoal={addNewGoalHandler}></AddGoal>
      <FlatList
        data={goalList}
        renderItem={({ item }) => renderItem(item)}
        keyExtractor={({ id }) => id}
      />
    </SafeAreaView>
  );
};

export default MainScreen;