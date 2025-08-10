import { useEffect, useState } from 'react'
import DatePicker from "../components/DatePicker"
import FooterMenu from "../components/FooterMenu"
import type { Goal, Meal, Day } from '../types/types';
import MacrosPage from './Macros';

function App() {
  const [selectedTab, setSelectedTab] = useState('macros');
  const [currentDate, setCurrentDate] = useState(new Date());

  // temp while we don't have Supabase setup
  const [meals, setMeals] = useState<Meal[]>([
    {name: "meal1", calories: 180, fat: 9, protein: 12, carbs: 5},
    {name: "meal2", calories: 150, fat: 5, protein: 6, carbs: 8},
    {name: "meal3", calories: 320, fat: 10, protein: 15, carbs: 10},
  ]);

  // TODO: Use days for the meals instead, select the day depending on the selected day
  const [days, setDays] = useState<Day[]>([]);
  



  const [goals, setGoals] = useState<Goal[]>([
    {type: 'protein', comparator: 'above', target: 160},
    {type: 'calories', comparator: 'under', target: 2500},
    {type: 'fat', comparator: 'under', target: 50},
  ]);
   //-----------------------------------------------------

  useEffect(() => {
    console.log(currentDate);
  }, [currentDate])

  return <>
    <DatePicker 
      onAddClick={() => alert("not yet implemented")}
      onCalendarClick={() => alert("not yet implemented")}
      onDateUpdate={(newDate:Date) => {
          if(newDate.toDateString() != currentDate.toDateString())
            setCurrentDate(newDate)
        }
      }
    />

    <div className="px-5 py-3">
        {selectedTab === 'macros' && <MacrosPage currentDate={currentDate} meals={meals} goals={goals}/>}

        {selectedTab === 'meals' &&<div className='bg-white shadow-sm rounded-3xl px-4 py-2'>
          Meals page (not yet implemented)
        </div>}

        {selectedTab === 'me' &&<div className='bg-white shadow-sm rounded-3xl px-4 py-2'>
          Account page (not yet implemented)
        </div>}

        {selectedTab === 'workout' &&<div className='bg-white shadow-sm rounded-3xl px-4 py-2'>
          Workout page (not yet implemented)
        </div>}

    </div>

    <FooterMenu selectedTab={selectedTab} onTabChange={setSelectedTab}/>
  </>
}

export default App
