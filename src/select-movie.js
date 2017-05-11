
let React = require('react');
let Encyclopedia = require('./services/encyclopedia');

class SelectMovie extends React.Component {

    constructor(props) {
        super(props);
        this.componentDidUpdate = this.componentDidUpdate.bind(this);
    }

    componentWillMount() {
        this.setState({
            movies: []
        });
    }

    render() {

        function getMovieList(movies) {
            return movies
                ? <p>Movies found!</p>
                : <p>Loading movies...</p>;
        }

        let contents = this.props.actor
            ? getMovieList(this.state.movies)
            : <p>Select an actor</p>;

        return <div className="r2r-select-movie">
            { contents }
        </div>
    }

    // TODO trigger this on component render, once actor is defined (don't render when no actor exists?)
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
