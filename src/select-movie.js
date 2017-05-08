
let React = require('react');

class SelectMovie extends React.Component {

    // TODO store options in state?

    render() {

        let contents = this.props.actor
            ? <p>Loading movies...</p>
            : <p>Select an actor</p>;

        return <div className="r2r-select-movie">
            { contents }
        </div>
    }

    componentDidMount() {
        // TODO query for movies
    }
}

module.exports = SelectMovie;
