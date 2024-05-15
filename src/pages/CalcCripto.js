import {
  View,
  Text,
  TouchableOpacity,
  Modal,
  ScrollView,
  Image,
  Animated,
  Dimensions,
  StatusBar,
  TextInput,
} from "react-native";
import { styles } from "../styles/Style";
import { useNavigation, useRoute } from "@react-navigation/native";
import { AntDesign } from "@expo/vector-icons";

// Import Hook useState
import React, { useState, useEffect } from "react";

const { height: DEVICE_HEIGHT } = Dimensions.get("window");

// Import Componentes
import TxtInputComponent from "../components/TxtInputComponent";
import TextProps from "../components/TextProps";
import TouchableOpacityProps from "../components/TouchableOpacityProps";
import ImageProps from "../components/ImageProps";
import Home from "./Home";

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
  const [heightValue] = useState(new Animated.Value(0));
  const [control, setControl] = useState(controlProps);

  useEffect(() => {
    if (!visible) {
      Animated.timing(heightValue, {
        toValue: DEVICE_HEIGHT,
        duration: 5000,
        useNativeDriver: false, // `useNativeDriver` não é suportado para animações de layout
      }).start();
    }
  }, [visible]);

  const profit_loss = () => {
    const calcProfitLoss =
      investimento * (valordevenda / valordecompra) -
      taxadecompra -
      taxadevenda -
      investimento;
    setResultado(calcProfitLoss); // Armazenando o resultado do cálculo
    setVisible(true);

    heightValue.setValue(0);
  };

  const calcularNovamente = () => {
    setValordecompra("");
    setInvestimento("");
    setValordevenda("");
    setTaxadecompra("");
    setTaxadevenda("");
    setVisible(false);
    setControl(true);

    console.log("Investimento zerado: ", investimento);
  };

  return (
    <ScrollView>
      <View style={{ flex: 1, backgroundColor: "#FFD7A9" }}>
        {control ? (
          <Animated.View
            style={{
              width: "100%",
              height: heightValue,
            }}
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
              <TextProps Texto={"Calcular Investimento"} />

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
                <StatusBar backgroundColor="#FFD7A9" />
                <View style={styles.modal}>
                  <Image
                    source={require("../uploads/black.png")}
                    resizeMode="contain"
                    style={styles.profitbase}
                  />
                  <View style={styles.square}>
                    <TouchableOpacityProps
                      TouchStyle={styles.Touch}
                      OnPress={calcularNovamente}
                    >
                      <AntDesign
                        style={styles.closeicon}
                        name="downcircle"
                        size={30}
                        color="#FF8800"
                      />
                    </TouchableOpacityProps>
                    <TextProps Texto={"Resultados:"} />
                    <Text>R${resultado}</Text>
                  </View>
                  <Image
                    source={require("../uploads/black.png")}
                    resizeMode="contain"
                    style={styles.profitbase}
                  />
                </View>
              </Modal>
            </View>
          </Animated.View>
        ) : (
          <View style={styles.telas}>
            <TouchableOpacity
              style={styles.touch}
              onPress={() => navigation.navigate("Home")}
            >
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
            <TextProps Texto={"Calcular Investimento"} />

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
              <View style={styles.modal}>
                <Image
                  source={require("../uploads/black.png")}
                  resizeMode="contain"
                  style={styles.profitbase}
                />
                <View style={styles.square}>
                  <TextProps
                    TextStyle={styles.resultadoTxt}
                    Texto={"Resultados:"}
                  />
                  <Text style={styles.result}>R${resultado}</Text>

                  <TouchableOpacityProps OnPress={calcularNovamente}>
                    <AntDesign name="downcircle" size={30} color="#FF8800" />
                  </TouchableOpacityProps>
                </View>
              </View>
            </Modal>
          </View>
        )}
      </View>
    </ScrollView>
  );
}
