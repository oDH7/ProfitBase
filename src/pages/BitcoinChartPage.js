// src/pages/BitcoinChartPage.js
import React from "react";
import { View, StyleSheet } from "react-native";
import BitcoinChart from "../components/BitcoinChart"; // Ajuste o caminho conforme necessário

const BitcoinChartPage = () => {
  return (
    <View style={styles.container}>
      <BitcoinChart />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#fff",
  },
});

export default BitcoinChartPage;
