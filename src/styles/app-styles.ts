import {StyleSheet} from 'react-native';
import {COLORS} from './theme';

export const styles = StyleSheet.create({
  background: {
    flex: 1,
    backgroundColor: COLORS.black,
  },
  screenContainer: {
    paddingHorizontal: 20,
    flex: 1,
    justifyContent: 'flex-end',
  },
  resultText: {
    color: COLORS.white,
    fontSize: 55,
    textAlign: 'right',
  },
  smallText: {
    color: 'rgba(255, 255, 255, 0.6)',
    fontSize: 30,
    textAlign: 'right',
  },
  rowButtons: {
    flexDirection: 'row',
    justifyContent: 'center',
    paddingHorizontal: 10,
    marginVertical: 10,
    gap: 25,
  },
});
