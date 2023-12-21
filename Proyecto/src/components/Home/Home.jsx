import { StyleSheet } from 'react-native'
import Header from '../subComponents/Header';

import CategoryList from "../Categories/CategoryList.jsx"; 

const Home = ({setCategorySelected}) => {
  
    return (
          <>
              <Header title='Categories' />
              <CategoryList setCategorySelected={setCategorySelected}/>
          </>
    )
  }
  
  export default Home