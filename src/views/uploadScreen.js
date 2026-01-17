import { StyleSheet, ScrollView, Text, Pressable, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Feather } from '@expo/vector-icons';
import { useState } from 'react';

import UploadTextInput from '../components/uploadScreen/uploadTextInput';
import UploadImageInput from '../components/uploadScreen/uploadImageInput';
import UploadScreenDropdown from '../components/uploadScreen/dropdownPicker';
import NumericInput from '../components/uploadScreen/uploadScreenNumericInput';

export default function UploadScreen() {
  const [colourOpen,colourSetOpen] = useState(false);
  const [sizeOpen,sizeSetOpen] = useState(false);
  const [product,setProduct] = useState({
    image: [],
    size: [],
    colour: [],
    name: "",
    type: "",
    design: "",
    id: "",
    price: "",
    stock: "",
    description: ""
  });

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView 
        showsVerticalScrollIndicator={false}
        scrollEnabled={!colourOpen && !sizeOpen}
        style={{width: "90%"}}
        contentContainerStyle={{
          gap: 20
        }}>
        <UploadImageInput 
          setImage={prev => [...prev,image]}
        />
        <UploadTextInput 
          labelText={"Product Name"}
          value={product.name}
          onChangeText={(name) => setProduct({...product,name})}
          placeholder="Enter product name"
        />
        <UploadTextInput 
          labelText={"Description"}
          value={product.description}
          onChangeText={(description) => setProduct({...product,description})}
          placeholder="Enter product description"
          multiline={true}
          numberOfLines={6}
          style={{
            paddingBottom: 70
          }}
        />
        <UploadTextInput 
          labelText={"Product Design"}
          value={product.design}
          onChangeText={(design) => setProduct({...product,design})}
          placeholder="Enter product design"
        />
        <UploadScreenDropdown
          items={true}
          labelText={"Product Colour"}
          value={product.colour}
          open={colourOpen}
          setOpen={colourSetOpen}
          placeholderValue={"Enter product colour"}
          setValue={(callback) => {
            setProduct(prev => ({
              ...prev,
              colour: callback(prev.colour)
            }))
          }}
        />
        <UploadScreenDropdown
          items={false}
          labelText={"Product Size"}
          value={product.size}
          open={sizeOpen}
          setOpen={sizeSetOpen}
          placeholderValue={"Enter product sizes"}
          setValue={(callback) => {
            setProduct(prev => ({
              ...prev,
              size: callback(prev.size)
            }))
          }}
        />
        <View style={{flexDirection: "row", justifyContent: "space-between", gap: 20}}>
          <NumericInput
            labelText={"Price(Rs)"}
            placeholder={"0"}
            value={product.price}
            onChange={(text) => {
              setProduct(prev => ({
                ...prev,
                price: text.replace(/[^0-9]/g, ""),
              }));
            }}
          />
          <NumericInput
            labelText={"Stock"}
            placeholder={"0"}
            value={product.stock}
            onChange={(text) => {
              setProduct(prev => ({
                ...prev,
                stock: text.replace(/[^0-9]/g, ""),
              }));
            }}
          />
        </View>
        <Pressable
          style={{
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "center",
            gap: 10,
            backgroundColor: "#455bff",
            paddingVertical: 10,
            borderRadius: 10,
          }}
        >
          <Feather name={"upload"} size={18} color={"#FFFFFF"} />
          <Text style={{color: "#FFFFFF",fontSize: 10}}>Add Product</Text>
        </Pressable>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#000507",
    alignItems: "center",
    justifyContent: "center"
  },
});
