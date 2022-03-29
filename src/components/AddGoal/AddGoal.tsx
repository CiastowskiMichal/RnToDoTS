import React, { useState } from 'react';
import { TextInput, View } from 'react-native';
import NewButton from '../NewButton/NewButton';
import addgoal from './AddGoal.styles';


interface AddGoalProps { onAddGoal: (text: string) => void }

const AddGoal : React.FC<AddGoalProps> = (props) => {

    const [enteredText, setEnteredText] = useState<string>("");
    const addGoal = () => {
        if (!enteredText.length || !enteredText.trim().length) {
            return
        }
        props.onAddGoal(enteredText);
        setEnteredText('');
    };

    return (
        <View style={addgoal.addGoalView}>
            <TextInput onChangeText={newText => setEnteredText(newText)}
                defaultValue={enteredText}
                style={addgoal.addGoalInput} />
            <NewButton onPress={addGoal} title="Add new Goal"></NewButton>
        </View>
    );
};

export default AddGoal;
