import { NavigationProp } from "@react-navigation/native";
import React from "react";
import {StyleSheet} from "react-native";
import { FlatList } from "react-native-gesture-handler";
import { CATEGORIES } from "../../data/data";
import CategoryItem from "../molecules/CategoryItem/CategoryItem";

type CategoriesScreenProps={
    navigation:NavigationProp<any>;
}
const CategoriesScreen:React.FC<CategoriesScreenProps>=({navigation})=>{
    const renderGridItem = (itemData:any) => {
        return (
          <CategoryItem
          title={itemData.item.title}
          color={itemData.item.color}
          onSelect={() => {
            navigation.navigate(
              'CategoryMeals',
              {
                categoryId: itemData.item.id
              }
            );
          }}
        />)
      };
    
    return(
        <FlatList
      keyExtractor={(item, index) => item.id}
      data={CATEGORIES}
      renderItem={renderGridItem}
      numColumns={2}
    />
    );
}

const styles=StyleSheet.create({
    screen:{
        flex:1,
        justifyContent: "center",
        alignItems: "center"
    },
    gridItem: {
      flex: 1,
      margin: 15,
      height: 150
    }
})

export default CategoriesScreen;