
var React = require('react');
var MovieList = require('./movie-list');
var SelectMovie = require('./select-movie');

class Reel2ReelGame extends React.Component {

    constructor(props) {
        super(props);

        // TODO
        var start = {
            id: "tt0332280",
            title: "The Notebook"
        };
        var end = {
            id: "tt0213149",
            title: "Pearl Harbour"
        };

        this.state = {
            start: start,
            end: end,
            movies: [ start ],
            selectedActor: null,
            complete: false
        };
    }

    addMovie(id) {
        // TODO
    }

    removeMovie(id) {
        // TODO
    }

    selectActor() {
        // TODO assign ID from selected actor photo
        this.setState({
            selectedActor: 1
        });
    }

    render() {

        return (
            <div>
                <h3 className="r2r-title">
                    Start: <strong>{this.state.start.title}</strong>
                    End: <strong>{this.state.end.title}</strong>
                </h3>
                <MovieList movies={this.state.movies} />
                <SelectMovie />
            </div>
        );

    }
}

module.exports = Reel2ReelGame;
