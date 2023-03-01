import {Text} from '@ui-kitten/components';
import React, {memo} from 'react';
import {View} from 'react-native';
import {ListItemProps} from '..';
import {calculateTime} from '../../../helpers/calculateTime';
import styles from '../styles';

const ItemHeader: React.FC<ListItemProps> = ({data}) => {
  const renderPostDate = () => (
    <Text category="s2">{calculateTime(data.created_utc)}</Text>
  );

  return (
    <View style={styles.cardHeader}>
      <Text category="h6" style={styles.author}>
        {data?.author}
      </Text>
      {renderPostDate()}
    </View>
  );
};

export default memo(ItemHeader);
