
var React = require('react');
var Actor = require('./actor');
var Encyclopedia = require('./services/encylopedia');

class Movie extends React.Component {

    componentWillMount() {
        this.setState({
            actors: []
        });
    }

    render() {

        // let actorList = this.props.actors;
        let actors = this.state.actors.length //(actorList && actorList.length)
            ? this.state.actors.map((actor) => <Actor key={actor.id} image={actor.image} />)
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

    componentDidMount() {
        // TODO get filmId
        let _this = this;
        Encyclopedia.findActorsForMovie(1, function(response) {
            _this.updateActors(response);
        });
    }

    updateActors(response) {
        this.setState({
            actors: response.actors
        });
        // TODO handle case where no actors are returned
    }
}

module.exports = Movie;
