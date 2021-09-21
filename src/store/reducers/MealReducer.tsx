import { Action } from "redux";
import { MEALS } from "../../data/data";
import Meal from "../../model/Meal";

export type appState = {
    meals: Meal[],
    filteredMeals: Meal[],
    favouriteMeals: Meal[]
}

export const initialAppState = {
    meals: MEALS,
    filteredMeals: MEALS,
    favouriteMeals: []
};

const mealsReducer = (state:appState = initialAppState, action:Action) => {
    return state;
}

export default mealsReducer;