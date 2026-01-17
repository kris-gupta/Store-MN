import { Text, View, StyleSheet, Pressable } from 'react-native';
import { Alert } from "react-native";
import { useState } from 'react';
import * as LucideIcons from 'lucide-react-native';
import * as ImagePicker from "expo-image-picker";

export default function UploadImageInput(
  { labelText="Product Image",
    imageIcon="Image",
    imageLabelText="Tap to upload image",
    iconColor = "#FFFFFF",
    size=60,
    setImage
  }) {
  const [imageCount,setImageCount] = useState(0);

  const pickImage = async () => {
    const permission = await ImagePicker.requestMediaLibraryPermissionsAsync();

    if(!permission.granted) {
      Alert.alert(
        "Permission Required"
      );
      return;
    }

    const result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ['images'],
      quality: 1,
    });

    if(!result.canceled) {
      setImageCount(imageCount + 1);
      console.log("HELLO" + imageCount);
      console.log(imageCount);
      setImage(result.assets[0].uri);
    }
  }
  // <Text style={{color: "#FFFFFF", fontSize: 12}}>{labelText}</Text>
  const IconComponent = LucideIcons[imageIcon];
  return (
    <View style={styles.outer}>
      <Text style={{color: "#FFFFFF", fontSize: 12}}>{labelText}</Text>
      { imageCount > 0 ? <Text style={{color: "#FFFFFF"}}>{imageCount}</Text> : null}
      <Pressable style={styles.inner} onPress={() => pickImage()}>
        <IconComponent size={size} color={iconColor} />
        <Text style={{color: "#FFFFFF",fontSize: 11}}>{imageLabelText}</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  outer: {
    borderColor: "#585249",
    borderRadius: 10,
    borderWidth: 2,
    paddingHorizontal: 10,
    paddingVertical: 20,
    gap: 10,
  },
  inner: {
    borderColor: "#585249",
    borderRadius: 10,
    borderWidth: 1,
    paddingHorizontal: 10,
    paddingVertical: 30,
    alignItems: "center",
    gap: 10,
  }
})
