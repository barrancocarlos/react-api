import React, { Component } from "react";
import axios from 'axios';


const bookApi = 'http://localhost:5000/books/';

class Single extends Component {


    constructor(props) {
        super(props);
        this.state = {
            book: {}
        };
    }

    componentDidMount() {
        axios.get(bookApi + this.props.match.params.id)
            .then(res => {
                this.setState({
                    book: res.data
                });
                console.log(this.state.book);
            });
    }

    onChange = (e) => {
        const state = this.state.book
        state[e.target.name] = e.target.value;
        this.setState({
            book: state
        });
    }

    onSubmit = (e) => {
        e.preventDefault();

        const {
            title,
            author
        } = this.state.book;

        axios.put(bookApi + this.props.match.params.id, {
                title,
                author
            })
            .then((result) => {
                this.props.history.push("/")
            });
    }

  render() {
  	const singleBook = this.state.book;
    return (
<div>
  <div className="jumbotron">
    <h1>{singleBook.title}</h1>
    <p className="lead">{singleBook.author}</p>
  </div>
  <div className="container">
    
    
    <form onSubmit={this.onSubmit}>
      <div className="form-group">
        <label htmlFor="title">Title:</label>
        <input type="text" className="form-control" name="title" onChange={this.onChange} placeholder={singleBook.title} />
      </div>
      <div className="form-group">
        <label htmlFor="author">Author:</label>
        <input type="text" className="form-control" name="author" onChange={this.onChange} placeholder={singleBook.author} />
      </div>
      <button type="submit" className="btn btn-default">Submit</button>
    </form>
    
  </div>
</div>
    );
  }
}

export default Single;