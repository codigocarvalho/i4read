import React, {Fragment} from 'react';
import Share from 'react-native-share';
import Browser from '../../components/Browser';
import FAB from '../../components/FAB';
import Header from '../../components/Header';

const Post: React.FC = ({route}) => {
  const {uri} = route.params;

  const isImage = uri.includes('jpg') || uri.includes('png');

  const onShare = () => {
    const shareOptions = {
      title: 'Share via',
      message: 'You need to see this!',
      url: uri,
      type: 'image/jpeg',
      showAppsToView: true,
      failOnCancel: false,
    };

    Share.open(shareOptions);
  };

  return (
    <Fragment>
      <Header canGoBack />
      <Browser uri={uri} />
      {isImage && <FAB onPress={onShare} />}
    </Fragment>
  );
};

export default Post;
