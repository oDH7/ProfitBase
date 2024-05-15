import { View, Text, TouchableOpacity, Modal, ScrollView } from "react-native";
import { styles } from "../styles/Style";

// Import Hook useState
import React, { useState } from "react";

// Import Componentes
import TxtInputComponent from "../components/TxtInputComponent";
import TextProps from "../components/TextProps";
import TouchableOpacityProps from "../components/TouchableOpacityProps";
import { TextInput } from "react-native-web";
import ImageProps from "../components/ImageProps";

export default function CalcRendaFixa() {
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
    setValordecompra("");
    setInvestimento("");
    setValordevenda("");
    setTaxadecompra("");
    setTaxadevenda("");
    setVisible(false);

    console.log("Investimento zerado: ", investimento);
  };

  return (
    <View style={styles.container}>
      <ScrollView>
        <View style={styles.telas}>
          <TouchableOpacity style={styles.touch} onPress={() => alert("Logo")}>
            <ImageProps
              ImageUri={require("../uploads/black.png")}
              resizeMode="contain"
              ImageStyle={styles.profitbase}
            />
          </TouchableOpacity>
          <View style={styles.cryptoContainer}></View>
          <TextProps Texto={"Qual aplicação rende mais???"} />

          <TxtInputComponent
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

          <TouchableOpacity style={styles.button1} onPress={profit_loss}>
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
      </ScrollView>
    </View>
  );
}
