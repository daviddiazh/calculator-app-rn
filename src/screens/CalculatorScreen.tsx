/* eslint-disable prettier/prettier */
import React, {useState} from 'react';
import {Text, View} from 'react-native';
import {Button} from '../components/Button';
import {styles} from '../styles/app-styles';
import {COLORS} from '../styles/theme';

export const CalculatorScreen = () => {
  const [beforeNumber, setBeforeNumber] = useState('0');
  const [number, setNumber] = useState('100');

  const clean = () => setNumber('0');

  const settingNumbers = (newTextPress: string) => {
    if (number.includes('.') && newTextPress === '.') return;

    if (number.startsWith('0') || number.startsWith('-0')) {

      if (newTextPress === '.') {
        setNumber(number + newTextPress);
      }

      else if (newTextPress === '0' && number.includes('.')) {
        setNumber(number + newTextPress);
      }

      else if (newTextPress !== '0' && !number.includes('.') ) {
        setNumber(newTextPress);
      }

      else if (newTextPress === '0' && !number.includes('.')) {
        setNumber(number);
      }

      else {
        setNumber(number + newTextPress);
      }

    } else {
      setNumber(number + newTextPress);
    }
  };

  const positiveNegative = () => {
    if (number.includes('-')) {
      setNumber(number.replace('-', ''));
    } else {
      setNumber('-' + number);
    }
  };

  const btnDelete = () => {
    if (number.length > 1) {
      setNumber(number.slice(0, -1));
    }
    if (number.length === 1 || number.length === 2 && number.includes('-')) {
      setNumber('0');
    }
  };

  return (
    <View style={styles.screenContainer}>
      {beforeNumber === '0' ? null : (
        <Text style={styles.smallText}>{beforeNumber}</Text>
      )}
      <Text style={styles.resultText} numberOfLines={1} adjustsFontSizeToFit>
        {number}
      </Text>

      <View style={styles.rowButtons}>
        <Button text="C" color={COLORS.gray} action={clean} />
        <Button text="+/-" color={COLORS.gray} action={positiveNegative} />
        <Button text="del" color={COLORS.gray} action={btnDelete} />
        <Button text="/" color={COLORS.orange} />
      </View>

      <View style={styles.rowButtons}>
        <Button text="7" action={settingNumbers} />
        <Button text="8" action={settingNumbers} />
        <Button text="9" action={settingNumbers} />
        <Button text="X" color={COLORS.orange} />
      </View>

      <View style={styles.rowButtons}>
        <Button text="4" action={settingNumbers} />
        <Button text="5" action={settingNumbers} />
        <Button text="6" action={settingNumbers} />
        <Button text="-" color={COLORS.orange} />
      </View>

      <View style={styles.rowButtons}>
        <Button text="1" action={settingNumbers} />
        <Button text="2" action={settingNumbers} />
        <Button text="3" action={settingNumbers} />
        <Button text="+" color={COLORS.orange} />
      </View>

      <View style={styles.rowButtons}>
        <Button text="0" width={160} action={settingNumbers} />
        <Button text="." action={settingNumbers} />
        <Button text="=" color={COLORS.orange} />
      </View>
    </View>
  );
};
