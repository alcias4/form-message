import { useState } from 'react'
import '../style/form.css'

export function FormMassage ({handleEmail}) {
  const [validacion , setValidacion] = useState()
  const [error, setError] = useState(true)
  const classError = error === false ? 'input-error': 'input-inicio'


  const handleSubmit  = (e) => {
    e.preventDefault()
    if(validacion === undefined || validacion?.indexOf('@') === -1 || validacion?.indexOf('.com') === -1){
      setError(false)
    } else {
      setError(true)
      handleEmail(validacion)
    }
  }

  const handelOnfocus = () =>{
    setError(true)
  }

  const handleonChange = (e) =>{
    setValidacion(e.target.value)
  } 
  return (
    <form className="form" onSubmit={handleSubmit}>
    <section className='info'>
      <h1>Stay updated!</h1>
      <span>Join 60,000+ product managers receiving monthly updates on:</span>
      <ul style={{listStyle: "none"}}>
        <li>
          <img src="./img/icon-list.svg" alt="icon-list" />
          <p>Producto discovery and building what matters</p>
        </li>
        <li>
          <img src="./img/icon-list.svg" alt="icon-list" />
          <p>Measuring to ensure updates are a success</p>
        </li>
        <li>
          <img src="./img/icon-list.svg" alt="icon-list" />
          <p>And much more!</p>
        </li>
      </ul>
      <div>
        <label >Email Address</label>
        <span className='error' style={error?{display: 'none'}: null}>Valid email required</span>
        <input onFocus={handelOnfocus}  className={classError} onChange={handleonChange} type="text" placeholder='email@company.com' />
      </div>
      <button>Subscribe to monthly newsletter</button>
    </section>
    <picture className='image'>
      <img className='desk' src="./img/desktop.svg" alt="img-form" />
      <img className='mobile' src="./img/mobile.svg" alt="img-form" />
    </picture>
    </form>
  )
}