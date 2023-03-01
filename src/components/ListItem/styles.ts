import {StyleSheet} from 'react-native';
import {default as theme} from '../../global/theme.json';

const styles = StyleSheet.create({
  item: {
    height: 180,
    margin: 6,
  },
  content: {
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'flex-start',
  },
  icon: {
    marginLeft: 16,
    width: 24,
    height: 24,
  },
  infoIcon: {
    marginLeft: 3,
    color: theme['color-default'],
  },
  image: {
    height: 54,
    width: 54,
    borderRadius: 8,
  },
  title: {
    marginLeft: 8,
    width: '80%',
  },
  cardHeader: {
    padding: 8,
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  cardFooter: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
  },
  author: {
    marginLeft: 8,
  },
});

export default styles;
