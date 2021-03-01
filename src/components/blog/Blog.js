import React from "react"
import logo from "./logo.svg"
import "./blog.css"

function Blog() {
  return (
    <div className='blog-div'>
      <div className='blog-logo-title-div'>
        <img src={logo} className='App-logo' alt='logo' />
        <div className='blog-title-div'>
          <h1 className='blog-title-element'>REACT/REDUX CRM Project</h1>
        </div>
      </div>
    </div>
  )
}

export default Blog
