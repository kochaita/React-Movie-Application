import React, { Component } from 'react';
import { getMovies } from '../services/fakeMovieService'

class Movies extends Component {
    state = { 
        movies : getMovies()
     }

    handleDelete = (movie) => {
        console.log(movie);
        const movies = this.state.movies.filter(m => m._id !== movie._id)
        this.setState({movies : movies})
    }

    render() {
        if (this.state.movies.length === 0)
            return <p>There are no movies here ! Please add some movies !</p>
        else  
            return ( 
                /*Zen coding
                table.table>thead>tr>th*4*/
                <React.Fragment>
                <p>There are {this.state.movies.length} movies in this list !</p>
                <table className="table">
                    <thead>
                        <tr>
                            <th>Title</th>
                            <th>Genre</th>
                            <th>Stock</th>
                            <th>Rate</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.state.movies.map(movie => (
                        <tr key={movie._id}>
                            <td>{movie.title}</td>
                            <td>{movie.genre.name}</td>
                            <td>{movie.numberInStock}</td>
                            <td>{movie.dailyRentalRate}</td>
                            <td>
                                <button onClick={() => this.handleDelete(movie)} className="btn btn-danger btn-tiny">Delete</button>
                            </td>
                        </tr>
                        ))}
                    </tbody>
                </table>
                </React.Fragment>
         );
    }
}

export default Movies;