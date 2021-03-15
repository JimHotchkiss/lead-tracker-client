import React from "react"
import profile from "./profile.jpg"

function ProfileImage() {
  return (
    <div className='profile-div'>
      <img src={profile} className='profile-image' alt='logo' />
    </div>
  )
}

export default ProfileImage
