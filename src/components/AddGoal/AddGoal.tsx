import React, { useState } from 'react';
import { Text, TextInput, View } from 'react-native';
import NewButton from '../NewButton/NewButton';
import addgoal from './AddGoal.styles';


interface AddGoalProps { onAddGoal: (text: string) => void }

const AddGoal : React.FC<AddGoalProps> = ({onAddGoal}) => {
    const [enteredText, setEnteredText] = useState<string>("");

    const addGoalHandler = () => {
        if (!enteredText || !enteredText.trim()) {
            return
        }
        onAddGoal(enteredText);
        setEnteredText('');
    };
    
    return (
        <View style={addgoal.addGoalView}>
            <TextInput onChangeText={newText => setEnteredText(newText)}
                defaultValue={enteredText}
                style={addgoal.addGoalInput} />
            <NewButton onPress={addGoalHandler} title="Add new Goal"></NewButton>
        </View>
    );
};

export default AddGoal;