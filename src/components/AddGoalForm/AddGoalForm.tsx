import React, { useState } from 'react';
import { TextInput, View } from 'react-native';
import CustomButton from '../CustomButton/CustomButton';
import styles from './AddGoalForm.styles';
import AddGoalFormProps from './AddGoalForm.types';

const AddGoalForm = ({onAddGoal}: AddGoalFormProps) => {
    const [enteredText, setEnteredText] = useState<string>("");

    const addGoalHandler = () => {
        if (!enteredText || !enteredText.trim()) {
            return
        }
        onAddGoal(enteredText);
        setEnteredText('');
    };
    
    return (
        <View style={styles.addGoalView}>
            <TextInput onChangeText={newText => setEnteredText(newText)}
                defaultValue={enteredText}
                style={styles.addGoalInput} />
            <CustomButton onPress={addGoalHandler} title="Add new Goal"></CustomButton>
        </View>
    );
};

export default AddGoalForm;