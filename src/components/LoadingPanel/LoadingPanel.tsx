import { t } from 'i18next';
import React from 'react';
import {
  Text, View,
} from 'react-native';
import styles from './LoadingPanel.styles';

const LoadingPanel = () => (
  <View>
    <Text style={styles.loadingPanel}>{t('common:loading')}</Text>
  </View>
);

export default LoadingPanel;
