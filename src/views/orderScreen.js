import { StyleSheet, FlatList, Pressable} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import OrderCard from '../components/orderScreen/orderCard';

export default function OrderScreen({navigation}) {
  try {
  } catch (e) {
  }
  let orders = [
    { order_id: "ORD-121", customer_name:"John", items_no:22, time_elapsed:35, price_total:2333, address:"123 Street,Nyc", indicator_text: "new"},
    { order_id: "ORD-122", customer_name:"John", items_no:22, time_elapsed:35, price_total:2333, address:"123 Street,Nyc", indicator_text: "new"},
    { order_id: "ORD-123", customer_name:"John", items_no:22, time_elapsed:35, price_total:2333, address:"123 Street,Nyc", indicator_text: "new"},
    { order_id: "ORD-124", customer_name:"John", items_no:22, time_elapsed:35, price_total:2333, address:"123 Street,Nyc", indicator_text: "new"},
    { order_id: "ORD-125", customer_name:"John", items_no:22, time_elapsed:35, price_total:2333, address:"123 Street,Nyc", indicator_text: "new"},
    { order_id: "ORD-126", customer_name:"John", items_no:22, time_elapsed:35, price_total:2333, address:"123 Street,Nyc", indicator_text: "new"},
    { order_id: "ORD-126", customer_name:"John", items_no:22, time_elapsed:35, price_total:2333, address:"123 Street,Nyc", indicator_text: "new"},
    { order_id: "ORD-126", customer_name:"John", items_no:22, time_elapsed:35, price_total:2333, address:"123 Street,Nyc", indicator_text: "new"},
    { order_id: "ORD-126", customer_name:"John", items_no:22, time_elapsed:35, price_total:2333, address:"123 Street,Nyc", indicator_text: "new"},
  ]

  const handleOrder = (navigation,item) => {
    navigation.navigate("OrderDetail",item);
  }
  return (
    <SafeAreaView 
      showsVerticalScrollIndicator={false}
      style={{flex:1,backgroundColor: "#000507"}}>
      <FlatList
      data={orders}
      renderItem={({item}) => 
          <Pressable onPress={() => handleOrder(navigation,item)}>
          <OrderCard 
          order_id={item.order_id} 
          customer_name={item.customer_name} 
          items_no={item.items_no} 
          time_elapsed={item.time_elapsed} 
          price_total={item.price_total}/>
          </Pressable>}
        contentContainerStyle={styles.container}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "column",
    gap: 10,
    paddingBottom: 30,
    paddingTop: 10,
  },
});
