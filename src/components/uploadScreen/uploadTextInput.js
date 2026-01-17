import { Text,StyleSheet,View,TextInput } from "react-native";

export default function UploadTextInput({labelText,style,...rest}) {
  return (
  <View style={styles.uploadTextInput}>
      <Text style={{color: "#FFFFFF",fontSize: 11}}>{labelText}</Text>
      <TextInput
        style={[styles.input,style]}
        placeholderTextColor={"#585249"}
        {...rest}
      />
  </View>
  );
}

const styles = StyleSheet.create({
  uploadTextInput: {
    width: "100%",
    borderColor: "#585249",
    borderWidth: 2,
    flexDirection: "column",
    borderRadius: 10,
    gap: 10,
    paddingHorizontal: 15,
    paddingVertical: 10,
  },
  input: {
    width: "100%",
    borderColor: "#585249",
    borderWidth: 1,
    borderRadius: 10,
    color: "#FFFFFF",
    fontSize: 12,
    paddingHorizontal: 10,
    paddingVertical: 10
  }
});
