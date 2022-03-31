import React, { useState } from 'react';
import { Text, TextInput, View } from 'react-native';
import NewButton from '../NewButton/NewButton';
import addgoal from './AddGoal.styles';
import { useTranslation } from 'react-i18next';
import { t } from 'i18next';


interface AddGoalProps { onAddGoal: (text: string) => void }

const AddGoal : React.FC<AddGoalProps> = ({onAddGoal}) => {

    const [t, i18n] = useTranslation();

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
            <NewButton onPress={addGoalHandler} title={t('AddNewGoal')}></NewButton>
        </View>
    );
};

export default AddGoal;