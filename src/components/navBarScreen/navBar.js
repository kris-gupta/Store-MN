import { StyleSheet, View } from 'react-native';
import NavBarIcon from './navBarIcon';

export default function NavBar({ state, navigation }) {
  const iconColour = "#FFFFFF";
  const activeRoute = state.routes[state.index].name;
  console.log(activeRoute);
  return (
    <View style={style.navbar}>
      <NavBarIcon
        icon="LayoutDashboard"
        iconFamily="Lucide"
        iconColour={iconColour}
        labelText="Dashboard"
        active={activeRoute === "Dashboard"}
        activeColour="#0097FF"
        onPress={() => navigation.navigate('Dashboard')}
      />
      <NavBarIcon
        icon="Package"
        iconFamily="Lucide"
        iconColour={iconColour}
        labelText="Orders"
        activeColour="#0097FF"
        active={activeRoute === "Order" || activeRoute === "OrderDetail"}
        onPress={() => navigation.navigate('Order')}
      />
      <NavBarIcon
        icon="upload"
        iconFamily="Feather"
        iconColour={iconColour}
        activeColour="#0097FF"
        labelText="Upload"
        active={activeRoute === "Upload"}
        onPress={() => navigation.navigate('Upload')}
      />
    </View>
  );
}

const style = StyleSheet.create({
  navbar: {
    justifyContent: "space-around",
    flexDirection: "row",
    alignItems: "flex-end",
    backgroundColor: "#000507",
  }
})
