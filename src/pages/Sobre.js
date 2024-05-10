import { View, TouchableOpacity, Text, Image } from "react-native";
import { styles } from "../styles/Style";
import { AntDesign } from "@expo/vector-icons";

// Import Componentes
import TxtComponent from "../components/TextProps";

// Import Hook useNavigation
import { useNavigation } from "@react-navigation/native";

export default function Sobre() {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.touch} onPress={() => alert("Logo")}>
        <Image
          source={require("../uploads/black.png")}
          resizeMode="contain"
          style={styles.profitbase}
        />
        <Text>Sobre a Profit Base </Text>
      </TouchableOpacity>
      <TxtComponent title="Sobre" />
      <Text style={styles.sobretext}>
        O Profit Base é um aplicativo para investidores de criptomoedas e outros
        ativos digitais. Ele oferece uma maneira simples de acompanhar o
        desempenho de suas carteiras em tempo real, permitindo que você entenda
        seus ganhos e tome decisões informadas para maximizar seus retornos.
        Simplifique sua experiência de investimento com o Profit Base.
      </Text>

      <TouchableOpacity
        style={styles.button1}
        onPress={() => navigation.navigate("CalcCripto")}
      >
        <Text style={styles.buttonText}>Calcular Crypto</Text>
      </TouchableOpacity>
      <AntDesign name="checkcircle" size={24} color="black" />
      <Text>Informações Autênticas</Text>
      <Text>Dados reais e atualizados com base nos valores de mercado.</Text>
    </View>
  );
}
