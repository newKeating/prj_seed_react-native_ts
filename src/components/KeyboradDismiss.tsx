import React from "react";
import { TouchableWithoutFeedback, Keyboard, View } from "react-native";

interface KeyboardProps {
  children: React.ReactNode;
}

const KeyboardDismiss = ({ children }: KeyboardProps) => (
  <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
    {children}
  </TouchableWithoutFeedback>
);

export default KeyboardDismiss;
