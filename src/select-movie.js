
let React = require('react');
let Encyclopedia = require('./services/encylopedia');

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

        function getMovieList() {
            return this.state.movies
                ? <p>Movies found!</p>
                : <p>Loading movies...</p>;
        }

        let contents = this.props.actor
            ? getMovieList()
            : <p>Select an actor</p>;

        return <div className="r2r-select-movie">
            { contents }
        </div>
    }

    componentDidUpdate() {
        if (this.props.actor) {
            Encyclopedia.findMoviesForActor(this.props.actor, function(response) {
                this.setState({
                    movies: response.movies
                });
            })
        }
    }
}

module.exports = SelectMovie;
