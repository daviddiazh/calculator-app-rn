import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {COLORS} from '../styles/theme';

interface Props {
  text: string;
  color?: string;
  width?: number;
  action: (numberOrAction: string) => void;
}

export const Button = ({
  text,
  action,
  color = COLORS.grayDark,
  width = 70,
}: Props) => {
  return (
    <TouchableOpacity activeOpacity={0.7} onPress={() => action(text)}>
      <View style={{...styles.container, backgroundColor: color, width}}>
        <Text
          style={{
            ...styles.text,
            color: color === COLORS.gray ? COLORS.black : COLORS.white,
          }}>
          {text}
        </Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#9B9B9B',
    borderRadius: 100,
    width: 70,
    height: 70,
    justifyContent: 'center',
  },
  text: {
    color: '#000',
    fontSize: 25,
    padding: 10,
    textAlign: 'center',
    fontWeight: '500',
  },
});
