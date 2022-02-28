import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';

const SearchBtn = ({ type, onPress, btnTitle }) => {

  return (
    <TouchableOpacity
      style={[
        type === 'byName' ? styles.byName : styles.byContact,
        styles.btn
      ]}
      onPress={onPress}
    >
      <Text style={styles.btnText}>{btnTitle}</Text>
    </TouchableOpacity>
  )
};

const styles = StyleSheet.create({
  btn: {
    paddingVertical: 5,
    paddingHorizontal: 20,
    borderRadius: 5,
  },
  byName: {backgroundColor: '#f76c6c',},
  byContact: {backgroundColor: '#00A082',},
  btnText: {
    color: '#fff',
    fontSize: 15,
  },
})

export default SearchBtn;
