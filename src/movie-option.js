
let React = require('react');

class MovieOption extends React.Component {

    constructor(props) {
        super(props)
    }

    render() {
        return (
            <div>
                <a onClick={this.props.select}>{this.props.title}</a>
            </div>
        );
    }
}

module.exports = MovieOption;