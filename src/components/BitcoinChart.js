// src/components/BitcoinChart.js
import React, { useEffect, useState } from "react";
import { View, Dimensions } from "react-native";
import { LineChart } from "react-native-chart-kit";
import axios from "axios";

const screenWidth = Dimensions.get("window").width;

const BitcoinChart = () => {
  const [chartData, setChartData] = useState({
    labels: [],
    datasets: [{ data: [] }],
  });

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "https://api.coingecko.com/api/v3/coins/bitcoin/market_chart",
          {
            params: {
              vs_currency: "usd",
              days: "1", // Last 24 hours
              interval: "minute",
            },
          }
        );

        const prices = response.data.prices;
        const labels = prices.map((price) =>
          new Date(price[0]).toLocaleTimeString([], {
            hour: "2-digit",
            minute: "2-digit",
          })
        );
        const data = prices.map((price) => price[1]);

        setChartData({
          labels: labels,
          datasets: [{ data: data }],
        });
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();

    const interval = setInterval(fetchData, 60000); // Update every minute

    return () => clearInterval(interval);
  }, []);

  return (
    <View>
      <LineChart
        data={chartData}
        width={screenWidth}
        height={220}
        yAxisLabel="$"
        yAxisSuffix="k"
        chartConfig={{
          backgroundColor: "#e26a00",
          backgroundGradientFrom: "#fb8c00",
          backgroundGradientTo: "#ffa726",
          decimalPlaces: 2,
          color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
          labelColor: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
          style: {
            borderRadius: 16,
          },
          propsForDots: {
            r: "6",
            strokeWidth: "2",
            stroke: "#ffa726",
          },
        }}
        bezier
        style={{
          marginVertical: 8,
          borderRadius: 16,
        }}
      />
    </View>
  );
};

export default BitcoinChart;
