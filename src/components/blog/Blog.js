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
            When starting an app, I like to think about what problem am I
            solving. In my current role, I support a robust sales force, and I
            wondered how members of the sales force kept track of their leads.
            So I created an easy and fun way for the user to keep track of their
            leads. The app is rich with data. At a glance the user can see how
            many leads they have, how many leads they've closed, and how many
            still need closing. The user can also, at a glance, see how many of
            each product their leads represent. The use can add leads, and
            update the lead. Additionally, the user has access to all the
            associated contact information of each lead. I thought with a UI
            this fun to interact with, it just may motivate the user to sell
            more products.
          </p>
          <h3 className='content-title'>Create React App</h3>
          <p className='content-text'>
            This app will built with a Rails api taking care of the backend, and
            React handling the client side responsibilities. React in a
            Javascript frontend framework.
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
