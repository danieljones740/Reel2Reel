
var React = require('react');
var Actor = require('./actor');

class Movie extends React.Component {
    render() {

        let actorList = this.props.actors;
        let actors = (actorList && actorList.length)
            ? actorList.map((actor) => <Actor key={actor.id} image={actor.image} />)
            : <p>Loading actors...</p>;

        return (
            <div className="r2r-movie">
                <h4 className="r2r-movie-title">{this.props.title}</h4>
                <div className="r2r-movie-actors">
                    { actors }
                </div>
            </div>
        );
    }
}

module.exports = Movie;
