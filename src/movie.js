
var React = require('react');

class Movie extends React.Component {
    render() {
        return <div>{this.props.title}</div>;
    }
}

module.exports = Movie;
