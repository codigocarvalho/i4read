import React, {memo} from 'react';
import {Icon as KittenIcon, IconProps} from '@ui-kitten/components';

const Icon = (props: IconProps) => <KittenIcon {...props} />;

export default memo(Icon);
