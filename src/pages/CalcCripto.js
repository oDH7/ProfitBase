import {
  View,
  Text,
  TouchableOpacity,
  Modal,
  Image,
  ScrollView,
} from "react-native";
import { styles } from "../styles/Style";

// Import Hook useState
import React, { useState } from "react";

// Import Componentes
import TxtInputComponent from "../components/TxtInputComponent";
import TextProps from "../components/TextProps";
import TouchableOpacityProps from "../components/TouchableOpacityProps";
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
      <ScrollView>
        <TouchableOpacity style={styles.touch} onPress={() => alert("Logo")}>
          <Image
            source={require("../uploads/black.png")}
            resizeMode="contain"
            style={styles.profitbase}
          />
        </TouchableOpacity>
        <View style={styles.cryptoContainer}>
          {/* Ethereum */}

          <TouchableOpacity
            style={styles.touch}
            onPress={() => alert("Ethereum")}
          >
            <Image
              source={require("../uploads/ethereum.png")}
              resizeMode="contain"
              style={styles.ethereum}
            />
          </TouchableOpacity>

          {/* Bitcoin */}
          <TouchableOpacity
            style={styles.touch}
            onPress={() => alert("Bitcoin")}
          >
            <Image
              source={require("../uploads/bitcoin.png")}
              resizeMode="contain"
              style={styles.bitcoin}
            />
          </TouchableOpacity>

          {/* Solana */}
          <TouchableOpacity
            style={styles.touch}
            onPress={() => alert("Solana")}
          >
            <Image
              source={require("../uploads/solana.png")}
              resizeMode="contain"
              style={styles.solana}
            />
          </TouchableOpacity>
        </View>
        <TextProps Texto={"Calcular ganhos/perdas"} />

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

        <TouchableOpacity style={styles.button1} onPress={profit_loss}>
          <Text style={styles.buttonText}>Calcular</Text>
        </TouchableOpacity>
        <View style={styles.cryptoContainer}>
          {/* Ethereum */}
          <TouchableOpacity
            style={styles.touch}
            onPress={() => alert("Ethereum")}
          >
            <Image
              source={require("../uploads/ethereum.png")}
              resizeMode="contain"
              style={styles.ethereum}
            />
          </TouchableOpacity>
          {/* Bitcoin */}
          <TouchableOpacity
            style={styles.touch}
            onPress={() => alert("Bitcoin")}
          >
            <Image
              source={require("../uploads/bitcoin.png")}
              resizeMode="contain"
              style={styles.bitcoin}
            />
          </TouchableOpacity>
          {/* Solana */}
          <TouchableOpacity
            style={styles.touch}
            onPress={() => alert("Solana")}
          >
            <Image
              source={require("../uploads/solana.png")}
              resizeMode="contain"
              style={styles.solana}
            />
          </TouchableOpacity>
        </View>

        <Modal visible={visible}>
          <View>
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
      </ScrollView>
    </View>
  );
}
