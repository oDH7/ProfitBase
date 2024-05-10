import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFD7A9",
    alignItems: "center",
    justifyContent: "flex-start",
    paddingTop: 200,
  },
  profitbase: {
    width: 187,
    height: 35,
    resizeMode: "contain",
    marginTop: 0, // Adiciona margem acima da imagem do header
  },
  button1: {
    backgroundColor: "#FF8800",
    borderRadius: 10,
    padding: 10,
    marginTop: 30, // Adiciona margem entre os botões do menu
  },
  buttonText: {
    color: "white",
    textAlign: "center",
  },
  bitcoin: {
    width: 54,
    height: 50,
    resizeMode: "contain",
    marginTop: 30, // Adiciona margem acima das imagens das criptomoedas
  },
  ethereum: {
    width: 54,
    height: 50,
    resizeMode: "contain",
    marginTop: 30,
  },
  solana: {
    width: 54,
    height: 50,
    resizeMode: "contain",
    marginTop: 30,
  },
  cryptoContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "40%",
    marginBottom: 20,
    marginTop: 50,
  },
  input: {
    margin: 20,
    backgroundColor: "orange",
    fontSize: 10,
    borderWidth: 1,
  },
});
