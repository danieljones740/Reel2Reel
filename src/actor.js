
var React = require('react');

class Actor extends React.Component {

    handleClick() {
        // TODO show list of available movies (re-use Movie component, within SelectMovie component?)
        return false;
    }

    render() {
        // TODO add anchor element (and onclick event)
        return <div className="r2r-actor">
            <a onClick={this.handleClick}>
                <img className="r2r-actor-avatar" src={this.props.image} />
            </a>
        </div>
    }
}

module.exports = Actor;
