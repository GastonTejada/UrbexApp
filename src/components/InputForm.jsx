import React, { useState } from 'react';
import { StyleSheet, Text, TextInput, View, Pressable } from 'react-native';
import { colors } from '../constants/colors';
import Icon from 'react-native-vector-icons/FontAwesome'; // Asegúrate de tener react-native-vector-icons instalado

const InputForm = ({
  label,
  onChange,
  error = "",
  isSecure = false,
  togglePasswordVisibility
}) => {
  const [input, setInput] = useState("");
  const onChangeText = (text) => {
    setInput(text);
    onChange(text);
  };

  return (
    <View style={styles.inputContainer}>
      <Text style={styles.subtitle}>{label}</Text>
      <View style={styles.inputWrapper}>
        <Icon name={label === 'password' || label === 'confirm password' ? "key" : "envelope"} size={20} color={colors.dark} style={styles.leftIcon} />
        <TextInput
          style={styles.input}
          value={input}
          onChangeText={onChangeText}
          secureTextEntry={isSecure}
        />
        {(label === 'password' || label === 'confirm password') && (
          <Pressable onPress={togglePasswordVisibility} style={styles.eyeIcon}>
            <Icon name={isSecure ? "eye-slash" : "eye"} size={20} color={colors.dark} />
          </Pressable>
        )}
      </View>
      {error ? (
        <Text style={styles.error}>
          {error}
        </Text>
      ) : null}
    </View>
  );
};

export default InputForm;

const styles = StyleSheet.create({
  inputContainer: {
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'center',
    width: '100%',
  },
  subtitle: {
    width: '90%',
    fontSize: 16,
    fontFamily: 'Josefin',
    color: colors.black,
  },
  error: {
    paddingTop: 2,
    fontSize: 16,
    color: 'red',
    fontFamily: 'Josefin',
    fontStyle: 'italic',
  },
  inputWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    width: '90%',
    borderWidth: 1,
    borderColor: colors.gray4,
    borderRadius: 5,
    paddingHorizontal: 10,
    backgroundColor: colors.white,
  },
  input: {
    flex: 1,
    padding: 10,
    fontFamily: 'Josefin',
    fontSize: 16,
    color: colors.black,
     },
  leftIcon: {
    marginRight: 10,
  },
  eyeIcon: {
    marginLeft: 10,
  },
});
