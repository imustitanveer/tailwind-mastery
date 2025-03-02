import { useState } from 'react'
import './App.css'

function App() {
  const [theme, setTheme] = useState(false)
  //hover & group hover, pseudo, screen sizes (breakpoints), custom inputes, dynamic inputs, animations, hidden vs inline
  return (
    <>
      <div className={'text-green-400 text-6xl p-50 min-h-screen flex flex-col md:flex-row justify-center items-center' + (theme ? ' bg-slate-900 text-white' : ' bg-yellow-200 text-violet-700')}>
        <button onClick={() => setTheme(!theme)} className='bg-white relative after:absolute after:bg-green-300 after:inset-0 after:z-0 after:blur before:absolute before:bg-blue-300 before:-top-10 before:-left-10 before:h-full before:w-full before:z-0 before:blur text-slate-900 group p-10 hover:opacity-50 hover:cursor-pointer duration-300 rounded-2xl flex items-center gap-4'>
          <h1 className='z-10'>BUTTON</h1>
          <span className='z-10 h-10 w-10 bg-amber-800 group-hover:rotate-45 duration-300'></span>
        </button>
        <button className='bg-white relative after:absolute after:bg-rose-300 after:inset-0 after:z-0 after:blur before:absolute before:bg-amber-300 before:-top-10 before:-left-10 before:h-full before:w-full before:z-0 before:blur text-slate-900 group p-10 hover:opacity-50 hover:cursor-pointer duration-300 rounded-2xl flex items-center gap-4'>
          <h1 className='z-10'>BUTTON</h1>
          <span className='z-10 h-10 w-10 rounded-full relative after:absolute after:inset-1 after:bg-white after:rounded-full before:absolute before:bg-white before:h-full before:w-2 before:top-4 before:left-1/2 before-translate-x-1/2 overflow-hidden bg-amber-800 group-hover:animate-spin duration-300'></span>
        </button>
      </div>
    </>
  )
}

export default App