import React from 'react';
import {
  SafeAreaView,
  StatusBar,
  StyleSheet,
  Text,
  View,
  FlatList,
  TextInput
} from 'react-native';
import AddGoal from '../AddGoal/AddGoal';
import Item from '../Item/Item';
import NewButton from '../NewButton/NewButton';
import mainscreen from './MainScreen.styles';

const MainScreen = () => {

  const originalGoals = [{
    id: 'g0',
    name: 'Take photos'
  },
  {
    id: 'g1',
    name: 'Make scans'
  },
  {
    id: 'g2',
    name: '...'
  },
  {
    id: 'g3',
    name: 'Profit'
  }];

  const [goalList, setGoals] = React.useState([
    ...originalGoals
  ]);

  const AddNewGoalHandler = (text: string) => {
    if (!text.length) {
      return
    }

    setGoals((prevGoals: any) => {
      const goal = {
        id: 'g' + prevGoals.length,
        name: text
      };
      return prevGoals.concat(goal);
    });
  };

  const renderItem = (item: any) => {
    return (
      <Item name={item.item.name} />
    );
  };

  return (
    <SafeAreaView style={mainscreen.container}>
      <Text style={mainscreen.appTitle}>Goals:</Text>
      <AddGoal onAddGoal={AddNewGoalHandler}></AddGoal>
      <FlatList
        data={goalList}
        renderItem={renderItem}
        keyExtractor={item => item.id}
      />
    </SafeAreaView>
  );
};

export default MainScreen;