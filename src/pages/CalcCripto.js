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
import { AntDesign } from "@expo/vector-icons";
import axios from "axios";
import { Picker } from "@react-native-picker/picker";
import React, { useState, useEffect, useCallback } from "react";
import { LinearGradient } from "expo-linear-gradient";

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
  const [selectedCrypto, setSelectedCrypto] = useState("ethereum");

  // Cache para armazenar preços das criptomoedas
  const priceCache = React.useRef({});

  useEffect(() => {
    fetchCryptoPrice(selectedCrypto);
  }, [selectedCrypto]);

  const fetchCryptoPrice = useCallback(async (cryptoId) => {
    const now = Date.now();

    // Verificar cache
    if (
      priceCache.current[cryptoId] &&
      now - priceCache.current[cryptoId].timestamp < CACHE_DURATION
    ) {
      setValordecompra(priceCache.current[cryptoId].price.toString());
      return;
    }

    try {
      const response = await axios.get(
        `https://api.coingecko.com/api/v3/simple/price?ids=${cryptoId}&vs_currencies=brl`
      );
      const price = response.data[cryptoId].brl;
      setValordecompra(price.toString());

      // Atualizar cache
      priceCache.current[cryptoId] = {
        price,
        timestamp: now,
      };
    } catch (error) {
      if (error.response && error.response.status === 429) {
        Alert.alert(
          "Muitas solicitações. Por favor, tente novamente mais tarde."
        );
      } else {
        Alert.alert("Erro ao buscar o preço da criptomoeda");
      }
      console.error(error);
      setValordecompra("");
    }
  }, []);

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
    setVisible(false);
    setControl(true);

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

          <Text style={styles.text}>Calcular Investimento (R$)</Text>

          <Picker
            selectedValue={selectedCrypto}
            style={styles.picker}
            onValueChange={(itemValue) => setSelectedCrypto(itemValue)}
          >
            <Picker.Item label="Ethereum" value="ethereum" />
            <Picker.Item label="Bitcoin" value="bitcoin" />
            <Picker.Item label="Solana" value="solana" />
          </Picker>

          <TxtInputComponent
            txtplace="Preço de compra"
            value={valordecompra}
            changeText={setValordecompra}
            editable={false} // Torna o campo não editável
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
                <Text style={styles.result}>Resultado do investimento:</Text>
                <Text
                  style={[
                    styles.resultadoTxt,
                    { color: resultado >= 0 ? "green" : "red" },
                  ]}
                >
                  R${resultado.toFixed(2)}
                </Text>

                <TouchableOpacityProps
                  TouchStyle={styles.Touch}
                  OnPress={calcularNovamente}
                >
                  <AntDesign
                    style={styles.seta}
                    name="downcircle"
                    size={30}
                    color="#FF8800"
                  />
                </TouchableOpacityProps>
              </View>
              <Image
                source={require("../uploads/black.png")}
                resizeMode="contain"
                style={styles.profitbase}
              />
            </View>
          </Modal>
        </View>
      </LinearGradient>
    </ScrollView>
  );
}
