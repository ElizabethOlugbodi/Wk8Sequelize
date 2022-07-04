const yargs = require("yargs");
const { sequelize } = require("./db/connection");
const { addMovie, listMovies, deleteMovies } = require("./movies/functions.js");

const app = async (yargsObj) => {
  try {
    await sequelize.sync({ alter: true });
    if (yargsObj.add) {
      //add something to movie table
      await addMovie({ title: yargsObj.title, actor: yargsObj.actor });
    } else if (yargsObj.list) {
      //list contents of movie table
      await listMovies({ title: yargsObj.title, actor: yargsObj.actor });
    } else if (yargsObj.update) {
      // update one entry in movie table
      await updateMovies(
        { title: yargsObj.newTitle, actor: yargsObj.newActor },
        { where: { title: yargsObj.oldTitle } }
      );
    } else if (yargsObj.delete) {
      await deleteMovies({ where: { title: yargsObj.delete } });
      // delete entry from movie table
    } else {
      console.log("Incorrect command");
    }
  } catch (error) {
    console.log(error);
  } finally {
    await sequelize.close();
  }
};

app(yargs.argv);
