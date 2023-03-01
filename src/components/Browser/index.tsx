import React, {useState} from 'react';
import {SafeAreaView} from 'react-native';
import {WebView} from 'react-native-webview';
import {WebViewProgressEvent} from 'react-native-webview/lib/WebViewTypes';
import LoadingBar from '../LoadingBar';
import {styles} from './styles';

interface IBrowser {
  uri: string;
}

const Browser: React.FC<IBrowser> = ({uri}) => {
  const [progress, setProgress] = useState(0);
  const [isLoading, setLoading] = useState(true);

  const _onLoadProgress = (event: WebViewProgressEvent) => {
    setProgress(event.nativeEvent.progress);
  };

  const _onLoadEnd = () => {
    setLoading(false);
  };

  const renderLoading = () => {
    if (!isLoading) {
      return null;
    }

    return <LoadingBar progress={progress} />;
  };

  return (
    <SafeAreaView style={styles.container}>
      {renderLoading()}

      <WebView
        source={{uri}}
        contentMode="mobile"
        onLoadEnd={_onLoadEnd}
        onLoadProgress={_onLoadProgress}
      />
    </SafeAreaView>
  );
};

export default Browser;
