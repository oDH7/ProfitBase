import React from "react";
import { View } from "react-native";
// Estilização
import { styles } from "../styles/Style";
// Rotas
import { useNavigation } from "@react-navigation/native";
// Gradiente
import { LinearGradient } from "expo-linear-gradient";
// Componentes
import TouchableOpacityProps from "../components/TouchableOpacityProps";
import ImageProps from "../components/ImageProps";
// Fontes
import { useFonts } from "expo-font";

export default function Home() {
  const navigation = useNavigation();
  const [fontsLoaded] = useFonts({
    "Anta-Regular": require("../uploads/fonts/Anta-Regular.ttf"),
  });

  if (!fontsLoaded) {
    return undefined;
  }

  return (
    // Gradiente De Cor
    <LinearGradient
      colors={["#FFD7A9", "#FF8800"]}
      style={styles.telas}
      start={{ x: 0.5, y: 0 }}
      end={{ x: 0.5, y: 1 }}
    >
      <View style={styles.telas}>
        {/* Cabeçalho do código */}
        <View style={styles.header}>
          <ImageProps
            ImageStyle={styles.profitbase}
            ImageUri={require("../uploads/black.png")}
            resizeMode="contain"
          />
        </View>

        <View style={styles.cryptoContainer}>
          {/* Imagem Ethereum */}
          <TouchableOpacityProps onPress={() => alert("Ethereum")}>
            <ImageProps
              ImageStyle={styles.cryptocoin}
              ImageUri={require("../uploads/ethereum.png")}
              resizeMode="contain"
            />
          </TouchableOpacityProps>

          {/* Imagem Bitcoin */}
          <TouchableOpacityProps onPress={() => alert("Bitcoin")}>
            <ImageProps
              ImageStyle={styles.cryptocoin}
              ImageUri={require("../uploads/bitcoin.png")}
              resizeMode="contain"
            />
          </TouchableOpacityProps>

          {/* Imagem Solana */}
          <TouchableOpacityProps onPress={() => alert("Solana")}>
            <ImageProps
              ImageStyle={styles.cryptocoin}
              ImageUri={require("../uploads/solana.png")}
              resizeMode="contain"
            />
          </TouchableOpacityProps>
        </View>
      </View>
    </LinearGradient>
  );
}
