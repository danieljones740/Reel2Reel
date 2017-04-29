
var React = require('react');
var Movie = require('./movie')

class MovieList extends React.Component {

    render() {

        // TODO call findActors?  Move it here?

        // TODO make this a prop?
        let actors = [{ id: 1, image: 'images/default-actor.png' }];

        let items = this.props.movies.map((movie) =>
            <li key={movie.id}>
                <Movie title={movie.title} key={movie.title} actors={actors} />
            </li>
        );

        return <ul className="r2r-movie-list">
            {items}
        </ul>;
    }
}

module.exports = MovieList;
