export default function Notification({message}) {

    if (message === null) {
        return null
      }
    
      return (
        <div className='notification-one'>
          <h3>{message}</h3>
        </div>
      )
    }