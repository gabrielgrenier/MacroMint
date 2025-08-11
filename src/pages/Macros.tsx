import type { Goal, Meal } from "../types/types";
import CaloriesGraph from "../components/CaloriesGraph";

type MacrosProps = {
    currentDate:Date;
    meals:Meal[];
    goals:Goal[];
};

function Macros({currentDate, meals, goals}:MacrosProps) {
    const calGoal = goals?.find((goal) => goal.type === 'calories');

    {/* TODO: If there's no meals or no goal we need to make another display to say no meals logged for that day */}
    return <>
        {/* TODO: If there's no meals, we should not display the graph and goals*/}
        <CaloriesGraph calGoal={calGoal} meals={meals} />

        <div className='bg-white shadow-sm rounded-3xl px-4 py-2 mt-28'>
            <p>{currentDate.toDateString()}</p>
            {meals.map((meal, i) => <p key={i}>{meal.name}, cal:{meal.calories}, protein:{meal.protein}g, fat:{meal.fat}g, carbs:{meal.carbs}g</p>)}
        </div>

        {/* we might not need this if because we should still have a tracking component without the goals, just to see what macros we ate today*/}
        {goals.length <= 0 && <>
            <p>No goals set.</p>
        </>}
    </>;
}

export default Macros;