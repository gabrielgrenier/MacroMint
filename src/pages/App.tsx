import { useState } from 'react'
import DatePicker from "../components/DatePicker"
import FooterMenu from "../components/FooterMen"

function App() {
   const [selectedTab, setSelectedTab] = useState('macros');

  return <>
    <DatePicker 
      onAddClick={() => alert("not yet implemented")}
      onCalendarClick={() => alert("not yet implemented")}
    />

    <div className="px-5 py-3">
        {selectedTab === 'macros' &&<div className='bg-white shadow-2xl rounded-3xl px-4 py-2'>
          Macros blah blah
        </div>}

        {selectedTab === 'meals' &&<div className='bg-white shadow-2xl rounded-3xl px-4 py-2'>
          Meals blah blah
        </div>}

        {selectedTab === 'me' &&<div className='bg-white shadow-2xl rounded-3xl px-4 py-2'>
          Me blah blah
        </div>}

    </div>

    <FooterMenu selectedTab={selectedTab} onTabChange={setSelectedTab}/>
  </>
}

export default App
