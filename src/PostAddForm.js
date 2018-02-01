import React, {Component} from 'react';

class PostAddForm extends Component {

    state = {submitEnabled: false};

    _addPostHandler(event) {
        event.preventDefault();
        this.props.publishPost(this.author.value, this.body.value);
        this.author.value = "";
        this.body.value = "";
        this.setState({submitEnabled: false});
    }

    onInputChange() {
        this.setState({submitEnabled: this.author.value !== "" && this.body.value !== ""});
    }

    render() {
        return (
            <form onSubmit={this._addPostHandler.bind(this)}>
                <div className="form-group">
                    <label htmlFor="author">Author</label>
                    <input id="author" className="form-control" placeholder="Author"
                           onChange={this.onInputChange.bind(this)}
                           ref={(input) => this.author = input}/>
                </div>
                <div className="form-group">
                    <label htmlFor="body">Post</label>
                    <textarea id="body" className="form-control" placeholder="Post"
                              onChange={this.onInputChange.bind(this)}
                              ref={(textarea) => this.body = textarea}/>
                </div>

                <button type="submit" className="btn btn-primary" disabled={!this.state.submitEnabled}>Submit</button>
            </form>
        );
    }
}

export default PostAddForm;
