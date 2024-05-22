import { View, TouchableOpacity, Text, Image, ScrollView } from "react-native";
import { styles } from "../styles/Style";
import { AntDesign } from "@expo/vector-icons";
import { LinearGradient } from "expo-linear-gradient";

// Import Componentes
import TxtComponent from "../components/TextProps";

// Import Hook useNavigation
import { useNavigation } from "@react-navigation/native";

export default function Sobre() {
  const navigation = useNavigation();
  return (
    <LinearGradient
      colors={["#FFD7A9", "#FF8800"]}
      style={styles.telas}
      start={{ x: 0.5, y: 0 }}
      end={{ x: 0.5, y: 1 }}
    >
      <ScrollView>
        <View style={styles.telas}>
          <TouchableOpacity
            style={styles.touch}
            onPress={() => navigation.navigate("Home")}
          >
            <Image
              source={require("../uploads/black.png")}
              resizeMode="contain"
              style={styles.profitbase}
            />
          </TouchableOpacity>
          <TouchableOpacity style={styles.touch} onPress={() => alert("Logo")}>
            <Text style={styles.text}> Sobre a Profit Base </Text>
          </TouchableOpacity>
          <TxtComponent title="Sobre" />
          <Text style={styles.text}>
            O Profit Base é um aplicativo para investidores de criptomoedas e
            outros ativos digitais. Ele oferece uma maneira simples de
            acompanhar o desempenho de suas carteiras em tempo real, permitindo
            que você entenda seus ganhos e tome decisões informadas para
            maximizar seus retornos. Simplifique sua experiência de investimento
            com o Profit Base.
          </Text>
          <Image
            style={styles.celularimg}
            source={require("../uploads/celular.png")}
          />
          <TouchableOpacity
            style={styles.button1}
            onPress={() => navigation.navigate("CalcCripto")}
          >
            <Text style={styles.buttonText}>Calcular Crypto</Text>
          </TouchableOpacity>
          <AntDesign
            style={styles.iconsobre}
            name="checkcircle"
            size={30}
            color="black"
          />
          <Text style={styles.text}>
            Informações Autênticas e dados reais atualizados com base nos
            valores de mercado.
          </Text>
          <AntDesign name="lock" size={30} color="black" />
          <Text style={styles.text}>
            Seus dados e informações estão seguros.
          </Text>
        </View>
      </ScrollView>
    </LinearGradient>
  );
}
