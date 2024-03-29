import {StyleSheet} from 'react-native';
import {colors} from '../../utils/colors';

export const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 16,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },

    shadowOpacity: 0.2,
    shadowRadius: 3.84,
    elevation: 5,
    backgroundColor: colors.white,
    marginVertical: 12,
    borderRadius: 4,
  },
  title: {
    color: colors.blue,
    fontSize: 18,
    fontWeight: 'bold',
  },
  subtitle: {
    color: colors.grey,
    fontSize: 12,
    marginTop: 6,
  },
  arrow: {
    width: 6,
    height: 12,
  },
});
