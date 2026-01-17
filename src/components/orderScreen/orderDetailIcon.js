import { View, Text, StyleSheet} from 'react-native';
import * as LucidIcons from 'lucide-react-native';
export default function OrderDetailIcon(icon) {
  const Icon = LucidIcons[icon.type];
  return (
  <View style={styles.orderDetailIcon}>
      <Icon size={icon.size} color={icon.color} />
      <View style={styles.inner}>
        <Text style={{color: "#C7BCAC",fontSize: 12}}>{icon.labelText}</Text>
        <Text style={{color: "#FFFFFF",fontSize: 12}}>{icon.iconText}</Text>
      </View>
  </View>
  )
}

const styles = StyleSheet.create({
  orderDetailIcon: {
    flexDirection: "row",
    gap: 20,
    alignItems: "center",
  },
  inner: {
    flexDirection: "column"
  }
})
