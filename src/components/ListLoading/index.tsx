import {Layout, Spinner} from '@ui-kitten/components';
import React, {memo} from 'react';
import {styles} from './styles';

const ListLoading: React.FC = () => {
  return (
    <Layout level="4" style={styles.container}>
      <Spinner />
    </Layout>
  );
};

export default memo(ListLoading);
