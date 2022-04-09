import React from 'react';
import {
  Pressable, Text,
} from 'react-native';
import styles from './CustomButton.styles';
import CustomButtonProps from './CustomButton.types';

function CustomButton({ onPress, title }: CustomButtonProps) {
  return (
    <Pressable style={styles.addGoalButton} onPress={onPress}>
      <Text style={styles.addGoalButtonText}>{title}</Text>
    </Pressable>
  );
}

export default CustomButton;
