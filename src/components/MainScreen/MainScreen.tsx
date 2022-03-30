import React from 'react';
import 'react-native-get-random-values'
import { v4 as uuidv4} from 'uuid';
import {
  SafeAreaView,
  Text,
  FlatList} from 'react-native';
import AddGoal from '../AddGoal/AddGoal';
import Item from '../Item/Item';
import mainscreen from './MainScreen.styles';

interface Aa {
  id: string,
  name: string
}

const MainScreen = () => {

  const originalGoals: Aa[] = [{
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

  const [goalList, setGoals] = React.useState<Aa[]>(
    originalGoals
  );


  const addNewGoalHandler = (text: string) => {
    if (!text.length) {
      return
    }

    setGoals((prevGoals: any) => {
      const goal = {
        id: uuidv4(),
        name: text
      };
      return prevGoals.concat(goal);
    });
  };

  const DeleteGoalHandler = (item: any) => {

    console.log("kliknieto: " + item.id);
    setGoals((prevGoals: any) => {
      prevGoals.splice(prevGoals.indexOf(item), 1);
      return prevGoals.slice();
    });

  };

  const renderItem = (item: Aa) => {
    return (
      <Item item={item} onDeleteGoal={DeleteGoalHandler} />
    );
  };

  return (
    <SafeAreaView style={mainscreen.container}>
      <Text style={mainscreen.appTitle}>Goals:</Text>
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