import React from 'react';
import {
  Pressable, Text,
} from 'react-native';
import styles from './ClearButton.styles';
import ClearButtonProps from './ClearButton.types';

function ClearButton({ onPress, title }: ClearButtonProps) {
  return (
    <Pressable style={styles.deleteButton} onPress={onPress}>
      <Text style={styles.deleteButtonText}>{title}</Text>
    </Pressable>
  );
}

export default ClearButton;
