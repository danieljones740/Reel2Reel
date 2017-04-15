
var React = require('react');
var StartButton = require('./start-button');

class Reel2Reel extends React.Component {

    startGame() {
        alert("not ready yet!");
    }

    render() {
        return <StartButton handleClick={this.startGame} />
    }
}

module.exports = Reel2Reel;
