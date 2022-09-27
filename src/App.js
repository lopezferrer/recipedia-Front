import React, {Component} from 'react';
import './App.css';


//------------------------------------//
// From exemplo
//------------------------------------//

import Navbar from './Component/Navbar';
import { BrowserRouter as Router, Routes, Route}
from 'react-router-dom';
import Home from './pages';
import About from './pages/about';
import Blogs from './pages/blogs';

import Contact from './pages/contact';
//-------------------------------------//


class App extends Component {
  constructor(props){
  super(props)
    this.state = {
      //base url  plus additions in order of additions 
      baseURL: 'https://www.themealdb.com/api/json/v1/',
      query: '/search.php?s=',
      queryDetail: '',
      apikey: `${process.env.REACT_APP_API_KEY}`,
      searchURL: '',
     //to do figure out how would we want to set up the 
  }
  }
//sets this.queryDetail as current search box
handleChange= (event) =>{
  this.setState({[event.target.id]: event.target.value})
}

//assembles search url and detches the results
handleSubmit = (event) =>{
  //stops page reload
  event.preventDefault()
this.setState({
    //assembles search URL
    searchURL:this.state.baseURL + this.state. apikey +  this.state.query + this.state.queryDetail 
}, () =>{
    //FETCH request stuff 
    fetch(this.state.searchURL)
          .then(response =>{return response.json()})
          .then(json => this.setState({recipes:json}),
          (err) => console.log(err))
          .then(console.log(this.state.recipes))
          .then(console.log(this.sendBack))
})
}


render() {
    return (
      <Router>
      <Navbar />
      <Routes>
          <Route exact path='/'  element={<Home />} />
          <Route path='/recipes' element={<About/>} />
          <Route path='/contact' element={<Contact/>} />
          <Route path='/blogs' element={<Blogs/>} />
          </Routes>
      </Router>


   )

  }
}
export default App;
