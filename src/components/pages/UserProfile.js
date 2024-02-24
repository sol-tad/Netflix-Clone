import React from 'react'
import { useParams } from 'react-router-dom'


function UserProfile() {

    let{Id}=useParams()
  return (
    <div>
      User profile
      {Id}
    </div>
  )
}

export default UserProfile
