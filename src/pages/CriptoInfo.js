import React, { useState } from "react";
import { View, TouchableOpacity, Text, Image, ScrollView } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { useFonts } from "expo-font";
import { useNavigation } from "@react-navigation/native";
import { Picker } from "@react-native-picker/picker";

import { styles } from "../styles/Style";
import TextProps from "../components/TextProps";
import TouchableOpacityProps from "../components/TouchableOpacityProps";
import ImageProps from "../components/ImageProps";

// Importe as imagens
import EthereumImage from "../uploads/ethereum.png";
import BitcoinImage from "../uploads/bitcoin.png";
import SolanaImage from "../uploads/solana.png";

export default function Info() {
  const navigation = useNavigation();
  const [fontsLoaded] = useFonts({
    "Anta-Regular": require("../uploads/fonts/Anta-Regular.ttf"),
  });

  const [selectedCrypto, setSelectedCrypto] = useState("ethereum");
  const [cryptoInfo, setCryptoInfo] = useState(null); // Adicione o estado para armazenar as informações da criptomoeda

  const cryptoData = {
    ethereum: {
      name: "Ethereum",
      description:
        "O ethereum (ETH) é a segunda maior criptomoeda por capitalização de mercado, depois do bitcoin. Além disso, a blockchain Ethereum é uma plataforma de computação descentralizada que pode executar uma ampla variedade de aplicativos, incluindo todo o universo das finanças descentralizadas (DeFi).Hoje, a rede Ethereum é utilizada para as mais diversas atividades, incluindo ferramentas financeiras, jogos e bancos de dados complexos. E seu potencial de uso futuro está limitado apenas pela imaginação dos desenvolvedores.",
      image: EthereumImage, // Adicione a imagem importada
    },
    bitcoin: {
      name: "Bitcoin",
      description:
        "O bitcoin foi a primeira criptomoeda adotada de forma ampla. Com o bitcoin, é possível enviar dinheiro digital pela internet de forma segura e direta.Ao contrário de serviços como Venmo e PayPal que dependem do sistema financeiro tradicional e de contas de crédito ou débito para transferir dinheiro, o bitcoin é descentralizado. Isso significa que duas pessoas, em qualquer lugar do mundo, podem negociar bitcoin entre si, sem o envolvimento de bancos, governos ou qualquer outra instituição.",
      image: BitcoinImage, // Adicione a imagem importada
    },
    solana: {
      name: "Solana",
      description:
        "Um dos motivos pelo qual Solana atinge velocidades de transação elevadas é a combinação do mecanismo de consenso de prova de participação e de um novo mecanismo, chamado de prova de história. O objetivo da prova de história é criar registros de tempo entre os computadores de uma rede descentralizada sem que eles precisem se comunicar e entrar em consenso.Lembretes Assim como a Ethereum, a Solana é uma plataforma de computação que pode interagir com contratos inteligentes.",
      image: SolanaImage, // Adicione a imagem importada
    },
  };

  const handlePickerChange = (value) => {
    setSelectedCrypto(value);
    setCryptoInfo(cryptoData[value]);
  };

  if (!fontsLoaded) {
    return null;
  }

  return (
    <LinearGradient
      colors={["#FFD7A9", "#FF8800"]}
      style={styles.telas}
      start={{ x: 0.5, y: 0 }}
      end={{ x: 0.5, y: 1 }}
    >
      <ScrollView>
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
            Crypto Info
          </Text>
          <Text style={[styles.text, { fontFamily: "Anta-Regular" }]}>
            Descubra mais sobre as Cryptomoedas com as informações detalhadas de
            cada uma.
          </Text>

          <Picker
            style={styles.picker}
            selectedValue={selectedCrypto}
            onValueChange={handlePickerChange}
          >
            <Picker.Item label="Ethereum" value="ethereum" />
            <Picker.Item label="Bitcoin" value="bitcoin" />
            <Picker.Item label="Solana" value="solana" />
          </Picker>
          {cryptoInfo && (
            <View style={styles.infoview}>
              <Text style={[styles.text, { fontFamily: "Anta-Regular" }]}>
                {cryptoInfo.name}
              </Text>
              <Text style={[styles.text, { fontFamily: "Anta-Regular" }]}>
                {cryptoInfo.description}
              </Text>
              <Image source={cryptoInfo.image} style={styles.cryptoinfoimg} />
              {/* Aqui você pode adicionar outras informações específicas da criptomoeda */}
            </View>
          )}
        </View>
      </ScrollView>
    </LinearGradient>
  );
}