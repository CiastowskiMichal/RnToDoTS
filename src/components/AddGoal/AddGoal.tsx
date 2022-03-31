import React, { useState } from 'react';
import { TextInput, View } from 'react-native';
import NewButton from '../NewButton/NewButton';
import styles from './AddGoal.styles';


interface AddGoalProps { onAddGoal: (text: string) => void }

const AddGoal = ({onAddGoal}: AddGoalProps) => {
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
            <NewButton onPress={addGoalHandler} title="Add new Goal"></NewButton>
        </View>
    );
};

export default AddGoal;