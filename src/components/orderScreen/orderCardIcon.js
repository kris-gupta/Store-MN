import { StyleSheet, Text, View } from 'react-native';
import * as LucideIcons from 'lucide-react-native';

export default function OrderCardIcon({icon,size,colour,value,label}) {
  const Icon = LucideIcons[icon];
  return(
  <View style={style.orderCardIcon}>
      <Icon size={size} color={colour} />
      <Text style={{color: "#FFFFFF",fontSize: 12}}>{value}</Text>
      <Text style={{color: "#FFFFFF",fontSize: 12}}>{label}</Text>
  </View>
  )
}

const style = StyleSheet.create({
  orderCardIcon: {
    flexDirection: "row",
    gap: 5,
    alignItems: "center",
    justifyContent: "center",
  }
});
