const Movie = require("./table");

exports.addMovie = async (movieObj) => {
  try {
    const response = await Movie.create(movieObj);
    console.log("new entry added");
  } catch (error) {
    console.log(error);
  }
};

exports.listMovies = async (movieList) => {
  try {
    const response = await Movie.findAll(movieList);
    console.log("You can now view the movie list");
  } catch (error) {
    console.log(error);
  }
};

exports.updateMovies = async (newTitle, oldTitle) => {
  try {
    const response = await Movie.update(newTitle, oldTitle);
    console.log("New titles available, Following are the old titles");
  } catch (error) {
    console.log(error);
  }
};

exports.deleteMovie = async (toDelete) => {
  try {
    await Movie.destroy(toDelete);
    console.log("entry deleted");
  } catch (error) {
    console.log(error);
  }
};
