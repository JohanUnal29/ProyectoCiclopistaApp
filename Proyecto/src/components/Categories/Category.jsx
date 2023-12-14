import { Pressable, StyleSheet, Text, View } from 'react-native'
import { colors } from "../../global/colors"
import CardShadow from "../subComponents/wrappers/CardShadow.jsx"

const Category = ({ category, setCategorySelected }) => {
    return (
        <Pressable onPress={() => setCategorySelected(category)}>
            <CardShadow style={styles.container}>
                <Text style={styles.text}>{category}</Text>
            </CardShadow>
        </Pressable>
    )
}

export default Category

const styles = StyleSheet.create({
    container: {
        width: "80%",
        marginHorizontal: "10%",
        backgroundColor: colors.green2,
        margin: 10,
        padding: 10,
        justifyContent: "center",
        alignItems: "center"
    }
})