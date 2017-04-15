
const encyclopedia = {

    // Use OMDB APIs
    OMDB_URL: "http://www.omdbapi.com/",

    findMovie: function(id, callback) {
        this.request(this.OMDB_URL + "?i=" + id, callback);
    },

    request: function(url, callback) {
        let xhttp = new XMLHttpRequest();
        xhttp.onreadystatechange = function() {
            if (this.readyState === 4 && this.status === 200) {
                typeof callback === "function" && callback();
            }
        };
        xhttp.open("GET", url, true);
        xhttp.send();
    }
};

module.exports = encyclopedia;
