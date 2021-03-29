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
            React handling the client side responsibilities. React is a
            Javascript frontend framework. Like any good framework, by simply
            typing in one line of code, ‘create-react-app’, (followed by the
            app’s name), React will spin up an entire app right before your
            eyes.
            <p className='content-text'>
              The big difference with React is that you build components. For
              instance, if the application you’re building requires, let’s say,
              a navbar, body and footer. You would build separate components for
              the navbar, body and footer. But a component doesn’t need to be an
              entire feature, like a navbar, it can be a button, for instance.
              You can then import that button anywhere in the app you need a
              button. For this reason, React is very versatile.
            </p>
            <p className='content-text'>
              When ‘create-react-app’ spins up an app, it establishes App as the
              root component, and all other subsequent components are nested
              under the App component. These components are all encapsulating:
              they have the logic and the HTML. Well, it’s not called HTML. It’s
              actually React’s answer to HTML, and it is called JSX. Other than
              a few nuances, JSX feels much like HTML.
            </p>
          </p>
          <h3 className='content-title'>Containers and Components</h3>
          <p className='content-text'>
            In my case, I made an app that display data using pie charts, bar
            graphs and tables. As you can imagine, each of these are their own
            component. I also made a Dashboard component (a landing page) for
            the user. So the Dashboard component was nested under the App
            component, and all the subsequent components, pie charts, bar graphs
            and tables, are nested under the Dashboard component.
            <p className='content-text'>
              Components come in two flavors, generally, ‘smart’ and ‘dumb’.
              Basically, ‘smart’ components are, by convention, called
              ‘containers’, and ‘dumb’ components are called, unfortunately,
              ‘components'. So our components handle data and logic, pass down
              this data to the component to be displayed.
            </p>
          </p>
          <p className='content-text'></p>
          <h3 className='content-title'>State and Props</h3>
          <p className='content-text'>
            So if we have a parent component, in my case, the Dashboard, it will
            handle data, making any necessary changes, and then pass this data
            down to the appropriate child component as an attribute of that
            child component. These are called ‘props’. This data, or it could be
            a method, is passed from parent component to child component as a
            property, or props, of the child component.
          </p>
          <p className='content-text'>
            I’ve been mentioning that containers handle data, and what I mean by
            ‘data’ is ‘state’. In my app, the Lead Tracker, the user can enter
            information about a new lead. This information is stored in state,
            and can be accessed by other components. In order to be consumed by
            other components, the state needs to be handed down through props.
            Sidenote: when I was first learning React, ‘props’ was not
            intuitive. So until I got use to calling them props, I referred to
            them as attributes.
          </p>
          <div className='tip-div'>
            <p className='tip-text'>
              Sidenote: when I was first learning React, ‘props’ was not
              intuitive. So until I got use to calling them props, I referred to
              them as attributes. I found this helpful when learning the nuances
              of React.
            </p>
          </div>
          <p className='content-text'>
            Now it doesn’t take Walt Disney’s imagination to see how, as an app
            grows in complexity and size, our state management could become
            unwieldy. Each time a child component receives data, it must pass
            that data up to the parent component to manipulate and preserve that
            data in state. That data is then passed back down to the child
            component for the change(s) to be rendered on our page. How about
            components that lie parallel to one another in our component tree.
            This quickly becomes untenable. To address this issue, we introduce
            Redux to manage our state.{" "}
          </p>
          <h3 className='content-title'>Redux</h3>
          <p className='content-text'>
            Redux is a state management container. Redux helps us manage the
            state of our app in a consistent way. When you sit down to wire up
            Redux, it can get confusing and counter intuitive pretty quick. And
            as developing developers, there is an instinct to pretend to know
            more than we really do. It’s important to remember that Redux,
            despite its appeared complexity, is just storing our state, allowing
            us to interact with the data to change and store and giving us
            access to the data. My over simplification is, ‘get, change, store’.
          </p>
          <div className='tip-div'>
            <p className='tip-text'>
              With Redux, I suggest to take your time, read the documentation,
              get different instructional perspectives, and don’t move on until
              you are feeling comfortable.
            </p>
          </div>
          <p className='content-text'>
            Once you do have Redux wired up, it is a powerful, and helpful,
            tool. By using the mapStateToProps method, we can have direct access
            to our data from any component without having to pass data up and
            down through props. Additionally, before Redux, we had to pass up
            and down functions as props. If you have a button that grabs some
            user input, we would have to pass that functionality from a parent
            component down to the child component where said button is rendered.
            With Redux, much like mapStateToProps, we can grab that
            functionality from any component.{" "}
          </p>
          <p className='content-text'>
            As I said, Redux seems to have its own language. Redux, at a very
            high level, has a ‘store’, a ‘reducer’ and an ‘action’. The store is
            where our data is, well, stored. The reducer is what interacts with
            our store and updates the store. Our action is the information that
            instructs the reducer on what and how to update the store. We may
            want to add an item to an array that we have. Our action, which is
            just an object, will say, ‘take this item, and add it to this
            array’. The action object will have a 'type' that gives instructios,
            say 'ADD_TO_ARRAY', and the action will also have a 'payload', say,
            'some_item'. The action is passed to our reducer, and using switch
            statements, it finds the ADD_TO_ARRAY reducer. The reducer than
            creates an new instance of that state, but this time including the
            new item.
          </p>
          <div className='tip-div'>
            <p className='tip-text'>
              When learning to work with Redux, develop a flow that makes sense
              to you. For instance, I like to start at the Store, move to the
              Reducer, then to the Action and out to the DOM. This, for the most
              part, allows my thinking to remain linear, instead of like a
              matrix. Also, with console logs and Chrome Developer Tools, you
              can map the flow of data, pinpoint and mitigate bugs.
            </p>
          </div>
          <p className='content-text'>
            In this project, I felt like the training-wheels were off. I had to
            develop new skills, while leaning on older, perhaps stronger, skills
            to develop a project that I can be proud of. It also gave me insight
            into the power of development. Not just the technology, but rather
            leveraging technology to solve problems, or create something
            inspiring. That’s a different way to look at software development,
            and that’s the lesson I walked away with. You can say, this is the
            project where I became a software developer.
          </p>
        </article>
      </div>
    </div>
  )
}

export default Blog
