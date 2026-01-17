import { View, Text, StyleSheet, TextInput } from "react-native";
export default function NumericInput({labelText, placeholder, value,onChange}) {
  return (
  <View style={styles.container}>
      <Text style={{color: "#FFFFFF",fontSize: 11}}>{labelText}</Text>
      <TextInput
        keyboardType="decimal-pad"
        inputMode="decimal"
        value={value}
        onChangeText={onChange}
        placeholder={placeholder}
        style={styles.input}
        placeholderTextColor={"#585249"}
      />
  </View>
  );
}

const styles = StyleSheet.create({
  container: {
    borderColor: "#585249",
    borderWidth: 2,
    paddingHorizontal: 15,
    paddingVertical: 10,
    borderRadius: 10,
    flexGrow: 1,
    flexDirection: "column",
    gap: 10
  },
  input: {
    color: "#FFFFFF",
    borderColor: "#585249",
    borderWidth: 1,
    fontSize: 11,
    borderRadius: 10,
    paddingHorizontal: 10,
    paddingVertical: 10
  }
})
