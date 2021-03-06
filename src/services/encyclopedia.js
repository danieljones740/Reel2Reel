
const encyclopedia = {

    FIND_ACTORS_URL: "find-actors.php",
    FIND_MOVIES_URL: "find-movies.php",

    findActorsForMovie: function(id, callback) {
        this.request(this.FIND_ACTORS_URL + "?film=" + id, callback);
    },

    findMoviesForActor: function(id, callback) {
        this.request(this.FIND_MOVIES_URL + "?actor=" + id, callback)
    },

    request: function(url, callback) {
        let xhttp = new XMLHttpRequest();
        xhttp.onreadystatechange = function() {
            if (this.readyState === 4 && this.status === 200) {
                typeof callback === "function" && callback(JSON.parse(this.response));
            }
        };
        xhttp.open("GET", url, true);
        xhttp.send();
    }
};

module.exports = encyclopedia;
