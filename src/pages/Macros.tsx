import type { Goal, Meal } from "../types/types";

type MacrosProps = {
    currentDate:Date;
    meals:Meal[];
    goals:Goal[];
};

function Macros({currentDate, meals, goals}:MacrosProps) {

    return <>
        {/* we might not need this if because we should still have a tracking component without the goals, just to see what macros we ate today*/}
        {goals.length > 0 && <>
            {goals?.find((goal) => goal.type === 'calories') && <div className='bg-white shadow-2xl rounded-3xl px-4 py-2'>
                <p>{currentDate.toDateString()}</p>
                {meals.map((meal, i) => <p key={i}>{meal.name}, cal:{meal.calories}, protein:{meal.protein}g, fat:{meal.fat}g, carbs:{meal.carbs}g</p>)}
            </div>}
        </>}

        {/* same as above, let's see later on */}
        {goals.length <= 0 && <>
            <p>No goals set.</p>
        </>}
    </>;
}

export default Macros;