import React from "react";
import {Text, View, StyleSheet} from "react-native";
import Button from "../atoms/Button/Button";
import { CATEGORIES } from "../../data/data";
import { NavigationProp, RouteProp } from "@react-navigation/native";

export type CategoriesScreenProps={
    navigation:NavigationProp<any>;
    route: RouteProp<any>;
}
const CategoryMealsScreen:React.FC<CategoriesScreenProps>=({route, navigation})=>{
    const categoryId=route.params!.categoryId;
    const selectedCategory=CATEGORIES.find(cat=>cat.id==categoryId)
    return(
        <View style={styles.screen}>
            <Text>The Categories Screen!!!</Text>
            <Text>{selectedCategory?.title}</Text>
            <Button  title="Go to Meal Detail Screen" onPress={()=>{
                navigation.navigate("MealDetail");
            }}/>
        </View>
    );
}
export const CategoryMealsScreenOptions=(navigationData:any)=>{
    const categoryId=navigationData.route.params.categoryId;
    const selectedCategory=CATEGORIES.find(cat=>cat.id==categoryId);
    return {
        title: selectedCategory?.title
    }
}
const styles=StyleSheet.create({
    screen:{
        flex:1,
        justifyContent: "center",
        alignItems: "center"
    }
})


export default CategoryMealsScreen;