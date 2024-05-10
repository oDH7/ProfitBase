import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFD7A9",
    alignItems: "center",
    justifyContent: "center",
    paddingTop: "30%",
    width: "100%",
  },
  profitbase: {
    width: 187,
    height: 35,
    resizeMode: "contain",
    alignItems: "center",
    justifyContent: "center",
  },
  button1: {
    backgroundColor: "#FF8800",
    borderRadius: 10,
    padding: 10,
    marginTop: 30, // Adiciona margem entre os botões do menu
    color: "white",
  },
  buttonText: {
    color: "white",
    textAlign: "center",
  },
  bitcoin: {
    width: 54,
    height: 50,
    resizeMode: "contain",
    alignItems: "center",
    justifyContent: "center",
    marginTop: 30, // Adiciona margem acima das imagens das criptomoedas
    margin: 15,
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
    padding: 4,
    paddingLeft: 10,
  },
  celularimg: {
    width: 300,
    height: 300,
    resizeMode: "contain", // ajusta a imagem dentro do tamanho proposto
  },
  sobretext: {
    fontSize: 20,
  },
});
