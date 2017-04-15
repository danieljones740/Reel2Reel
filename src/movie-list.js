
var React = require('react');
var Movie = require('./movie')

class MovieList extends React.Component {

    render() {

        let items = this.props.movies.map((movie) =>
            <li>
                <Movie title={movie.title} key={movie.title} />
            </li>
        );

        return <ul className="reel2reel-movie-list">
            {items}
        </ul>;
    }
}

module.exports = MovieList;
