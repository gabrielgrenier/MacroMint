/* contains all our types, but we might split them in the future into different files if necessary */

export type Meal = {
    name:string;
    calories:number;
    protein:number;
    carbs:number;
    fat:number;
}
export type Day = {
    date: Date;
    meals: Meal[];
}

export type GoalType = 'protein' | 'calories' | 'fat' | 'carbs';
export type GoalComparator = 'above' | 'under';

export type Goal = {
    type: GoalType;
    comparator: GoalComparator;
    target: number;
};