import { View, Text, TouchableOpacity, Modal } from "react-native";
import { styles } from "../styles/Style";

// Import Hook useState
import React, { useState } from "react";

// Import Componentes
import TxtInputComponent from "../components/TxtInputComponent";
import { TextInput } from "react-native-web";

export default function CalcCripto() {
  const [valordecompra, setValordecompra] = useState("");
  const [investimento, setInvestimento] = useState("");
  const [valordevenda, setValordevenda] = useState("");
  const [taxadecompra, setTaxadecompra] = useState("");
  const [taxadevenda, setTaxadevenda] = useState("");
  const [visible, setVisible] = useState(false);
  const [resultado, setResultado] = useState(0);

  console.log("Resultado: ", resultado);

  const profit_loss = () => {
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
    setVisible(false);

    console.log("Investimento zerado: ", investimento);
  };

  return (
    <View style={styles.container}>
      <Text>Calcular ganhos/perdas</Text>
      <TxtInputComponent
        txtplace="Preço de compra"
        value={valordecompra}
        changeText={setValordecompra}
      />
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

      <TouchableOpacity onPress={profit_loss}>
        <Text>Calcular </Text>
      </TouchableOpacity>

      <Modal visible={visible}>
        <View>
          <Text>Modal</Text>
          <TouchableOpacity onPress={calcularNovamente}>
            <Text>Fechar</Text>
          </TouchableOpacity>
          <Text>Ganhos/Perdas :R${resultado}</Text>
        </View>
      </Modal>
    </View>
  );
}
