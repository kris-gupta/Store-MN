import { StyleSheet,Text, View } from 'react-native';
import OrderCardIcon from './orderCardIcon';
import OrderIndicator from './orderIndicator';

export default function OrderCard(
  {order_id,
    customer_name,
    items_no,
    time_elapsed,
    price_total,
    indicator_text = "new",
  }) {
  let indicator_color;
  if(indicator_text === "new") {
    indicator_color = "#5cff69";
  } else if(indicator_text === "processing") {
    indicator_color = "#5cfff7";
  } else if(indicator_text === "cancelled") {
    indicator_color = "#FF2810";
  }
  return(
    <View style={styles.orderCard}>
      <View style={styles.id}>
        <View style={{flexDirection: "column"}}>
          <Text style={{fontSize: 15,color: "#FFFFFF"}}>#{order_id}</Text>
          <Text style={{fontSize: 12,color: "#FFFFFF"}}>{customer_name}</Text>
        </View>
        <OrderIndicator labelText={indicator_text} colour={indicator_color}/>
      </View>
      <View style={styles.stats}>
        <OrderCardIcon icon={"Package"} size={20} colour={"#FFFFFF"} value={items_no} label={"items"}/>
        <OrderCardIcon icon={"Hourglass"} size={20} colour={"#FFFFFF"} value={time_elapsed} label={"minutes ago"}/>
      </View>
      <View style={styles.price}>
        <Text style={{fontSize:12,color: "#FFFFFF"}}>Total</Text>
        <Text style={{fontSize:15,color: "#FFFFFF"}}>Rs.{price_total}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  orderCard: {
    flexDirection: "column",
    borderRadius: 10,
    paddingHorizontal: 15,
    paddingVertical: 20,
    width: "90%",
    justifyContent: "space-between",
    backgroundColor: "#000507",
    borderWidth: 2,
    borderRadius: 10,
    borderColor: "#585249",
    alignSelf: "center",
    gap: 15,
  },
  id: {
    flexDirection: "row",
    justifyContent: "space-between"
  },
  stats: {
    flexDirection: "row",
    gap: 20,
  },
  price: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between"
  }
})
