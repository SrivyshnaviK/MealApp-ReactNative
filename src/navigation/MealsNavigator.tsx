import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import CategoriesScreen from "../components/screens/CategoriesScreen";
import CategoryMealsScreen, { CategoryMealsScreenOptions } from "../components/screens/CategoryMealsScreen";
import MealDetailScreen from "../components/screens/MealDetailScreen";
import Colors from '../constants/Colors';
import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();

function MealsNavigator() {
  return (
    <NavigationContainer>
      <Stack.Navigator
          screenOptions={{
            headerStyle: {
              backgroundColor: Colors.primaryColor,
            },
            headerTintColor: "white",
            headerTitleStyle: {
              fontFamily: "open-sans",
              fontWeight: 'normal',
            },
          }}>
        <Stack.Screen name="Categories" component={CategoriesScreen} options={{headerTitle:"CATEGORIES"}}  />
        <Stack.Screen name="CategoryMeals" component={CategoryMealsScreen}  options={CategoryMealsScreenOptions}  />
        <Stack.Screen name="MealDetail" component={MealDetailScreen} options={{}} />
      </Stack.Navigator>
      </NavigationContainer>
  );
}

export default MealsNavigator;