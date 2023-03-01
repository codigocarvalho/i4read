import {FlashList} from '@shopify/flash-list';
import {Layout, ViewPager} from '@ui-kitten/components';
import {observer} from 'mobx-react';
import React, {Fragment, useEffect, useMemo} from 'react';
import Header from '../../components/Header';
import TopBar from '../../components/TopBar';
import ListItem from '../../components/ListItem';
import ListLoading from '../../components/ListLoading';
import {usePosts} from '../../stores/posts';
import {useUI} from '../../stores/ui';
import {styles} from './styles';

interface Tabs {
  key: string;
  title: string;
}

const Home = observer(() => {
  const {selectedTab, setSelectedTab} = useUI();
  const {loadPosts, loadFiltered, posts, isLoading} = usePosts();

  useEffect(() => {
    switch (selectedTab) {
      case 0:
        loadFiltered('new');
        break;
      case 1:
        loadFiltered('top');
        break;
      case 2:
        loadFiltered('rising');
        break;
      case 3:
        loadFiltered('hot');
        break;
    }
  }, [loadFiltered, selectedTab]);

  const tabs: Tabs[] = useMemo(
    () => [
      {
        key: 'new',
        title: 'New',
      },
      {
        key: 'top',
        title: 'Top',
      },
      {
        key: 'rising',
        title: 'Popular',
      },
      {
        key: 'hot',
        title: 'Hot',
      },
    ],
    [],
  );

  const onSelectPage = (index: number) => {
    setSelectedTab(index);
  };

  const renderItem = ({item}: any) => {
    return <ListItem data={item.data} />;
  };

  const renderListFooter = () => {
    if (!isLoading) {
      return null;
    }

    return <ListLoading />;
  };

  const renderTab = ({key, title}: Tabs) => {
    const _onRefresh = () => {
      loadFiltered(key?.toLowerCase());
    };

    const _onEndReached = () => {
      if (isLoading) {
        return;
      }

      loadPosts();
    };

    return (
      <Layout style={styles.container} key={title} level="4">
        <FlashList
          data={posts}
          renderItem={renderItem}
          estimatedItemSize={180}
          onEndReachedThreshold={0.1}
          onEndReached={_onEndReached}
          ListFooterComponent={renderListFooter}
          onRefresh={_onRefresh}
          refreshing={false}
        />
      </Layout>
    );
  };

  return (
    <Fragment>
      <Header />
      <TopBar />
      <ViewPager
        style={styles.container}
        selectedIndex={selectedTab}
        onSelect={onSelectPage}>
        {tabs.map(tab => renderTab(tab))}
      </ViewPager>
    </Fragment>
  );
});

export default Home;
