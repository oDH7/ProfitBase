import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    backgroundColor: "#FFD7A9",
    flex: 1,
  },
  square: {
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "white",
    borderColor: "black",
    borderRadius: 10,
    width: "70%",
    height: "40%",
  },
  modal: {
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#FFD7A9",
    flex: 1,
  },
  telas: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#FFD7A9",
    marginTop: "40%",
  },
  profitbase: {
    width: 200,
    height: 50,
    resizeMode: "contain",
    justifyContent: "center",
    alignItems: "center",
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
  },
  ethereum: {
    width: 54,
    height: 50,
  },
  solana: {
    width: 54,
    height: 50,
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
    backgroundColor: "#FF8800",
    borderColor: "white",
    width: "35%",
    fontSize: 10,
    borderWidth: 1,
    padding: 4,
    paddingLeft: 10,
    marginBottom: 20,
  },
  celularimg: {
    width: "100%",
    height: 500,
    resizeMode: "contain", // ajusta a imagem dentro do tamanho proposto
  },
  text: {
    fontSize: 18,
    marginLeft: 20,
    marginTop: 15,
    color: "black",
    fontWeight: "bold",
    alignItems: "center",
    justifyContent: "center",
  },
  iconsobre: {
    marginTop: 20,
  },
  resultadoTxt: {
    fontSize: 25,
    fontWeight: "bold",
  },
  result: {
    fontSize: 20,
  },
});
