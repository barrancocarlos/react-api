import React, { Component } from "react";
import axios from 'axios';
import { Link } from 'react-router-dom';

const bookApi = 'http://localhost:5000/books/';

class Home extends Component {

    constructor(props) {
        super(props);
        this.state = {
            books: [],
        };
    }

    componentDidMount() {
        axios.get(bookApi)
            .then(res => {
                this.setState({
                    books: res.data
                });
                console.log(this.state.books);
            });
    }

    delete(id) {
        console.log(id);
        axios.delete(bookApi + id)
            .then((res => {
                this.props.history.push("/")              
                                                              
            })); 

    }

        componentWillReceiveProps(nextProps) {
        axios.get(bookApi)
            .then(res => {
                this.setState({
                    books: res.data
                });
                console.log(this.state.books);
            });
    }


    render() {
            return (
<div>
<div className="jumbotron">
	<h1>Home</h1>
	<p className="lead">Book List</p>
</div>
<div className="container">
	<div className="row">
        <Link to={`/create`} className="btn btn-outline-info">Add New</Link>
		<table className="table table-borderless">
			<thead>
				<tr>					
					<th scope="col">Title</th>
					<th scope="col">Author</th>
					<th scope="col">Edit</th>
					<th scope="col">Delete</th>
				</tr>
			</thead>
			<tbody>
			 {this.state.books.map(book =>
				<tr key={book._id}>					
					<td>{book.title}</td>
					<td>{book.author}</td>
					<td><Link to={`/single/${book._id}`} className="btn btn-outline-info">Edit</Link></td>					
					<td><button onClick={this.delete.bind(this, book._id)} className="btn btn-outline-danger">Delete</button></td>


					
				</tr>
			 )}
			</tbody>
		</table>
	</div>
</div>
</div>
    		);
	}
}
export default Home;