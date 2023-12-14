import { useState } from "react";
import {
  View,
 
} from "react-native";


import { styles } from "./styles/styles.js";

import Home from "./src/components/Home/Home.jsx"
import CategoryListContainer from "./src/components/Categories/CategoryListContainer.jsx";
import { useFonts } from "expo-font"
import { Button } from "react-native";

export default function App() {

  const [categorySelected, setCategorySelected] = useState("")

  const [fontLoaded] = useFonts({
    Josefin: require("./assets/Fonts/JosefinSans-Bold.ttf")
  })

  if (!fontLoaded) return null

  return (
    <View style={styles.container}>
      <Button onPress={()=>setCategorySelected("")}>Volver Al inicio</Button>

      {categorySelected ?
        <CategoryListContainer category={categorySelected} />
        :
        <Home setCategorySelected={setCategorySelected} />
      }

    </View>
  );
}


