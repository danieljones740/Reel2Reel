
var React = require('react');
var Actor = require('./actor');

class Movie extends React.Component {
    render() {
        return (
            <div className="r2r-movie">
                <h4 className="r2r-movie-title">{this.props.title}</h4>
                <div className="r2r-movie-actors">
                    { [1, 2, 3, 4].map((number) => <Actor key={number} />) }
                </div>
            </div>
        );
    }
}

module.exports = Movie;
