import React, { useEffect, useState } from "react";
import { View, Text, ActivityIndicator } from "react-native";
import axios from "axios";
import { styles } from "../styles/Style";
import { useNavigation } from "@react-navigation/native";
import { LinearGradient } from "expo-linear-gradient";
import TouchableOpacityProps from "../components/TouchableOpacityProps";
import ImageProps from "../components/ImageProps";
import { useFonts } from "expo-font";

export default function Home() {
  const navigation = useNavigation();
  const [fontsLoaded] = useFonts({
    "Anta-Regular": require("../uploads/fonts/Anta-Regular.ttf"),
  });

  const [cryptoData, setCryptoData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchCryptoData();
    const interval = setInterval(fetchCryptoData, 300000); // Atualizar a cada 5 minutos (300000 ms)
    return () => clearInterval(interval); // Limpar intervalo ao desmontar o componente
  }, []);

  const fetchCryptoData = async () => {
    setLoading(true); // Mostrar indicador de carregamento enquanto busca os dados
    try {
      const response = await axios.get(
        "https://api.coingecko.com/api/v3/coins/markets",
        {
          params: {
            vs_currency: "brl",
            ids: "bitcoin,ethereum,solana",
          },
        }
      );
      setCryptoData(response.data);
    } catch (error) {
      if (error.response && error.response.status === 429) {
        console.error("Muitas solicitações. Tentando novamente em 1 minuto.");
        setTimeout(fetchCryptoData, 60000); // Tentar novamente em 1 minuto
      } else {
        console.error(error);
      }
    } finally {
      setLoading(false); // Esconder indicador de carregamento após a busca
    }
  };

  const formatMarketCap = (marketCap) => {
    if (marketCap >= 1e12) {
      return `R$${(marketCap / 1e12).toFixed(1)} trilhões`;
    } else if (marketCap >= 1e9) {
      return `R$${(marketCap / 1e9).toFixed(1)} bilhões`;
    } else if (marketCap >= 1e6) {
      return `R$${(marketCap / 1e6).toFixed(1)} milhões`;
    } else {
      return `R$${marketCap}`;
    }
  };

  const formatChangePercentage = (change) => {
    return `${change.toFixed(1)}%`;
  };

  if (!fontsLoaded || loading) {
    return <ActivityIndicator size="large" color="#FF8800" />;
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

        <View style={styles.cryptoContainer}>
          {cryptoData.map((crypto) => (
            <View key={crypto.id} style={styles.cryptoItem}>
              <Text style={styles.cryptoName}>{crypto.name}</Text>
              <Text style={styles.cryptoPrice}>R${crypto.current_price}</Text>
              <Text style={styles.cryptoMarketCap}>
                Valor de Mercado: {formatMarketCap(crypto.market_cap)}
              </Text>
              <Text style={styles.cryptoChange}>
                Variação 24h:{" "}
                {formatChangePercentage(crypto.price_change_percentage_24h)}
              </Text>
            </View>
          ))}
        </View>
      </View>
    </LinearGradient>
  );
}
