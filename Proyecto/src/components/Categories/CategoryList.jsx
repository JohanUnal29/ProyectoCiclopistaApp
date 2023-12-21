import { FlatList, StyleSheet, Text, View } from 'react-native'
import categories from "../../data/categories.json"
import Category from './Category'

const CategoryList = ({navigation,route}) => {
    return (
      <FlatList
          style={styles.container}
          data={categories}
          keyExtractor={item => item}
          renderItem={({item}) => <Category navigation={navigation} route={route} category={item} />}
      />
    )
  }
  
  export default CategoryList
  
  const styles = StyleSheet.create({
      container:{
          width:"100%",
          
      }
  })