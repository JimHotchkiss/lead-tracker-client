import React from "react"
import Logo from "./Logo"
import TitleComponent from "./TitleComponent"

function Blog() {
  return (
    <div className='blog-div'>
      <Logo />
      <TitleComponent />
      <div className='blog-body'>
        <article className='content'>
          <h3 className='content-title'>Why a CRM?</h3>
          <p className='content-text'>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Accusamus
            doloremque alias excepturi accusantium pariatur nesciunt quos amet
            explicabo, ab fugiat officia voluptas iste, reprehenderit veniam
            perspiciatis sapiente aliquam ea recusandae.
          </p>
          <h3 className='content-title'>Create React App</h3>
          <p className='content-text'>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Accusamus
            doloremque alias excepturi accusantium pariatur nesciunt quos amet
            explicabo, ab fugiat officia voluptas iste, reprehenderit veniam
            perspiciatis sapiente aliquam ea recusandae.
          </p>
          <h3 className='content-title'>State and Props</h3>
          <p className='content-text'>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Accusamus
            doloremque alias excepturi accusantium pariatur nesciunt quos amet
            explicabo, ab fugiat officia voluptas iste, reprehenderit veniam
            perspiciatis sapiente aliquam ea recusandae.
          </p>
          <h3 className='content-title'>Containers</h3>
          <p className='content-text'>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Accusamus
            doloremque alias excepturi accusantium pariatur nesciunt quos amet
            explicabo, ab fugiat officia voluptas iste, reprehenderit veniam
            perspiciatis sapiente aliquam ea recusandae.
          </p>
          <h3 className='content-title'>Components</h3>
          <p className='content-text'>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Accusamus
            doloremque alias excepturi accusantium pariatur nesciunt quos amet
            explicabo, ab fugiat officia voluptas iste, reprehenderit veniam
            perspiciatis sapiente aliquam ea recusandae.
          </p>
          <h3 className='content-title'>Rails API</h3>
          <p className='content-text'>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Accusamus
            doloremque alias excepturi accusantium pariatur nesciunt quos amet
            explicabo, ab fugiat officia voluptas iste, reprehenderit veniam
            perspiciatis sapiente aliquam ea recusandae.
          </p>
          <h3 className='content-title'>Redux</h3>
          <p className='content-text'>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Accusamus
            doloremque alias excepturi accusantium pariatur nesciunt quos amet
            explicabo, ab fugiat officia voluptas iste, reprehenderit veniam
            perspiciatis sapiente aliquam ea recusandae.
          </p>
        </article>
      </div>
    </div>
  )
}

export default Blog
