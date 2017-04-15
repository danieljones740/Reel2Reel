
var React = require('react');

class Movie extends React.Component {
    render() {
        return (
            <div className="reel2reel-movie">
                <h4 className="reel2reel-movie-title">{this.props.title}</h4>
                <div className="reel2reel-movie-actors">
                    <p>TODO: show actors for this movie</p>
                </div>
            </div>
        );
    }
}

module.exports = Movie;
