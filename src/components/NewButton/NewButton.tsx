import React from 'react';
import {
  Pressable, Text
} from 'react-native';
import styles from './NewButton.styles';

interface NewButtonProps {onPress : () => void, title : string};

const NewButton = ({onPress, title} : NewButtonProps) => {
    return (
      <Pressable style={styles.addGoalButton} onPress={onPress}>
        <Text style={styles.addGoalButtonText}>{title}</Text>
      </Pressable>
    );
  }


  export default NewButton;