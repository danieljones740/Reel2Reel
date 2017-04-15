
var React = require('react');
var Movie = require('./movie')

class MovieList extends React.Component {

    render() {

        var items = this.props.movies.map((movie) =>
            <Movie title={movie.title} key={movie.title} />
        );

        return <ul className="reel2reel-movie-list">
            {items}
        </ul>;
    }
}

module.exports = MovieList;
