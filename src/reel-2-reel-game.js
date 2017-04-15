
var React = require('react');
var MovieList = require('./movie-list');

class Reel2ReelGame extends React.Component {

    constructor(props) {
        super(props);

        // TODO
        var start = {
            title: "The Notebook"
        };
        var end = {
            title: "Pearl Harbour"
        };

        this.state = {
            start: start,
            end: end,
            movies: [ start ],
            complete: false
        };
    }

    addMovie(id) {
        // TODO
    }

    removeMovie(id) {
        // TODO
    }

    render() {

        return (
            <div>
                <h3 className="reel2reel-title">
                    Start: <strong>{this.state.start.title}</strong>
                    End: <strong>{this.state.end.title}</strong>
                </h3>
                <MovieList movies={this.state.movies} />
                <input type="text" placeholder="search..." />
            </div>
        );

    }
}

module.exports = Reel2ReelGame;
