import React, { Component } from 'react';

class PostAddForm extends Component {
  _addPostHandler(event) {
    event.preventDefault();
	this.props.publishPost(this.author.value, this.body.value);
	this.author.value = "";
	this.body.value = "";
  }
  
  render() {
    return (
	  <form onSubmit={this._addPostHandler.bind(this)}>
	    <div className="form-group">
		  <label htmlFor="author">Author</label>
	      <input id="author" className="form-control" placeholder="Author" ref={(input) => this.author = input}/>
		</div>
		<div className="form-group">
		  <label htmlFor="body">Post</label>
		  <textarea id="body" className="form-control" placeholder="Post" ref={(textarea) => this.body = textarea}/>
		</div>

		<button type="submit" className="btn btn-primary">Submit</button>
	  </form>
    );
  }
}

export default PostAddForm;
