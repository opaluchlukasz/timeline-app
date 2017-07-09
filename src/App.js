import React, { Component } from 'react';
import './App.css';
import PostComponent from './PostComponent';
import moment from 'moment';
import { Navbar } from 'react-bootstrap';

class App extends Component {
	  
  constructor(){
	super();
	  
	this.state = {
	  posts: [{author: "me", date: "2017-06-06 13:54:21", content: "some post body"},
		      {author: "some other guy", date: "2017-06-06 18:22:00", content: "some other post"}]
	};
  }
	
  _getPosts() {
	  return this.state.posts.map((post) => { return (<PostComponent author={post.author} date={moment(post.date).format('YYYY-MM-DD HH:mm:ss')} content={post.content} />) } );
  }
  
  render() {
    return (
	  <div>
		<Navbar inverse>
		  <Navbar.Header>
			<Navbar.Brand>
				<a href="#">Timeline</a>
			</Navbar.Brand>
		  </Navbar.Header>
		</Navbar>
		<div>{this._getPosts()}</div>
	  </div>
    );
  }
  
}

export default App;
