import React from "react";
import { TouchableOpacity, Text, View, Image } from "react-native";
import { styles } from "../styles/Style";
import { useNavigation } from "@react-navigation/native";

export default function Home() {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      {/* Imagem da profitbase */}

      <TouchableOpacity style={styles.touch} onPress={() => alert("Logo")}>
        <Image
          source={require("../uploads/black.png")}
          resizeMode="contain"
          style={styles.profitbase}
        />
      </TouchableOpacity>

      {/* Seção de imagens das criptomoedas */}
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
        <TouchableOpacity style={styles.touch} onPress={() => alert("Bitcoin")}>
          <Image
            source={require("../uploads/bitcoin.png")}
            resizeMode="contain"
            style={styles.bitcoin}
          />
        </TouchableOpacity>

        {/* Solana */}
        <TouchableOpacity style={styles.touch} onPress={() => alert("Solana")}>
          <Image
            source={require("../uploads/solana.png")}
            resizeMode="contain"
            style={styles.solana}
          />
        </TouchableOpacity>
      </View>

      {/* Botões de navegação */}
      <TouchableOpacity
        style={styles.button1}
        onPress={() => navigation.navigate("Sobre")}
      >
        <Text style={styles.buttonText}>Sobre Nós</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.button1}
        onPress={() => navigation.navigate("CalcCripto")}
      >
        <Text style={styles.buttonText}>Calculadora Crypto</Text>
      </TouchableOpacity>

      {/* Segunda seção de imagens */}
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
        <TouchableOpacity style={styles.touch} onPress={() => alert("Bitcoin")}>
          <Image
            source={require("../uploads/bitcoin.png")}
            resizeMode="contain"
            style={styles.bitcoin}
          />
        </TouchableOpacity>
        {/* Solana */}
        <TouchableOpacity style={styles.touch} onPress={() => alert("Solana")}>
          <Image
            source={require("../uploads/solana.png")}
            resizeMode="contain"
            style={styles.solana}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
}
