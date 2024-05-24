import { View, TouchableOpacity, Text, Image, ScrollView } from "react-native";
// Estilização
import { styles } from "../styles/Style";
// Ícones
import { AntDesign } from "@expo/vector-icons";
// Gradiente
import { LinearGradient } from "expo-linear-gradient";
// Fontes
import { useFonts } from "expo-font";

// Componentes

import TextProps from "../components/TextProps";
import TouchableOpacityProps from "../components/TouchableOpacityProps";
import ImageProps from "../components/ImageProps";
// Import Hook useNavigation
import { useNavigation } from "@react-navigation/native";

export default function Sobre() {
  const navigation = useNavigation();
  const [fontsLoaded] = useFonts({
    "Anta-Regular": require("../uploads/fonts/Anta-Regular.ttf"),
  });

  if (!fontsLoaded) {
    return undefined;
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

          <TextProps
            Texto="Sobre a Profit Base"
            TextStyle={[styles.text, { fontFamily: "Anta-Regular" }]}
          />
          <TextProps
            Texto="A Profit Base é uma calculadora de rentabilidade. Ele ajuda você a entender seus ganhos de forma simples, para que possa tomar decisões melhores sobre seus investimentos."
            TextStyle={[styles.text, { fontFamily: "Anta-Regular" }]}
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
              Texto="Ir para a calculadora"
              TextStyle={[styles.buttonText, { fontFamily: "Anta-Regular" }]}
            />
          </TouchableOpacityProps>
          <AntDesign
            style={styles.iconsobre}
            name="checkcircle"
            size={30}
            color="white"
          />
          <TextProps
            Texto="Informações Autênticas e dados reais atualizados com base nos valores de mercado."
            TextStyle={[styles.text, { fontFamily: "Anta-Regular" }]}
          />
        </View>
      </ScrollView>
    </LinearGradient>
  );
}
