// import { useState } from 'react'
import DatePicker from "../components/DatePicker"

function App() {
  // const [hello, setHello] = useState('test');

  return <>
    <DatePicker 
      onAddClick={() => alert("not yet implemented")}
      onCalendarClick={() => alert("not yet implemented")}
    />
    <div className='px-5 py-3'>
        <div className='bg-white shadow-2xl rounded-3xl px-4 py-2'>
          Data blah blah
        </div>
    </div>
  </>
}

export default App
