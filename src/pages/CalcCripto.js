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
        <View style={styles.telas}>
          <TouchableOpacity style={styles.touch} onPress={() => alert("Logo")}>
            <ImageProps
              ImageUri={require("../uploads/black.png")}
              resizeMode="contain"
              ImageStyle={styles.profitbase}
            />
          </TouchableOpacity>
          <View style={styles.cryptoContainer}>
            {/* Ethereum */}

            <TouchableOpacity
              style={styles.touch}
              onPress={() => alert("Ethereum")}
            >
              <ImageProps
                ImageUri={require("../uploads/ethereum.png")}
                resizeMode="contain"
                ImageStyle={styles.ethereum}
              />
            </TouchableOpacity>

            {/* Bitcoin */}
            <TouchableOpacity
              style={styles.touch}
              onPress={() => alert("Bitcoin")}
            >
              <ImageProps
                ImageUri={require("../uploads/bitcoin.png")}
                resizeMode="contain"
                ImageStyle={styles.bitcoin}
              />
            </TouchableOpacity>

            {/* Solana */}
            <TouchableOpacity
              style={styles.touch}
              onPress={() => alert("Solana")}
            >
              <ImageProps
                ImageUri={require("../uploads/solana.png")}
                resizeMode="contain"
                ImageStyle={styles.solana}
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
              <ImageProps
                ImageUri={require("../uploads/ethereum.png")}
                resizeMode="contain"
                ImageStyle={styles.ethereum}
              />
            </TouchableOpacity>
            {/* Bitcoin */}
            <TouchableOpacity
              style={styles.touch}
              onPress={() => alert("Bitcoin")}
            >
              <ImageProps
                ImageUri={require("../uploads/bitcoin.png")}
                resizeMode="contain"
                ImageStyle={styles.bitcoin}
              />
            </TouchableOpacity>
            {/* Solana */}
            <TouchableOpacity
              style={styles.touch}
              onPress={() => alert("Solana")}
            >
              <ImageProps
                ImageUri={require("../uploads/solana.png")}
                resizeMode="contain"
                ImageStyle={styles.solana}
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
        </View>
      </ScrollView>
    </View>
  );
}
