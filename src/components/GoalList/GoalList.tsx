import React, { useState } from 'react';
import { FlatList, View } from 'react-native';
import { Goal } from 'src/types/goal';
import { v4 as uuidv4 } from 'uuid';
import AddGoalForm from '../AddGoalForm/AddGoalForm';
import GoalListElement from '../GoalListElement/GoalListElement';
import GoalListProps from './GoalList.types';

const GoalList = ({ goals }: GoalListProps) => {
  const [goalList, setGoals] = useState<Goal[]>(
    goals,
  );
  const deleteGoalHandler = (item: Goal) => {
    setGoals((prevGoals: Goal[]) => {
      prevGoals.splice(prevGoals.indexOf(item), 1);
      return prevGoals.slice();
    });
  };
  const renderItem = (item: Goal) => (
    <GoalListElement item={item} onDeleteGoal={deleteGoalHandler} />
  );

  const addNewGoalHandler = (name: string) => {
    if (!name.length) {
      return;
    }

    const newGoal: Goal = {
      id: uuidv4(),
      name,
    };
    setGoals([...goalList, newGoal]);
  };
  return (
    <View>
      <AddGoalForm onAddGoal={addNewGoalHandler} />
      <FlatList
        data={goalList}
        renderItem={({ item }) => renderItem(item)}
        keyExtractor={({ id }) => id}
      />
    </View>
  );
};

export default GoalList;
