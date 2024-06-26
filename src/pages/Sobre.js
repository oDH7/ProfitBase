import React from "react";
import { View, ScrollView } from "react-native";
//
import { LinearGradient } from "expo-linear-gradient"; // Gradiente
import { AntDesign } from "@expo/vector-icons"; // Ícones
import { useFonts } from "expo-font"; // Fontes
import { useNavigation } from "@react-navigation/native"; // Navegação
import { styles } from "../styles/Style";
// Import components
import TextProps from "../components/TextProps";
import TouchableOpacityProps from "../components/TouchableOpacityProps";
import ImageProps from "../components/ImageProps";

export default function Sobre() {
  const navigation = useNavigation();
  // Verifica se a fonte foi carregada
  const [fontsLoaded] = useFonts({
    "Anta-Regular": require("../uploads/fonts/Anta-Regular.ttf"),
  });

  if (!fontsLoaded) {
    return undefined; // Espera o carregamento das fontes
  }

  return (
    <LinearGradient
      colors={["#FFD7A9", "#FF8800"]} // ele permite um degrade para a cor e deixar o site mais moderno, e para usar ele precisou do uso dsa biblioteca expo-LinearGradient
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

          <TextProps
            text="Sobre a Profit Base"
            textStyle={[styles.text, { fontFamily: "Anta-Regular" }]}
          />
          <TextProps
            text="A Profit Base é uma calculadora de rentabilidade. Ele ajuda você a entender seus ganhos de forma simples, para que possa tomar decisões melhores sobre seus investimentos."
            textStyle={[styles.text, { fontFamily: "Anta-Regular" }]}
          />
          <ImageProps
            ImageUri={require("../uploads/celular.png")}
            resizeMode="contain"
            ImageStyle={styles.celularimg}
          />
          <TouchableOpacityProps
            style={styles.button1}
            onPress={() => navigation.navigate("CalcCripto")}
          >
            <TextProps
              text="Ir para a calculadora"
              textStyle={[styles.buttonText, { fontFamily: "Anta-Regular" }]}
            />
          </TouchableOpacityProps>
          <AntDesign
            style={styles.iconsobre}
            name="checkcircle"
            size={30}
            color="white"
          />
          <TextProps
            text="Informações Autênticas e dados reais atualizados com base nos valores de mercado."
            textStyle={[styles.text, { fontFamily: "Anta-Regular" }]}
          />
        </View>
      </ScrollView>
    </LinearGradient>
  );
}
