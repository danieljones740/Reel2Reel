
const encyclopedia = {

    // Use OMDB APIs
    OMDB_URL: "http://www.omdbapi.com/",
    FIND_ACTORS_URL: "find-actors.php",

    // TODO find movies

    findActorsForMovie: function(id, callback) {
        this.request(this.FIND_ACTORS_URL + "?film=" + id, callback);
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
