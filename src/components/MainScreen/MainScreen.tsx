import React, { Suspense } from 'react';
import 'react-native-get-random-values';
import { v4 as uuidv4 } from 'uuid';
import { useTranslation } from 'react-i18next';
import {
  SafeAreaView,
  Text,
  FlatList,
  Button
} from 'react-native';
import AddGoal from '../AddGoal/AddGoal';
import Item from '../Item/Item';
import mainscreen from './MainScreen.styles';

interface Aa {
  id: string,
  name: string
}

const MainScreen = () => {

  const { t, i18n } = useTranslation();

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

  const changeLanguage = () => {
    if (i18n.language === 'en')
      i18n.changeLanguage('pl');
    else
      i18n.changeLanguage('en');
  };

  return (
    <SafeAreaView style={mainscreen.container}>
      <Button title={t('common:changeLanguage')} onPress={changeLanguage} />
      <Suspense fallback='loading'>
        <Text style={mainscreen.appTitle}>{t('common:title')}:</Text>
      </Suspense>
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