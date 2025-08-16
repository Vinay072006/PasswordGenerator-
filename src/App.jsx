import { useCallback, useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [length, setLength] = useState(8)
  const [characters, setCharacters] = useState(false);
  const [number, setNumber] = useState(false);
  const [Password,setPassword] = useState("");

  const generatePassword = useCallback(()=> {
    let charset = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
    if (characters) {
      charset += "!@#$%^&*()_+[]{}|;:,.<>?";
    }
    if (number) {
      charset += "0123456789";
    }

    let password = "";
    for (let i = 0; i < length; i++) {
      const randomIndex = Math.floor(Math.random() * charset.length);
      password += charset[randomIndex];
    }
    setPassword(password);
  },[length, characters, number]);

  useEffect(()=>{
    generatePassword();
  },[length, characters, number])
  return (
    <>
      <div className='w-full rounded-lg px-4 my-8 max-w-md mx-auto bg-gray-800 text-orange-400 '>
        <h1 className='text-white text-center'>Password Generator</h1>
       <div>
        <input
          type='text'
          placeholder='Password '
          value={Password}
          className=' p-1 rounded mt-2 bg-gray-700 text-white'
          readOnly
        />
      <button style={{marginLeft: "1%",}}className='bg-blue-500 text-white px-2 py-1 rounded mt-2 '>Copy</button>
      
       </div>

       <div className="flex items-center gap-2 mt-4">
  <label>Length: {length}</label>
  <input
    type="range"
    name="length"
    min={6}
    max={100}
    value={length}
    onChange={(e) => setLength(e.target.value)}
    className="cursor-pointer"
  />

  <label className="flex items-center gap-1">
    <input
      type="checkbox"
      name="character"
      checked={characters}
      onChange={(e) => setCharacters(e.target.checked)}
      className="cursor-pointer"
    />
    Characters
  </label>

  <label className="flex items-center gap-1">
    <input
      type="checkbox"
      name="numbers"
      checked={number}
      onChange={(e) => setNumber(e.target.checked)}
      className="cursor-pointer"
    />
    Numbers
  </label>
</div>


      </div>
    </>
  )
}

export default App
