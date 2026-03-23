import { useState } from 'react';
import './App.css'
import ImageUploader from "./ImageUploader.jsx";
import Login from "./Login.jsx";



function App() {
  const [login, setlogin] = useState(false)


  return (
    <>
    <div>
      <div className='flex justify-end flex-end mt-0 mr-0'>
      <button
      onClick={() => setlogin(!login)}
      className="text-green-600  font-medium"
      >
      Login
      </button>
      {login&&
      <Login/>
      } 
      </div>

      <h1 className="mt-0 text-3xl text-red font-bold "> Welcome to Jeyam Gift Store
      </h1>
        <ImageUploader />
  </div>

    </>
  )
}

export default App
