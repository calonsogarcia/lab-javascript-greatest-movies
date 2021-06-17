// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.
// How could you "clean" a bit this array and make it unified (without duplicates)?
function getAllDirectors(directors) {
  const allDirectors = directors.map((movie) => {
    return movie.director;
  })
  return allDirectors;
}

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
function howManyMovies(stevenSpielberg) {
  if (stevenSpielberg.length === 0){
    return 0;}
  const spielbergDrama = stevenSpielberg.filter ((movie) => {
    return movie.director === 'Steven Spielberg' && movie.genre.includes ('Drama');
  })
  return spielbergDrama.length;
}

// Iteration 3: All scores average - Get the average of all scores with 2 decimals
function scoresAverage(moviiesList) {
  const totalScores = moviiesList.reduce((total, movie) => {
    if (movie.score){
      return total + movie.score;
    } else {
      return total;
    }
  }, 0)
  return parseFloat((totalScores / moviiesList.length).toFixed(2));
}




// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesScore(dramaMoviesAv) {
  if (dramaMoviesAv.length ===0){
    return 0;
  }

  const avDramaMovies = dramaMoviesAv.filter ((moviesList) => {
    let dramaCounter = [0];
    if (moviesList.genre.includes === 'Drama'){
    }
    return dramaCounter += 1;
  })
  return avDramaMovies.length;
}

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(moviesByYear) {
  const moviesByYear2 = [...moviesByYear];
  moviesByYear2.sort ((movieA, movieB) => {
    if (movieA.year < movieB.year || movieA.title[0] < movieB.title[0]){
      return -1;
    } else {
      return 1;
    }
  })
  return moviesByYear2;
  
}

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(alphaMovies) {
  const orderedAlpha = [...alphaMovies];
  orderedAlpha.sort ((movieA, movieB) => {
    if (movieA.title[0] < movieB.title[0]){
      return -1;
    } else {
      return 1;
    } 
  })
  return orderedAlpha;
}

//.toString()


// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes
function turnHoursToMinutes() {}

// BONUS - Iteration 8: Best yearly score average - Best yearly score average
function bestYearAvg() {}



// The following is required to make unit tests work.
/* Environment setup. Do not modify the below code. */
if (typeof module !== 'undefined') {
  module.exports = {
    getAllDirectors,
    howManyMovies,
    scoresAverage,
    dramaMoviesScore,
    orderByYear,
    orderAlphabetically,
    turnHoursToMinutes,
    bestYearAvg,
  };
}
