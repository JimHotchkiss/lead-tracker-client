import React from "react"
import ProfileImage from "./ProfileImage"
import Title from "./Title"
import NameComponent from "./NameComponent"

function TitleComponent() {
  return (
    <div className='title-component'>
      <Title />
      <ProfileImage />
      <NameComponent />
    </div>
  )
}

export default TitleComponent
