import React from 'react';
import * as Progress from 'react-native-progress';
import {default as theme} from '../../global/theme.json';
import {styles} from './styles';

interface LoadingBarProps {
  progress: number;
}

const LoadingBar: React.FC<LoadingBarProps> = ({progress}) => {
  return (
    <Progress.Bar
      style={styles.container}
      useNativeDriver
      progress={progress}
      color={theme['color-primary-500']}
    />
  );
};

export default LoadingBar;
