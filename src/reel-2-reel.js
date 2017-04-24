
var React = require('react');
var StartButton = require('./start-button');
var Reel2ReelGame = require('./reel-2-reel-game');

class Reel2Reel extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            active: false,
            films: []
        };
        this.startGame = this.startGame.bind(this);
    }

    startGame() {
        this.setState({
            active: true
        });
    }

    searchActorsForFilm(filmId) {
        // TODO
    }

    searchFilmsForActor(actorId) {
        // TODO
    }

    render() {
        return this.state.active ? <Reel2ReelGame /> : <StartButton handleClick={this.startGame} />;
    }
}

module.exports = Reel2Reel;
