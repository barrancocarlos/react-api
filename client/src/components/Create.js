import React, { Component } from "react";
import axios from 'axios';


const bookApi = 'http://localhost:5000/books/';


class Create extends Component {

    constructor() {
        super();
        this.state = {
            title: '',
            author: ''
        };
    }

    onChange = (e) => {
        const state = this.state
        state[e.target.name] = e.target.value;
        this.setState(state);
    }

    onSubmit = (e) => {
        e.preventDefault();

        const {
            title,
            author
        } = this.state;

        axios.post(bookApi, {
                title,
                author
            })
            .then((result) => {
                this.props.history.push("/")
            });
    }

render() {
  	const { title, author } = this.state;
    return (
<div>
	<div className="jumbotron">
		<h1>Add New</h1>
		<p className="lead">Create Book</p>
	</div>
	<div className="container">
		<div className="row">			
			<form onSubmit={this.onSubmit}>
				<div className="form-group">
					<label htmlFor="title">Title:</label>
					<input type="text" className="form-control" name="title" value={title} onChange={this.onChange} placeholder="Title" />
				</div>
				<div className="form-group">
					<label htmlFor="author">Author:</label>
					<input type="text" className="form-control" name="author" value={author} onChange={this.onChange} placeholder="Author" />
				</div>
				<button type="submit" className="btn btn-success">Submit</button>
			</form>
		</div>
	</div>
</div>
    );
  }
}

export default Create;