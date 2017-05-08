
let React = require('react');

class SelectMovie extends React.Component {

    render() {

        let contents = this.props.actor
            ? <p>Actor selected</p>
            : <p>Select an actor</p>;

        return <div className="r2r-select-movie">
            { contents }
        </div>
    }
}

module.exports = SelectMovie;
