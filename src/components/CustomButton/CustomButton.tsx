import React from 'react';
import {
  Pressable, Text
} from 'react-native';
import styles from './CustomButton.styles';
import CustomButtonProps from './CustomButton.types';

const CustomButton = ({ onPress, title }: CustomButtonProps) => (
  <Pressable style={styles.addGoalButton} onPress={onPress}>
    <Text style={styles.addGoalButtonText}>{title}</Text>
  </Pressable>
);

export default CustomButton;