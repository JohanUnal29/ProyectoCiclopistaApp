import { FlatList, StyleSheet, Text, View } from 'react-native'
import categories from "../../data/categories.json"
import Category from './Category'

const CategoryList = ({setCategorySelected}) => {
    return (
      <FlatList
          style={styles.container}
          data={categories}
          keyExtractor={item => item}
          renderItem={({item}) => <Category setCategorySelected={setCategorySelected} category={item}/>}
      />
    )
  }
  
  export default CategoryList
  
  const styles = StyleSheet.create({
      container:{
          width:"100%",
          
      }
  })