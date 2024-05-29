import React from "react";
import { Picker } from "@react-native-picker/picker";

export default function PickerProps({
  selectedValue,
  onValueChange,
  items,
  pickerStyle,
}) {
  return (
    <Picker
      selectedValue={selectedValue}
      onValueChange={onValueChange}
      style={pickerStyle}
    >
      {items.map((item, index) => (
        <Picker.Item key={index} label={item.label} value={item.value} />
      ))}
    </Picker>
  );
}
