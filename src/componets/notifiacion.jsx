import '../style/notificacion.css'

export function Notificacion({email, handleEmail}) {

  const handleOnsubmit = (e) =>{
    e.preventDefault()
    handleEmail(null)
  }

  return <form onSubmit={handleOnsubmit} className="notificacion">
    <img src="./img/icon-success.svg" alt="icon" />
    <h1>Tanks for subscribing!</h1>
    <p>A confirmation email has been sent to <b>{email}</b>. Please open it and click the button inside to confirm your subscription.</p>
    <button>Dismiss message</button>
  </form>
}