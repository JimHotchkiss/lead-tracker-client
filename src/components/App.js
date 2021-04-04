import React, { Component } from "react"
import Header from "./common/header/Header"
import Login from "../containers/login/Login"
import DashBoard from "../containers/dashBoard/DashBoard"
import LeadForm from "../containers/leads/LeadForm"
import EditLeadFormContainer from "../containers/leads/EditLeadFormContainer"
import ShowLead from "../containers/leads/ShowLead"
import ContactsContainer from "../containers/contacts/ContactsContainer"
import UserCreate from "./users/UserCreate"
import Blog from "../components/blog/Blog"
import { Switch, Route } from "react-router-dom"
import "./app.css"
class App extends Component {
  render() {
    return (
      <div className='app-container'>
        <div>
          <Header />
        </div>
        <div className='components-div'>
          <Switch>
            {alert("2.) App.js")}
            <Route exact path='/' component={DashBoard} />
            <Route path='/login' component={Login} />
            <Route path='/leads/new' component={LeadForm} />
            <Route path='/leads/:id/edit' component={EditLeadFormContainer} />
            <Route path='/leads/:id/show' component={ShowLead} />
            <Route path='/contacts/:id/show' component={ContactsContainer} />
            <Route path='/users/new' component={UserCreate} />
            <Route path='/blog' component={Blog} />
          </Switch>
        </div>
      </div>
    )
  }
}
export default App
