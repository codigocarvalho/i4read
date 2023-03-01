import {Icon} from '@ui-kitten/components';
import React, {memo} from 'react';
import FastImage from 'react-native-fast-image';
import styles from '../styles';
import {default as theme} from '../../../global/theme.json';

export interface ImageProps {
  uri?: string;
}

const ItemImage: React.FC<ImageProps> = ({uri}) => {
  if (!uri || uri === 'nsfw' || uri === 'null' || uri === 'self') {
    return (
      <Icon
        style={styles.image}
        name="image-outline"
        fill={theme['color-default']}
      />
    );
  }

  return (
    <FastImage
      style={styles.image}
      source={{
        uri,
        priority: FastImage.priority.low,
      }}
      resizeMode={FastImage.resizeMode.cover}
    />
  );
};

export default memo(ItemImage);
