import {useNavigation} from '@react-navigation/native';
import {Card, Text} from '@ui-kitten/components';
import React from 'react';
import {View} from 'react-native';
import {RedditPost} from '../../@types/reddit.api';
import ItemFooter from './ItemFooter';
import ItemHeader from './ItemHeader';
import Image, {ImageProps} from './ItemImage';
import styles from './styles';

export interface ListItemProps {
  data: RedditPost;
}

const ItemImage = ({uri}: ImageProps) => <Image uri={uri} />;

const ListItem: React.FC<ListItemProps> = ({data}) => {
  const navigation = useNavigation();

  const navigateToPost = () => navigation.navigate('Post', {uri: data?.url});

  const renderThumbnail = () => ItemImage({uri: data?.thumbnail});

  const renderItemHeader = () => <ItemHeader data={data} />;

  const renderItemFooter = () => <ItemFooter data={data} />;

  return (
    <Card
      style={styles.item}
      header={renderItemHeader}
      footer={renderItemFooter}
      onPress={navigateToPost}>
      <View style={styles.content}>
        {renderThumbnail()}
        <Text style={styles.title} ellipsizeMode="tail">
          {data?.title}
        </Text>
      </View>
    </Card>
  );
};

export default ListItem;
