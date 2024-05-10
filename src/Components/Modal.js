import React from "react";
import { Modal } from "react-native";

export default function ModalComp({ Visualizar, children }) {
  return (
    <Modal animationType="slide" transparent={true} visible={Visualizar}>
      {children}
    </Modal>
  );
}
