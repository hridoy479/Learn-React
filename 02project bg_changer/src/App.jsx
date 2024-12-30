import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
function Button({color, setColor,textColor="white"}) {
  return (
    <button
          onClick={() => setColor(color)}
          className="outline-none px-4 py-1 rounded-full text-white shadow-lg bg-slate-300"
          style={{backgroundColor: color,color:textColor}}
          >{color}</button>
  );
}

function App() {
  const [color, setColor] = useState('olive');

  return (
    <>
  <div className="w-full h-screen duration-200"
    style={{backgroundColor: color}}
    >
      <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2">
        <div className="flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-3xl">
          
          
          <Button color="red" setColor={setColor} />
          <Button color="yellow" setColor={setColor} />
          <Button color="pink" setColor={setColor} />
          <Button color="olive" setColor={setColor} />
          <Button color="purple" setColor={setColor} />
          <Button color="cyan" setColor={setColor} />
          <Button color="orange" setColor={setColor} />
          <Button color="brown" setColor={setColor} />
          <Button color="gray" setColor={setColor} />
          <Button color="black" setColor={setColor} />
          <Button color="white" setColor={setColor} textColor='black' />
          <Button color="blue" setColor={setColor} />
          <Button color="green" setColor={setColor} />




        
        </div>
      </div>
    </div>
    </>
  )
}

export default App
