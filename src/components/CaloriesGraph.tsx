import type { Goal, Meal } from "../types/types";
import { Pie, PieChart, ResponsiveContainer, Tooltip } from 'recharts';

type CaloriesGraphProps = {
    calGoal:Goal|undefined;
    meals: Meal[];
};

function CaloriesGraph({calGoal, meals}: CaloriesGraphProps) {
    const totalCalories = 1250; //TODO: foreach meals, get the calories

    const caloriesGraphData = () => {
        if(calGoal && calGoal.target) {
            return [
                {name: "remaining calories", value: calGoal?.target - meals.reduce((sum, meal) => sum + meal.calories, 0)}, 
                ...meals.map((meal) => ({name: meal.name, value: meal.calories})).reverse()
            ]
        }
        return []; // TODO: maybe return an error instead?
    }

    return <>
        <ResponsiveContainer width="100%" height={300}>
            <PieChart style={{outline: 'none'}}>
                <Pie dataKey="value" data={caloriesGraphData()} innerRadius={120} outerRadius={140} fill="#82ca9d" startAngle={90} endAngle={450}/> {/* 450 = 90 + 360*/}
                <Tooltip />
            </PieChart>
        </ResponsiveContainer>

        {/* If we have a calories goal, we should display it in the middle of the circle with the total / goal*/}
        {calGoal && <div className="text-center text-4xl" style={{marginTop: -192, marginBottom: 180}}> {/* TODO: Margin top should be: height of -((goal div + height of donut div)/2)*/}
            <p>{totalCalories}</p>
            <div className="h-1 w-24 bg-green-400 mx-auto"/>
            <p>{calGoal.target}</p>
            <p className="text-lg text-gray-400 -mt-1">calories</p>
        </div>}

        {/* If we don't have a calories goal, we should only display the total calories amount */}
        {!calGoal && <div className="text-center text-4xl" style={{marginTop: -170, marginBottom: 180}}> {/* TODO: do the other div for this part */}
            <p>{totalCalories}</p>
            <p className="text-lg text-gray-400 -mt-1">calories</p>
        </div>}
        
    </>
}

export default CaloriesGraph;