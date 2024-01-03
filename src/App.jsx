// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'
import Sidebar from './assets/components/sidebar/Sidebar'
import TabMenu from './assets/components/tabsmenu/Tabs'

function App() {
  // const [count, setCount] = useState(0)

  return (
    <>
      <div className="App mx-[170px] mt-[30px] mb-[84px] flex gap-10 relative">
          
          <Sidebar />
          <TabMenu />
      </div>
    </>
  )
}

export default App;
