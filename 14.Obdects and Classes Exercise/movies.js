function moviesSTore(input) {
  let movies = [];

  for (let movieInfo of input) {
    if (movieInfo.includes("addMovie")) {
      let name = movieInfo.split("addMovie ")[1];
      movies.push({ name });
    } else if (movieInfo.includes("directedBy")) {
      let [name, director] = movieInfo.split(" directedBy ");
      let movie = movies.find((movieObj) => movieObj.name === name);

      if (movie) {
        movie.director = director;
      }
    }else if (movieInfo.includes("onDate")) {
        let [name, date] = movieInfo.split(" onDate ");
        let movie = movies.find((movieObj) => movieObj.name === name);
  
        if (movie) {
          movie.date = date;
        }
      }
  }
  movies.forEach(movies => {
      if(movies.name && movies.director && movies.date){
          console.log(JSON.stringify(movies))
      }
  })
}
moviesSTore([
  "addMovie Fast and Furious",
  "addMovie Godfather",
  "Inception directedBy Christopher Nolan",
  "Godfather directedBy Francis Ford Coppola",
  "Godfather onDate 29.07.2018",
  "Fast and Furious onDate 30.07.2018",
  "Batman onDate 01.08.2018",
  "Fast and Furious directedBy Rob Cohen",
]);
