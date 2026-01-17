import { StyleSheet, View, Text, Pressable } from "react-native";
import { SafeAreaView } from 'react-native-safe-area-context';
import { ArrowLeft } from 'lucide-react-native';
import OrderDetailIcon from "./orderDetailIcon";
import OrderIndicator from "./orderIndicator";
export default function OrderDetail({ navigation,route }) {
  
  const item = route.params;
  let indicator_color;
  if(item.indicator_text === "new") {
    indicator_color = "#5cff69";
  } else if(item.indicator_text === "processing") {
    indicator_color = "#5cfff7";
  } else if(item.indicator_text === "cancelled") {
    indicator_color = "#FF2810";
  }

  return(
    <SafeAreaView style={styles.orderDetail}>
      <Pressable style={styles.back_navigation} onPress={() => navigation.navigate("Order")}>
        <ArrowLeft size={15} color={"#0097FF"} />
        <Text style={{color:"#0097FF"}}>Back to orders</Text>
      </Pressable>
      <View style={styles.orderDetailCard}>
        <View style={{flexDirection: "row", justifyContent:"space-between", alignItems: "center"}}>
          <View>
            <Text style={{color: "#FFFFFF"}}>#{item.order_id}</Text>
            <Text style={{color: "#C7BCAC",fontSize: 12}}>{item.time_elapsed} minutes ago</Text>
          </View>
          <OrderIndicator labelText={item.indicator_text} colour={indicator_color}/>
        </View>
        <View style={styles.info}>
          <OrderDetailIcon type={"User"} labelText={"Customer"} color={"#C7BCAC"} iconText={item.customer_name} size={20} />
          <OrderDetailIcon type={"MapPin"} labelText={"Delivery Address"} color={"#C7BCAC"} iconText={item.address} size = {20}/>
          <OrderDetailIcon type={"Package"} labelText={"Items"} color={"#C7BCAC"} iconText={`${item.items_no} products`}  size={20} />
        </View>
        <View style={{flexDirection: "row", justifyContent: "space-between", alignItems: "center"}}>
          <Text style={{color: "#C7BCAC"}}>Total Amount</Text>
          <Text style={{color: "#FFFFFF"}}>Rs.{item.price_total}</Text>
        </View>
        <View style={{flexDirection: "row", justifyContent: "space-between", alignItems: "center"}}>
          <Pressable
            style={{
              backgroundColor: "#455bff",
              borderColor: "#455bff",
              paddingHorizontal: 25,
              paddingVertical: 10,
              borderRadius: 10
            }}
          >
            <Text style={{color: "#FFFFFF"}}>Process Order</Text>
          </Pressable>
          <Pressable
          style={{
              borderWidth: 1,
              borderRadius: 10,
              borderColor: "#C7BCAC",
              paddingVertical: 10,
              paddingHorizontal: 25,
            }}>
            <Text style={{color: "#FFFFFF"}}>Contact</Text>
          </Pressable>
        </View>
      </View>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  orderDetail: {
    flex: 1,
    backgroundColor: "#000507",
    gap: 20,
    alignItems: "center"
  },
  back_navigation: {
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
    width: "90%"
  },
  orderDetailCard: {
    borderColor: "#585249",
    borderWidth: 1,
    borderRadius: 10,
    padding: 10,
    width: "90%",
    gap: 15
  },
  info: {
    flexDirection: "column",
    gap: 10,
  }
});
