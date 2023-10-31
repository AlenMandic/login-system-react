import React from 'react'

interface NotificationProps {
    message: string | null
}

export default function Notification({message}:NotificationProps) {

    if (message === null) {
        return null
      }
    
      return (
        <div className='notification-one'>
          <h3>{message}</h3>
        </div>
      )
    }