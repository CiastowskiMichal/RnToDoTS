import React, { useState, useEffect } from 'react';
import 'react-native-get-random-values';
import { v4 as uuidv4 } from 'uuid';
import {
  SafeAreaView,
  Text,
  Button,
} from 'react-native';
import { useTranslation } from 'react-i18next';
import { DataObject } from 'src/types/article';
import styles from './MainScreen.styles';
import { Goal } from '../../types/goal';
import GoalList from '../GoalList/GoalList';
import LoadingPanel from '../LoadingPanel/LoadingPanel';

const MainScreen = () => {
  const emptyData: DataObject = {
    articles: [{
      title: '',
      id: '',
    }],
    description: '',
    title: '',
  };
  const { t, i18n } = useTranslation();

  const [isLoading, setLoading] = useState(true);
  const [data, setData] = useState<DataObject>(emptyData);

  const getData = async () => {
    await fetch('https://raw.githubusercontent.com/adhithiravi/React-Hooks-Examples/master/testAPI.json')
      .then((response) => response.json())
      .then((json) => {
        setData(json);
      })
      .catch((error) => console.error(error))
      .finally(() => {
        setLoading(false);
      });
  };

  useEffect(() => {
    getData();
  }, []);

  const changeLanguage = () => {
    if (i18n.language === 'en') i18n.changeLanguage('pl');
    else i18n.changeLanguage('en');
  };

  const populateList = (dataObject: DataObject) => {
    const newGoals: Goal[] = [...dataObject.articles].map((element) => {
      const newGoal = {
        id: uuidv4(),
        name: element.title,
      };
      return newGoal;
    });
    return newGoals;
  };

  return (
    <SafeAreaView style={styles.container}>
      <Button title={t('common:changeLanguage')} onPress={changeLanguage} />
      <Text style={styles.appTitle}>
        {t('common:title')}
        :
      </Text>

      {isLoading
        ? <LoadingPanel />
        : <GoalList goals={populateList(data)} />}

    </SafeAreaView>
  );
};

export default MainScreen;
