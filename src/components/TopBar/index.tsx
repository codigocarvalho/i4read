import {Icon, IconProps, Tab, TabBar} from '@ui-kitten/components';
import React from 'react';
import {useUI} from '../../stores/ui';

const NewIcon = (props: IconProps) => <Icon {...props} name="flash-outline" />;

const TopIcon = (props: IconProps) => <Icon {...props} name="upload-outline" />;

const PopularIcon = (props: IconProps) => (
  <Icon {...props} name="trending-up-outline" />
);

const HotIcon = (props: IconProps) => (
  <Icon {...props} name="thermometer-plus-outline" />
);

const TopBar = () => {
  const {selectedTab, setSelectedTab} = useUI();

  const onSelect = (index: number) => {
    setSelectedTab(index);
  };

  return (
    <TabBar selectedIndex={selectedTab} onSelect={onSelect}>
      <Tab icon={NewIcon} title="New" />
      <Tab icon={TopIcon} title="Top" />
      <Tab icon={PopularIcon} title="Popular" />
      <Tab icon={HotIcon} title="Hot" />
    </TabBar>
  );
};

export default TopBar;
