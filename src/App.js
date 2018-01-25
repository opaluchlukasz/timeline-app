import React, { Component } from 'react';
import PostComponent from './PostComponent';
import PostAddForm from './PostAddForm';
import moment from 'moment';
import uuidv4 from 'uuid';
import { Navbar } from 'react-bootstrap';

const DATE_TIME_FORMAT = 'YYYY-MM-DD HH:mm:ss';

class App extends Component {
  
  constructor(){
	super();
	  
	this.state = {
	  posts: [{id: uuidv4(), author: "me", date: "2017-06-06 13:54:21", content: "First react component"},
		      {id: uuidv4(), author: "some other guy", date: "2017-06-06 18:22:00", content: "Make Web great again"}]
	};
  }
	
  _getPosts() {
	  return this.state.posts.map((post) => { return (<PostComponent key={post.id} author={post.author} date={moment(post.date).format(DATE_TIME_FORMAT)} content={post.content} />) } );
  }
  
  publishPost(author, body) {
	  this.setState({ posts: this.state.posts.concat({id: uuidv4(), author: author, date: moment().format(DATE_TIME_FORMAT), content: body}) });
  }
  
  render() {
    return (
	  <div>
		<Navbar inverse>
		  <Navbar.Header>
			<Navbar.Brand>
			  {
                //eslint-disable-next-line
              }<a href="#">Timeline</a>
			</Navbar.Brand>
		  </Navbar.Header>
		</Navbar>
		<div className="col-md-6">{this._getPosts()}</div>
		<div className="col-md-6"><PostAddForm publishPost={this.publishPost.bind(this)}/></div>
	  </div>
    );
  }
}

export default App;
