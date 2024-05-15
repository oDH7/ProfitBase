import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFD7A9",
    paddingTop: "30%",
  },
  gridContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
    width: "80%",
    marginTop: 20,
  },
  gridItem: {
    width: "48%", // Para duas colunas
    marginBottom: 20,
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
  },
  profitbase: {
    width: 200,
    height: 50,
    resizeMode: "contain",
    justifyContent: "center",
    alignItems: "center",
    marginTop: "30%",
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
    width: "30%",
    backgroundColor: "#FF8800",
    borderColor: "white",
    fontSize: 10,
    borderWidth: 1,
    padding: 4,
    paddingLeft: 10,
    flexDirection: "row",
  },
  celularimg: {
    width: 300,
    height: 300,
    resizeMode: "contain", // ajusta a imagem dentro do tamanho proposto
  },
  sobretext: {
    fontSize: 20,
    marginLeft: 20,
    marginTop: 15,
    color: "black",
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
