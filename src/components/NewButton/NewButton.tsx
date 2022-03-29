import React from 'react';
import {
  Pressable, Text
} from 'react-native';
import newbutton from './NewButton.styles';

interface NewButtonProps {onPress : () => void, title : string};

const NewButton = (props : NewButtonProps) => {
    return (
      <Pressable style={newbutton.addGoalButton} onPress={props.onPress}>
        <Text style={newbutton.addGoalButtonText}>{props.title}</Text>
      </Pressable>
    );
  }


  export default NewButton;