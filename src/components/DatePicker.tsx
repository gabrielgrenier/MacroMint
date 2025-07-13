/* 
    The date picker component alows the users to chose a date and add a meal.
    This data will affect the content of the macros page.
*/
import { useEffect, useState } from "react";

type DatePickerProps = {
  onCalendarClick: () => void;
  onAddClick: () => void;
  onDateUpdate: (newDate:Date) => void;
};

function DatePicker({onCalendarClick, onAddClick, onDateUpdate}: DatePickerProps) {
    const [currentDate, setCurrentDate] = useState(new Date());

    useEffect(() => {
        onDateUpdate(currentDate);
    }, [currentDate])

    const updateDateByDays = (days:number) => {
        const newDate = new Date(currentDate);
        newDate.setDate(currentDate.getDate() + days);
        setCurrentDate(newDate);
    }
    

    return <div className="w-full bg-green-500 grid grid-cols-12 text-white font-bold text-3xl pb-2 pt-3">
        <div className="col-span-2 text-center">
            <button className="material-symbols-outlined -mt-1" 
                    onClick={onCalendarClick}>
                calendar_today
            </button>
        </div>

        <div className="col-span-1 text-right">
            <button className="material-symbols-outlined -mt-1 " 
                    onClick={() => updateDateByDays(-1)}>
                arrow_back_ios
            </button>
        </div>

        <div className="col-span-6 text-center text-2xl">
            {currentDate.toDateString()}
        </div>

        <div className="col-span-1 text-left">
            <button className="material-symbols-outlined -mt-1 disabled:opacity-60 transition duration-300"
                    disabled={currentDate.toDateString() == (new Date()).toDateString()}
                    onClick={() => updateDateByDays(1)}>
                arrow_forward_ios
            </button>
        </div>

        <div className="col-span-2 text-center">
            <button className="material-symbols-outlined -mt-1"
                    onClick={onAddClick}>
                add_circle
            </button>
        </div>
    </div>
}
export default DatePicker;