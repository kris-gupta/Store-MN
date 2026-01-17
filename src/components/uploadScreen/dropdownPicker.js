import { useState } from 'react';
import { LogBox } from 'react-native';
import { View, Text, StyleSheet } from 'react-native';

import DropDownPicker from 'react-native-dropdown-picker';

export default function UploadScreenDropDown({items,labelText,value,open=false,setOpen,setValue,placeholderValue}) {

  LogBox.ignoreLogs(['VirtualizedLists should never be nested']);
  if(items == true) {
    items = [
      {label: "Orange",value: "orange"},
      {label: "Red",value: "Red"},
      {label: "Blue",value: "blue"},
      {label: "Purple",value: "purple"},
      {label: "Pink",value: "pink"},
      {label: "Green",value: "green"},
      {label: "Brown",value: "brown"},
    ];
  } else if(items == false){
    items = [
      {label: "S", value: "s" },
      {label: "M", value: "m" },
      {label: "L", value: "l" },
      {label: "XL", value: "xl" },
      {label: "2XL", value: "2xl" },
      {label: "3XL", value: "3xl"},
    ];
  }
  const [item,setItem] = useState(items);

  return (
    <View style={styles.contianer}>
      <Text style={{color: "#FFFFFF",fontSize: 11}}>{labelText}</Text>
      <DropDownPicker
        autoScroll={true}
        dropDownDirection="TOP"
        multiple={true}
        min={0}
        max={item.length}
        open={open}
        value={value}
        items={item}
        setOpen={setOpen}
        setValue={setValue}
        setItems={setItem}
        placeholder={placeholderValue}
        animationType="none"
        selectedItemLabelStyle={{
          color: "#2979FF",
          fontWeight: "bold",
        }}
        listItemLabelStyle={{
          color: "#FFFFFF",
        }}
        listItemContainerStyle={{
          borderBottomColor: "#1E2A38",
        }}
        style={{
          minHeight: 40,
          backgroundColor: "#000507",
          borderColor: "#585249",
          borderWidth: 1,
        }}
        textStyle={{
          color: "#FFFFFF",
          fontSize: 11,
        }}
        placeholderStyle={{
          color: "#585249",
          fontSize: 11,
        }}
        dropDownContainerStyle={{
          backgroundColor: "#000507",
          borderColor: "#585249",
          // borderColor: "#2979FF",
          color: "#FFFFFF",
        }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  contianer: {
    flexDirection: "column",
    justifyContent: "center",
    borderColor: "#585249",
    borderWidth: 2,
    paddingHorizontal: 15,
    paddingVertical: 10,
    borderRadius: 10,
    gap: 10,
  }
});
