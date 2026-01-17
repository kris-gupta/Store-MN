import { View,StyleSheet,Text } from "react-native";

export default function OrderIndicator({labelText,colour}) {
  return (
  <View style={[styles.indicator,{backgroundColor: colour}]}>
      <Text style={{color: "#000000", fontSize: 10}}>{labelText}</Text>
  </View>
  );
}

const styles = StyleSheet.create({
  indicator: {
    borderRadius: 10,
    alignItems: "center",
    justifyContent: "center",
    height: 30,
    width: "20%",
  }
})
