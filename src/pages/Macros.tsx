import type { Goal, Meal } from "../types/types";
import { Pie, PieChart, ResponsiveContainer, Tooltip } from 'recharts';

type MacrosProps = {
    currentDate:Date;
    meals:Meal[];
    goals:Goal[];
};

function Macros({currentDate, meals, goals}:MacrosProps) {
    const calGoal = goals?.find((goal) => goal.type === 'calories');

    const caloriesGraphData = () => {
        if(calGoal && calGoal.target) {
            return [
                {name: "remaining calories", value: calGoal?.target - meals.reduce((sum, meal) => sum + meal.calories, 0)}, 
                ...meals.map((meal) => ({name: meal.name, value: meal.calories})).reverse()
            ]
        }
        return [] // TODO: maybe return an error instead?
    }

    return <>

        {calGoal && <>
            <ResponsiveContainer width="100%" height={300}>
                <PieChart style={{outline: 'none'}}>
                    <Pie dataKey="value" data={caloriesGraphData()} innerRadius={120} outerRadius={140} fill="#82ca9d" startAngle={90} endAngle={450}/> {/* 450 = 90 + 360*/}
                    <Tooltip />
                </PieChart>
            </ResponsiveContainer>
        </>}

        <div className='bg-white shadow-sm rounded-3xl px-4 py-2'>
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