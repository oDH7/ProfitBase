import { View, Alert } from "react-native";
import { styles } from "../styles/Style";
import { useNavigation, useRoute } from "@react-navigation/native"; // Importa hooks de navegação
import { Entypo } from "@expo/vector-icons"; // Importa ícones
import React, { useState } from "react"; // Importa React e hooks
import { LinearGradient } from "expo-linear-gradient"; // Importa gradiente
import { useFonts } from "expo-font"; // Importa carregamento de fontes
// Import Components
import TxtInputComponent from "../components/TxtInputComponent";
import TextProps from "../components/TextProps";
import TouchableOpacityProps from "../components/TouchableOpacityProps";
import ImageProps from "../components/ImageProps";

export default function CalcCripto() {
  const route = useRoute(); // Obtém a rota atual
  const { controlProps } = route.params; // Obtém parâmetros da rota
  const navigation = useNavigation(); // Obtém a navegação
  const [valordecompra, setValordecompra] = useState(""); // Estado para valor de compra
  const [investimento, setInvestimento] = useState(""); // Estado para investimento
  const [valordevenda, setValordevenda] = useState(""); // Estado para valor de venda
  const [taxadecompra, setTaxadecompra] = useState(""); // Estado para taxa de compra
  const [taxadevenda, setTaxadevenda] = useState(""); // Estado para taxa de venda
  const [resultado, setResultado] = useState(0); // Estado para resultado do cálculo
  const [control, setControl] = useState(controlProps); // Estado de controle
  const [fontsLoaded] = useFonts({
    "Anta-Regular": require("../uploads/fonts/Anta-Regular.ttf"), // Carrega a fonte
  });

  if (!fontsLoaded) {
    return undefined; // Espera o carregamento das fontes
  }

  const profit_loss = () => {
    if (valordecompra === "" || valordevenda === "" || investimento === "") {
      Alert.alert("Por favor, preencha todos os campos necessários"); // Alerta se campos estiverem vazios
      return;
    }
    const calcProfitLoss =
      investimento * (valordevenda / valordecompra) -
      taxadecompra -
      taxadevenda -
      investimento; // Calcula lucro ou perda
    setResultado(calcProfitLoss); // Define o resultado
  };

  // Função para limpar os campos e recalcular
  const calcularNovamente = () => {
    setValordecompra("");
    setInvestimento("");
    setValordevenda("");
    setTaxadecompra("");
    setTaxadevenda("");
    setResultado(0); // Reseta o resultado

    setControl(true); // Reseta controle

    console.log("Investimento zerado: ", investimento);
  };

  return (
    <LinearGradient
      colors={["#FFD7A9", "#FF8800"]}
      style={styles.telas}
      start={{ x: 0.5, y: 0 }}
      end={{ x: 0.5, y: 1 }}
    >
      <View style={styles.telas}>
        <View style={styles.header}>
          <TouchableOpacityProps
            style={styles.touch}
            onPress={() => navigation.navigate("Home")} // Navega para Home
          >
            <ImageProps
              ImageUri={require("../uploads/black.png")}
              resizeMode="contain"
              ImageStyle={styles.profitbase}
            />
          </TouchableOpacityProps>
        </View>

        <TextProps
          textStyle={[styles.text, { fontFamily: "Anta-Regular" }]}
          text="Calcular Investimento (R$)"
        />

        <TxtInputComponent
          txtplace="Preço no momento da compra"
          value={valordecompra}
          changeText={setValordecompra}
        />
        <View style={styles.cryptoinput}>
          <TxtInputComponent
            txtplace="Valor Investido"
            value={investimento}
            changeText={setInvestimento}
          />

          <TxtInputComponent
            txtplace="Preço no momento da venda"
            value={valordevenda}
            changeText={setValordevenda}
          />
        </View>
        <View style={styles.cryptoinput}>
          <TxtInputComponent
            txtplace="Taxa de compra"
            value={taxadecompra}
            changeText={setTaxadecompra}
          />

          <TxtInputComponent
            txtplace="Taxa de venda"
            value={taxadevenda}
            changeText={setTaxadevenda}
          />
        </View>

        <TouchableOpacityProps style={styles.button1} onPress={profit_loss}>
          <TextProps
            textStyle={[styles.buttonText, { fontFamily: "Anta-Regular" }]}
            text="Calcular"
          />
        </TouchableOpacityProps>
        <View style={styles.square}>
          <TextProps
            textStyle={[
              styles.resultadoTxt,
              { color: resultado >= 0 ? "green" : "red" }, // Verde se positivo, vermelho se negativo
            ]}
            text={`R$${resultado.toFixed(2)}`}
            onPress={calcularNovamente}
          />
        </View>
        <TouchableOpacityProps
          TouchStyle={styles.Touch}
          onPress={calcularNovamente}
        >
          <Entypo name="cw" size={30} color="white" />
        </TouchableOpacityProps>
      </View>
    </LinearGradient>
  );
}
