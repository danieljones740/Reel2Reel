
var React = require('react');

class StartButton extends React.Component {
    render() {
        return <button onClick={this.props.handleClick}>Start a new game</button>;
    }
}

module.exports = StartButton;