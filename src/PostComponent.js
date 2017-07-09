import React, { Component } from 'react';
import './App.css';

class PostComponent extends Component {
   
  render() {
    return (
	  <div className="col-sm-6">
		<div className="panel panel-default">
		  <div className="panel-heading">
		    <span className="glyphicon glyphicon-user"></span><strong>{this.props.author}</strong> <span className="text-muted">{this.props.date}</span>
		  </div>
		  <div className="panel-body">
		    {this.props.content}
		  </div>
		</div>
	  </div>
    );
  }
}

export default PostComponent;
