import { useState } from 'react'
import './App.css'
import { Container, Button } from 'react-bootstrap';
import Login from './comp/login/Login';
import DataLink from './comp/page/DataLink';

function App() {
  const [edo, setEdo] = useState(false)

  return (
    <>

      
      <Login setEdo={setEdo}
      edo={edo}
      />
      <DataLink edo={edo}
      setEdo={setEdo}
      ></DataLink>
     

    </>
  )
}

export default App
