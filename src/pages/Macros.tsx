import type { Goal, Meal } from "../types/types";
import { Pie, PieChart, ResponsiveContainer, Tooltip } from 'recharts';

type MacrosProps = {
    currentDate:Date;
    meals:Meal[];
    goals:Goal[];
};

function Macros({currentDate, meals, goals}:MacrosProps) {

    // TODO: Add a check for a calories goal, otherwise we should not calculate this since we need the total amount of calories to know how much is left
    const caloriesGraphData = [
        {name: "remaining calories", value: 400},
        ...meals.map((meal) => ({name: meal.name, value: meal.calories})).reverse() //We reverse because we want the display is reversed with the graph
    ];

    return <>
        <ResponsiveContainer width="100%" height={200}>
            <PieChart style={{outline: 'none'}}>
                <Pie dataKey="value" data={caloriesGraphData} innerRadius={40} outerRadius={80} fill="#82ca9d" startAngle={90} endAngle={450}/> {/* 450 = 90 + 360*/}
                <Tooltip />
            </PieChart>
        </ResponsiveContainer>
        {/* we might not need this if because we should still have a tracking component without the goals, just to see what macros we ate today*/}
        {goals.length > 0 && <>
            {goals?.find((goal) => goal.type === 'calories') && <div className='bg-white shadow-sm rounded-3xl px-4 py-2'>
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