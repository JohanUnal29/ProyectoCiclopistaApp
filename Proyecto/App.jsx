import { useState } from "react";
import {
  SafeAreaView ,StatusBar 
} from "react-native";


import { styles } from "./styles/styles.js";

import { useFonts } from "expo-font"
import { colors } from "./src/global/colors.jsx";

import Navigator from "./src/navigation/Navigator.jsx";

export default function App() {

  const [categorySelected, setCategorySelected] = useState("")

  const [fontLoaded] = useFonts({
    Josefin: require("./assets/Fonts/JosefinSans-Bold.ttf")
  })

  if (!fontLoaded) return null

  return (
    <>
      <StatusBar
        backgroundColor={colors.red}
      />
      <Navigator/>
    </>
  );
}


