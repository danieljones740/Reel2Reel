
var React = require('react');

class Movie extends React.Component {
    render() {
        return (
            <div className="r2r-movie">
                <h4 className="r2r-movie-title">{this.props.title}</h4>
                <div className="r2r-movie-actors">
                    <p>TODO: show actors for this movie</p>
                </div>
            </div>
        );
    }
}

module.exports = Movie;
