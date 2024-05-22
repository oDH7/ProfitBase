import { View, Text, TouchableOpacity, Modal, ScrollView } from "react-native";
import { useNavigation, useRoute } from "@react-navigation/native";
import { styles } from "../styles/Style";
import { LinearGradient } from "expo-linear-gradient";

// Import Hook useState
import React, { useState } from "react";

// Import Componentes
import TxtInputComponent from "../components/TxtInputComponent";
import TextProps from "../components/TextProps";
import TouchableOpacityProps from "../components/TouchableOpacityProps";
import { TextInput } from "react-native-web";
import ImageProps from "../components/ImageProps";
import { FontAwesome6 } from "@expo/vector-icons";

export default function CalcRendaFixa() {
  const navigation = useNavigation();
  const [investimentoinicial, setInvestimentoinicial] = useState("");
  const [aportesmensais, setAportesmensais] = useState("");
  const [periodoaplicacao, setPeriodoaplicacao] = useState("");
  const [selic, setSelic] = useState("10,4%");
  const [cdi, setCdi] = useState("");
  const [ipcaano, setIpcaano] = useState("");
  const [jurostesouroprefixado, setJurostesouroprefixado] = useState("");
  const [jurosipcamais, setJurosipcamais] = useState("");
  const [rentabilidadecdbsobrecdi, setRentabilidadecdbsobrecdi] = useState("");
  const [visible, setVisible] = useState(false);
  const [resultado, setResultado] = useState(0);

  console.log("Resultado: ", resultado);

  const renda_fixa = () => {
    const calcRendafixa =
      investimento * (valordevenda / valordecompra) -
      taxadecompra -
      taxadevenda -
      investimento;
    setResultado(calcProfitLoss); // Armazenando o resultado do cálculo
    setVisible(true);
  };

  const calcularNovamente = () => {
    setInvestimentoinicial("");
    setAportesmensais("");
    setPeriodoaplicacao("");
    setSelic("");
    setCdi("");
    setIpcaano("");
    setJurostesouroprefixado("");
    setJurosipcamais("");
    setRentabilidadecdbsobrecdi("");
    setVisible(false);

    console.log("Investimento zerado: ", investimento);
  };

  return (
    <ScrollView>
      <LinearGradient
        colors={["#FFD7A9", "#FF8800"]}
        style={styles.telas}
        start={{ x: 0.5, y: 0 }}
        end={{ x: 0.5, y: 1 }}
      >
        <View style={styles.telas}>
          <TouchableOpacityProps
            style={styles.touch}
            OnPress={() => navigation.navigate("Home")}
          >
            <ImageProps
              ImageUri={require("../uploads/black.png")}
              resizeMode="contain"
              ImageStyle={styles.profitbase}
            />
          </TouchableOpacityProps>
          <View style={styles.cryptoContainer}></View>
          <Text style={styles.text}> Qual Aplicação rende mais ?</Text>
          <TxtInputComponent
            keyboardType="numeric"
            txtplace="Investimento Inicial"
            value={investimentoinicial}
            changeText={setInvestimentoinicial}
          />
          <TxtInputComponent
            txtplace="Aportes mensais"
            value={aportesmensais}
            changeText={setAportesmensais}
          />

          <TxtInputComponent
            txtplace="Período de aplicação"
            value={periodoaplicacao}
            changeText={setPeriodoaplicacao}
          />

          <TxtInputComponent
            txtplace="Selic efetiva ao ano"
            value={selic}
            changeText={setSelic}
          />

          <TxtInputComponent
            txtplace="Cdi ao ano"
            value={cdi}
            changeText={setCdi}
          />

          <TxtInputComponent
            txtplace="Projeção Ipca próximos 12 meses"
            value={ipcaano}
            changeText={setIpcaano}
          />
          <TxtInputComponent
            txtplace="Cdi ao ano"
            value={jurostesouroprefixado}
            changeText={setJurostesouroprefixado}
          />
          <TxtInputComponent
            txtplace="Cdi ao ano"
            value={jurosipcamais}
            changeText={setJurosipcamais}
          />

          <TxtInputComponent
            txtplace="Cdi ao ano"
            value={rentabilidadecdbsobrecdi}
            changeText={setRentabilidadecdbsobrecdi}
          />

          <TouchableOpacity style={styles.button1} onPress={renda_fixa}>
            <Text style={styles.buttonText}>Calcular</Text>
          </TouchableOpacity>
          <View style={styles.cryptoContainer}></View>
          <Modal visible={visible}>
            <View style={styles.modal}>
              <TouchableOpacityProps
                TouchStyle={styles.Touch}
                OnPress={calcularNovamente}
              >
                <TextProps Texto={"Fechar"} />
              </TouchableOpacityProps>
              <TextProps Texto={"Resultados:"} />

              <TextProps Texto={"Ganhos/Perdas : "} />
              <Text>R${resultado}</Text>
            </View>
          </Modal>
        </View>
      </LinearGradient>
    </ScrollView>
  );
}
