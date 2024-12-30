import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
function Card({Name}){
  return(<div className="w-60 h-60 rounded-xl">
    <img
      src="https://media1.giphy.com/media/z8n8dWgQ0mgEIyzlmV/giphy.gif?cid=790b7611a5ba988db1bc7457636dd163c28af6f6dbc84a77&rid=giphy.gif&ct=g"
      alt="Giphy"
      className="rounded-t-xl"
    />
    <div className="glass py-4 px-5 relative -top-[3.4rem]  rounded-b-xl z-10">
      <h1 className="font-bold  font-mono  text-xl">{Name}</h1>
    </div>
  </div>)
}
function App() {
  let [count, setCount] = useState(0);
  
  const addCount = () => {
    if(count <20){
      setCount(count + 1);
    }
  }
  const subtractCount = () => { 
    if(count > 0){
      setCount(count - 1);
    }
  }

  return (
    <>
    <div className='flex justify-center space-x-4'>
    <Card Name="React Js"/>
    <Card Name="Hridoy Molla"/>
    </div>
    
    <h1 className='text-5xl text-sky-400'>Practice React Js</h1>
    <h4>Learn react js Hooks</h4>
    <h2>Count is :{count}</h2>

    <button onClick={addCount}>Add count: {count}</button>
    <br />
    <br />
    <button onClick={subtractCount}>Subtract count: {count}</button>
      
    </>
  )
}

export default App
