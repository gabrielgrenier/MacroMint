import { useEffect, useRef, useState } from "react";
import type { Goal, Meal } from "../types/types";
import { Pie, PieChart, ResponsiveContainer, Tooltip } from 'recharts';

type CaloriesGraphProps = {
    calGoal:Goal|undefined;
    meals: Meal[];
};

function CaloriesGraph({calGoal, meals}: CaloriesGraphProps) {
    const totalCaloriesEaten = meals.reduce((sum, meal) => sum + meal.calories, 0);
    const graphHeight = 300;
    const caloriesDivRef = useRef<HTMLDivElement>(null); // We only need one ref since we only display one div at a time, but would the ref break if we switch days?
    const [caloriesDivMargins, setCaloriesDivMargins] = useState<[number, number]>([0, 0]);

    useEffect(() => {
        if(caloriesDivRef.current){
            setCaloriesDivMargins(
                [
                    -((graphHeight + caloriesDivRef.current.clientHeight)/2), 
                    caloriesDivRef.current.clientHeight
                ]
            );
        }
    }, []);

    const caloriesGraphData = () => {
        if(calGoal && calGoal.target) {
            // We add the remaining calories object on top of the meals
            return [
                {name: "Remaining calories", value: calGoal?.target - totalCaloriesEaten}, 
                ...meals.map((meal) => ({name: meal.name, value: meal.calories})).reverse()
            ]
        }
        return []; // TODO: maybe return an error instead?
    }

    return <>
        <ResponsiveContainer width="100%" height={graphHeight}>
            <PieChart style={{outline: 'none'}} >
                <Pie dataKey="value" 
                    data={caloriesGraphData()} 
                    fill="#82ca9d" isAnimationActive={false}
                    innerRadius={120} outerRadius={140} 
                    startAngle={90} endAngle={450} /> {/* 450 = 90 + 360*/}
                <Tooltip />
            </PieChart>
        </ResponsiveContainer>

        {/* TODO: This jumps because the margin is calculated next frame, make sure we calculate the margin first, but this might be pointless also*/}
        {/* If we have a calories goal, we should display it in the middle of the circle with the total / goal*/}
        {calGoal && <div className="text-center text-4xl" style={{marginTop: caloriesDivMargins[0], marginBottom: caloriesDivMargins[1]}}>
            <div ref={caloriesDivRef}>
                <p>{totalCaloriesEaten}</p>
                <div className="h-1 w-24 bg-green-400 mx-auto"/>
                <p>{calGoal.target}</p>
            </div>
            <p className="text-lg text-gray-400 -mt-1">calories</p>
        </div>}

        {/* If we don't have a calories goal, we should only display the total calories amount */}
        {!calGoal && <div className="text-center text-4xl" style={{marginTop: caloriesDivMargins[0], marginBottom: caloriesDivMargins[1]}}> 
            <div ref={caloriesDivRef}>
                <p>{totalCaloriesEaten}</p>
            </div>
            <p className="text-lg text-gray-400 -mt-1">calories</p>
        </div>}
    </>
}

export default CaloriesGraph;