
var React = require('react');

class Actor extends React.Component {

    constructor(props) {
        super(props);
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick() {
        this.props.select();
        return false;
    }

    render() {
        return <div className="r2r-actor">
            <a onClick={this.handleClick}>
                <img className="r2r-actor-avatar" src={this.props.image} />
            </a>
        </div>
    }
}

module.exports = Actor;
