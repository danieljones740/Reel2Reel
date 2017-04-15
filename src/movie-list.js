
var React = require('react');
var Movie = require('./movie')

class MovieList extends React.Component {

    render() {

        var items = [];

        for (var movie in this.props.movies) {
            items.push(
                <li>
                    <Movie title={movie.title} />
                </li>
            );
        }

        return <ul className="reel2reel-movie-list">
            {items}
        </ul>;
    }
}

module.exports = MovieList;
