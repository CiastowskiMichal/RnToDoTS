import React from 'react';
import {
  Pressable, Text
} from 'react-native';
import clearbutton from './ClearButton.styles';

interface ClearButtonProps {onPress : () => void, title : string};

const ClearButton = (props : ClearButtonProps) => {
    return (
      <Pressable style={clearbutton.deleteButton} onPress={props.onPress}>
        <Text style={clearbutton.deleteButtonText}>{props.title}</Text>
      </Pressable>
    );
  }


  export default ClearButton;