
var React = require('react');
var Movie = require('./movie');

class MovieList extends React.Component {

    render() {

        let items = this.props.movies.map((movie) =>
            <li key={movie.id}>
                <Movie title={movie.title} key={movie.title} selectActor={this.props.selectActor} />
            </li>
        );

        return <ul className="r2r-movie-list">
            {items}
        </ul>;
    }
}

module.exports = MovieList;
