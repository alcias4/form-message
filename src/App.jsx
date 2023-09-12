import { useState } from "react"
import { FormMassage } from "./componets/Form"
import { Notificacion } from "./componets/notifiacion"
function App() {
  const [email, setEmial ] = useState(null)

  
  const handleEmail = (email) => {
    setEmial(email)
  } 
  return (
    <>
      <main>
        {
          email?<Notificacion email={email} handleEmail={handleEmail}/>:
          <FormMassage handleEmail={handleEmail}/>
        }
      </main>
    </>
  )
}

export default App
