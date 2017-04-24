
var React = require('react');

class Actor extends React.Component {
    render() {
        // TODO add anchor element (and onclick event)
        return <div className="r2r-actor">
            <img className="r2r-actor-avatar" src="images/default-actor.png" />
        </div>
    }
}

module.exports = Actor;
