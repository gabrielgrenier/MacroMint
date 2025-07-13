import type { Meal } from "../types/types";

type MacrosProps = {
    currentDate:Date;
    meals:Meal[];
};

function Macros({currentDate, meals}:MacrosProps) {

    return <>
        <div className='bg-white shadow-2xl rounded-3xl px-4 py-2'>
            <p>{currentDate.toDateString()}</p>
            {meals.map((meal) => <p>{meal.name}, cal:{meal.calories}, protein:{meal.protein}g, fat:{meal.fat}g, carbs:{meal.carbs}g</p>)}
        </div>

    </>;
}

export default Macros;