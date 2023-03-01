import {useNavigation} from '@react-navigation/native';
import {
  IconProps,
  TopNavigation,
  TopNavigationAction,
} from '@ui-kitten/components';
import {observer} from 'mobx-react';
import React from 'react';
import {useUI} from '../../stores/ui';
import Icon from '../Icon';

const BackIcon = (props: IconProps) => (
  <Icon {...props} name="arrow-back-outline" />
);

const MoonIcon = (props: IconProps) => <Icon {...props} name="moon-outline" />;

const SunIcon = (props: IconProps) => <Icon {...props} name="sun-outline" />;

interface HeaderProps {
  canGoBack?: boolean;
}

const Header: React.FC<HeaderProps> = observer(props => {
  const {canGoBack = false} = props;
  const navigation = useNavigation();
  const {darkMode, setDarkMode} = useUI();

  const goBack = () => {
    navigation.goBack();
  };

  const renderLeftActions = () => {
    if (!canGoBack) {
      return null;
    }

    <TopNavigationAction icon={BackIcon} onPress={goBack} />;
  };

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  const renderRightActions = () => (
    <TopNavigationAction
      icon={darkMode ? SunIcon : MoonIcon}
      onPress={toggleDarkMode}
    />
  );

  return (
    <TopNavigation
      alignment="center"
      title="reddit/r/pics"
      subtitle="i4read"
      accessoryLeft={renderLeftActions}
      accessoryRight={renderRightActions}
    />
  );
});

export default Header;
