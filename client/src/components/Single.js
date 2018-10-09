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
        this.setState({ book: res.data });
        console.log(this.state.book);
      });
  }

  render() {
  	const singleBook = this.state.book;
    return (
      <div className="jumbotron">
        <h1>{singleBook.title}</h1>
        <p className="lead">{singleBook.author}</p>
      </div>
    );
  }
}

export default Single;