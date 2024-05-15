import React from "react";

// Tab Navigation
import { NavigationContainer } from "@react-navigation/native"; // Importa o componente NavigationContainer de "@react-navigation/native" para envolver a navegação da aplicação.
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

// Páginas
import Home from "./src/pages/Home";
import Sobre from "./src/pages/Sobre";
import CalcCripto from "./src/pages/CalcCripto";
import CalcRendaFixa from "./src/pages/CalcRendaFixa";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import AntDesign from "@expo/vector-icons/AntDesign";
import { Octicons } from "@expo/vector-icons";
import { FontAwesome6 } from "@expo/vector-icons";

// Cria uma instância de um navegador de pilha usando createNativeTabNavigator e a armazena na constante Tab.
// Isso permite que você use esse navegador de pilha para definir a navegação em sua aplicação.
const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      {/* Componente fornecido pelo React Navigation para envolver a navegação da aplicação. */}
      <Tab.Navigator
        initialRouteName="Home"
        screenOptions={{
          tabBarActiveTintColor: "#FF8800",
          tabBarInactiveTintColor: "black",
          tabBarStyle: {
            backgroundColor: "#FFD7A9",
            height: 50,
            borderTopEndRadius: 15,
            borderTopColor: "transparent",
            padding: 10,
            shadowColor: "white",
            shadowOffset: {
              width: 0,
              height: 4,
            },
            shadowOpacity: 0,
            shadowRadius: 4.65,
            elevation: 8,
          },
        }}
      >
        {/* Componente Navigator do navegador de pilha. initialRouteName define a rota inicial da navegação. */}
        <Tab.Screen
          name="Home"
          component={Home}
          options={{
            tabBarIcon: ({ size, color }) => {
              return <FontAwesome size={25} color={color} name="home" />;
            },
            headerShown: false,
            title: "",
          }}
        />
        {/* Define uma tela com o nome "Home" e associa o componente Home a ela. */}
        <Tab.Screen
          name="Sobre"
          component={Sobre}
          options={{
            tabBarIcon: ({ size, color }) => {
              return <FontAwesome size={25} color={color} name="newspaper-o" />;
            },
            headerShown: false,
            title: "",
          }}
        />
        {/* Define uma tela com o nome "Sobre" e associa o componente Sobre a ela. */}
        <Tab.Screen
          name="CalcCripto"
          component={CalcCripto}
          options={{
            tabBarIcon: ({ color }) => {
              return <FontAwesome size={25} color={color} name="bitcoin" />;
            },
            headerShown: false,
            title: "",
          }}
          initialParams={{ controlProps: false }}
        />

        {/* Define uma tela com o nome "CalcImc" e associa o componente CalcImc a ela. */}

        <Tab.Screen
          name="CalcRendaFixa"
          component={CalcRendaFixa}
          options={{
            tabBarIcon: ({ size, color }) => {
              return <Octicons size={25} color={color} name="graph" />;
            },
            headerShown: false,
            title: "",
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
