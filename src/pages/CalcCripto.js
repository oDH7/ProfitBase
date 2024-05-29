import {
  View,
  Text,
  TouchableOpacity,
  Modal,
  ScrollView,
  Image,
  Dimensions,
  StatusBar,
  Alert,
} from "react-native";
import { styles } from "../styles/Style";
import { useNavigation, useRoute } from "@react-navigation/native";
import { Entypo } from "@expo/vector-icons";
import axios from "axios";
import { Picker } from "@react-native-picker/picker";
import React, { useState, useEffect, useCallback } from "react";
import { LinearGradient } from "expo-linear-gradient";
import { useFonts } from "expo-font";

const { height: DEVICE_HEIGHT } = Dimensions.get("window");

// Import Componentes
import TxtInputComponent from "../components/TxtInputComponent";
import TextProps from "../components/TextProps";
import TouchableOpacityProps from "../components/TouchableOpacityProps";
import ImageProps from "../components/ImageProps";

const CACHE_DURATION = 300000; // 5 minutos

export default function CalcCripto() {
  const route = useRoute();
  const { controlProps } = route.params;
  const navigation = useNavigation();
  const [valordecompra, setValordecompra] = useState("");
  const [investimento, setInvestimento] = useState("");
  const [valordevenda, setValordevenda] = useState("");
  const [taxadecompra, setTaxadecompra] = useState("");
  const [taxadevenda, setTaxadevenda] = useState("");
  const [visible, setVisible] = useState(false);
  const [resultado, setResultado] = useState(0);
  const [control, setControl] = useState(controlProps);
  const [fontsLoaded] = useFonts({
    "Anta-Regular": require("../uploads/fonts/Anta-Regular.ttf"),
  });

  if (!fontsLoaded) {
    return undefined;
  }

  const profit_loss = () => {
    if (valordecompra === "" || valordevenda === "" || investimento === "") {
      Alert.alert("Por favor, preencha todos os campos necessários");
      return;
    }
    const calcProfitLoss =
      investimento * (valordevenda / valordecompra) -
      taxadecompra -
      taxadevenda -
      investimento;
    setResultado(calcProfitLoss); // Armazenando o resultado do cálculo
    setVisible(true);
  };

  const calcularNovamente = () => {
    setValordecompra("");
    setInvestimento("");
    setValordevenda("");
    setTaxadecompra("");
    setTaxadevenda("");
    setResultado(0);
    setVisible(false);
    setControl(true);

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
            onPress={() => navigation.navigate("Home")}
          >
            <ImageProps
              ImageUri={require("../uploads/black.png")}
              resizeMode="contain"
              ImageStyle={styles.profitbase}
            />
          </TouchableOpacityProps>
        </View>

        <Text style={[styles.text, { fontFamily: "Anta-Regular" }]}>
          Calcular Investimento (R$)
        </Text>

        <TxtInputComponent
          txtplace="Preço de compra"
          value={valordecompra}
          changeText={setValordecompra}
          editable={false} // Torna o campo não editável
        />
        <View style={styles.cryptoinput}>
          <TxtInputComponent
            txtplace="Investimento"
            value={investimento}
            changeText={setInvestimento}
          />

          <TxtInputComponent
            txtplace="Preço de venda"
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

        <TouchableOpacity style={styles.button1} onPress={profit_loss}>
          <Text style={[styles.buttonText, { fontFamily: "Anta-Regular" }]}>
            Calcular
          </Text>
        </TouchableOpacity>
        <View style={styles.square}>
          <Text
            onPress={calcularNovamente}
            style={[
              styles.resultadoTxt,
              { color: resultado >= 0 ? "green" : "red" },
            ]}
          >
            R${resultado.toFixed(2)}
          </Text>
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
