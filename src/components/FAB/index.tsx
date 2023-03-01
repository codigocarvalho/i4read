import {Button, ButtonProps, Icon, IconProps} from '@ui-kitten/components';
import React from 'react';
import {styles} from './styles';

interface FABProps extends ButtonProps {}

const PlusIcon = (props: IconProps) => <Icon {...props} name="share-outline" />;

const FAB: React.FC<FABProps> = ({...props}) => {
  return (
    <Button
      style={styles.fab}
      size="medium"
      accessoryLeft={PlusIcon}
      {...props}
    />
  );
};

export default FAB;
