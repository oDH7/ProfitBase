import React, { useEffect, useState } from "react";
import { View, Text, ActivityIndicator } from "react-native";
import axios from "axios"; // biblioteca usada para fazer requisições HTTP
import { styles } from "../styles/Style";
import { useNavigation } from "@react-navigation/native"; // Navegação
import { LinearGradient } from "expo-linear-gradient"; // Gradiente
import { useFonts } from "expo-font"; // Fontes
// Import Components
import TouchableOpacityProps from "../components/TouchableOpacityProps";
import ImageProps from "../components/ImageProps";
import TextProps from "../components/TextProps";

export default function Home() {
  const navigation = useNavigation();
  // indica se as fontes foram carregadas
  const [fontsLoaded] = useFonts({
    "Anta-Regular": require("../uploads/fonts/Anta-Regular.ttf"),
  });

  const [cryptoData, setCryptoData] = useState(null); // Armazena os dados das criptomoedas
  const [loading, setLoading] = useState(true); //Indica se os dados estão sendo carregados

  // Busca dados das criptomoedas ao iniciar e atualiza a cada 5 minutos, parando quando o componente é desmontado
  useEffect(() => {
    fetchCryptoData();
    const interval = setInterval(fetchCryptoData, 300000); // Atualiza a cada 5 minutos (300000 ms)
    return () => clearInterval(interval); // Limpar intervalo ao desmontar o componente
  }, []);

  const fetchCryptoData = async () => {
    setLoading(true); // Mostrar carregando enquanto busca dados
    try {
      const response = await axios.get(
        "https://api.coingecko.com/api/v3/coins/markets",
        {
          params: {
            vs_currency: "brl", // Moeda em real
            ids: "bitcoin,ethereum,solana", // Criptomoedas para buscar
          },
        }
      );
      setCryptoData(response.data); // Armazenar os dados recebidos
    } catch (error) {
      if (error.response && error.response.status === 429) {
        console.error("Muitas solicitações. Tentando novamente em 1 minuto.");
        setTimeout(fetchCryptoData, 60000); // Tentar novamente em 1 minuto
      } else {
        console.error(error); // Mostrar outros erros
      }
    } finally {
      setLoading(false); // Parar de mostrar carregando após buscar dados
    }
  };

  const formatMarketCap = (marketCap) => {
    if (marketCap >= 1e12) {
      return `R$${(marketCap / 1e12).toFixed(1)} trilhões`; // Formatar se o valor for trilhões
    } else if (marketCap >= 1e9) {
      return `R$${(marketCap / 1e9).toFixed(1)} bilhões`; // Formatar se o valor for bilhões
    } else if (marketCap >= 1e6) {
      return `R$${(marketCap / 1e6).toFixed(1)} milhões`; // Formatar se o valor for milhões
    } else {
      return `R$${marketCap}`; // Formatar se o valor for menor
    }
  };

  const formatChangePercentage = (change) => {
    return `${change.toFixed(1)}%`; // Mostrar mudança percentual com uma casa decimal
  };

  const getChangeStyle = (change) => {
    return {
      color: change >= 0 ? "green" : "red", // Verde se o valor aumentou, vermelho se diminuiu
    };
  };

  if (!fontsLoaded || loading) {
    return <ActivityIndicator size="large" color="#FF8800" />; // Mostrar carregando se as fontes ou dados ainda não estão prontos
  }

  return (
    <LinearGradient
      colors={["#FFD7A9", "#FF8800"]}
      style={styles.telas}
      start={{ x: 0.5, y: 0 }}
      end={{ x: 0.5, y: 1 }}
    >
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
          text="Bem-Vindo a Profit Base!"
          textStyle={[styles.text, { fontFamily: "Anta-Regular" }]}
        />

        <View style={styles.cryptoContainer}>
          {cryptoData.map((crypto) => (
            <View key={crypto.id} style={styles.cryptoItem}>
              <Text style={styles.cryptoName}>{crypto.name}</Text>
              {/* Nome da criptomoeda */}
              <Text style={styles.cryptoPrice}>R${crypto.current_price}</Text>
              {/* Preço atual da criptomoeda */}
              <Text style={styles.MarketCap}>
                Valor de Mercado: {formatMarketCap(crypto.market_cap)}
              </Text>
              {/* Valor de mercado formatado */}
              <View style={{ flexDirection: "row", alignItems: "center" }}>
                <Text style={styles.cryptoChange}>Variação 24h: </Text>
                <Text
                  style={getChangeStyle(crypto.price_change_percentage_24h)}
                >
                  {formatChangePercentage(crypto.price_change_percentage_24h)}
                </Text>
              </View>
            </View>
          ))}
          <TouchableOpacityProps
            style={styles.button1}
            onPress={() => navigation.navigate("CalcCripto")}
          >
            <Text style={[styles.buttonText, { fontFamily: "Anta-Regular" }]}>
              Ir para a calculadora
            </Text>
          </TouchableOpacityProps>
        </View>
      </View>
    </LinearGradient>
  );
}
