import {Icon, Text} from '@ui-kitten/components';
import React, {memo} from 'react';
import {View} from 'react-native';
import {ListItemProps} from '..';
import {default as theme} from '../../../global/theme.json';
import styles from '../styles';

const CommentsIcon = () => (
  <Icon
    style={styles.icon}
    fill={theme['color-default']}
    name="message-square-outline"
  />
);

const ScoreIcon = () => (
  <Icon
    style={styles.icon}
    fill={theme['color-default']}
    name="award-outline"
  />
);

const ItemFooter: React.FC<ListItemProps> = ({data}) => {
  const description = `${data?.num_comments} Comment${
    data?.num_comments > 1 ? 's' : ''
  }`;

  return (
    <View style={styles.cardFooter}>
      <ScoreIcon />
      <Text style={styles.infoIcon} category="s1">
        {data?.score}
      </Text>
      <CommentsIcon />
      <Text style={styles.infoIcon} category="s1">
        {description}
      </Text>
    </View>
  );
};

export default memo(ItemFooter);
