
let React = require('react');
let MovieOption = require('./movie-option');
let Encyclopedia = require('./services/encyclopedia');

class SelectMovie extends React.Component {

    constructor(props) {
        super(props);
    }

    componentWillMount() {
        this.setState({
            movies: []
        });
    }

    render() {

        let contents = this.state.movies
            ? this.state.movies.map(
                (movie) => <MovieOption title={movie.title} />
            )
            : <p>Loading movies...</p>;

        return <div className="r2r-select-movie">
            { contents }
        </div>
    }

    componentDidMount() {
        let _this = this;
        if (this.props.actor) {
            Encyclopedia.findMoviesForActor(this.props.actor, function(response) {
                _this.setState({
                    movies: response.movies
                });
            })
        }
    }
}

module.exports = SelectMovie;
