import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { TextInput, View } from 'react-native';
import CustomButton from '../CustomButton/CustomButton';
import styles from './AddGoalForm.styles';
import AddGoalFormProps from './AddGoalForm.types';

function AddGoalForm({ onAddGoal }: AddGoalFormProps) {
  const { t } = useTranslation();

  const [enteredText, setEnteredText] = useState<string>('');

  const addGoalHandler = () => {
    if (!enteredText || !enteredText.trim()) {
      return;
    }
    onAddGoal(enteredText);
    setEnteredText('');
  };

  return (
    <View style={styles.addGoalView}>
      <TextInput
        onChangeText={(newText) => setEnteredText(newText)}
        defaultValue={enteredText}
        style={styles.addGoalInput}
      />
      <CustomButton onPress={addGoalHandler} title={t('common:addNewGoal')} />
    </View>
  );
}

export default AddGoalForm;
