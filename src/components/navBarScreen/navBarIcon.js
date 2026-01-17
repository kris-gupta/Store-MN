import { StyleSheet,Text,View,Pressable } from 'react-native';
import { MaterialIcons, Feather, Ionicons } from '@expo/vector-icons';
import * as LucideIcons from 'lucide-react-native';

const iconFamilies = {
  MaterialIcons,
  Feather,
  Ionicons,
};

export default function NavBarIcon(
  {iconFamily="MaterialIcons",
    icon,
    size=24,
    iconColour="#000000",
    labelText="Icon",
    textColour = "#FFFFFF",
    active = false,
    activeColour = "#FAEAFE",
    onPress}) {

  let IconComponent;
  let IconToRender;
  if(active) {
    iconColour = activeColour
    textColour = activeColour
  }

  if(iconFamily === "Lucide") {
    IconComponent = LucideIcons[icon];
    IconToRender = <IconComponent size={size} color={iconColour} />
  } else {
    IconComponent = iconFamilies[iconFamily];
    IconToRender = <IconComponent name={icon} size={size} color={iconColour} />
  }

  return (
    <Pressable onPress={onPress}>
      <View style={style.navBarIcon}>
        {IconToRender}
        <Text style={{color: textColour,fontSize: 10}}>{labelText}</Text>
      </View>
    </Pressable>
  );
}

const style = StyleSheet.create({
  navBarIcon: {
    flexDirection: "column",
    justifyContent: 'center',
    alignItems: 'center',
    gap: 5,
    padding: 10,
  }
});
