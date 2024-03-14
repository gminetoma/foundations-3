"use strict";

// WRITE YOUR CODE HERE

// Warmup
let sum = (numbers = []) => {
  let total = 0;
  for (const number of numbers) {
    total += number;
  }
  return total;
};

let countSpaces = (string) => {
  let count = 0;
  for (const char of string) {
    char === " " && count++;
  }
  return count;
};

let createNumberArray = (number) => {
  let numbers = [];
  for (let counter = 1; counter <= number; counter++) {
    numbers.push(counter);
  }
  return numbers;
};

// console.log(sum([1, 4, 2, 9])); // returns 16
// console.log(countSpaces("This is an example")); // returns 3
// console.log(createNumberArray(5)); // returns [1, 2, 3, 4, 5]

// Objects as Complex Types: Exercises
let movies = [
  {
    title: "Star Wars",
    year: 1977,
    minutes: 120,
    isblackAndWhite: false,
  },
  {
    title: "Citizen Kane",
    year: 1941,
    minutes: 119,
    isblackAndWhite: true,
  },
  {
    title: "So we Bought a Zoo",
    year: 2011,
    minutes: 124,
    isblackAndWhite: false,
  },
  {
    title: "The Wizard of Oz",
    year: 1939,
    minutes: 102,
    isblackAndWhite: false,
  },
  {
    title: "The Matrix",
    year: 1999,
    minutes: 127,
    isblackAndWhite: false,
  },
];

let getMovieByTitle = (movieTitle) => {
  for (const movie of movies) {
    let title = movie.title.toLowerCase();
    movieTitle = movieTitle.toLowerCase();
    if (title.startsWith("the")) title = title.substring(4);
    if (movieTitle.startsWith("the")) movieTitle = movieTitle.substring(4);
    if (title === movieTitle) return movie;
  }
  return undefined;
};

let findTotalTime = () => {
  let totalMinutes = 0;
  for (let i = 0; i < movies.length; i += 1) {
    let movie = movies[i];
    totalMinutes += movie.minutes;
  }
  return totalMinutes;
};

console.log(findTotalTime());

let countColorFilms = () => {
  let total = 0;
  for (const movie of movies) {
    !movie.isblackAndWhite && total++;
  }
  return total;
};

console.log(countColorFilms());

let findFilmsBefore = (year) => {
  let list = [];
  for (let movie of movies) {
    movie.year < year && list.push(movie.title);
  }
  return list;
};

console.log(countColorFilms(199));

let findLatestFilm = () => {
  let returnMovie = { year: 0 };
  for (let movie of movies) {
    if (movie.year > returnMovie.year) {
      returnMovie = movie;
    }
  }
  return returnMovie.title;
};

console.log(findLatestFilm());

let doesMovieExist = (movieTitle) => {
  return getMovieByTitle(movieTitle) ? true : false;
};

console.log(doesMovieExist("The Wizard of Oz"));

let addReviews = () => {
  for (const movie of movies) movie.reviews = [];
};

addReviews();
console.log(movies);

let writeReview = (movieTitle, text, stars) => {
  let movie = getMovieByTitle(movieTitle);
  let review = {
    stars: stars,
    text: text,
  };
  movie && movie.reviews.push(review);
  return movie;
};

console.log(writeReview("The Wizard of Oz", "Toto is a funny name.", 7));

let getReviews = (movieTitle) => {
  let movie = getMovieByTitle(movieTitle);
  if (!movie) return undefined;
  let reviews = movie.reviews;
  return reviews.length !== 0 ? reviews[reviews.length - 1].text : "There are no reviews yet!";
};

writeReview("The Matrix", "Everything is so dark.", 8);
writeReview("Star Wars", "The title says Wars but this movie has only 1 war.", 1);
writeReview("The Matrix", "I like the part where they spin around in slow-motion.", 10);
writeReview("Star Wars", "I like the alien band playing space-clarinets.", 3);
writeReview("Star Wars", "I finally understand all the jokes and references other people make.", 5);

console.log(getReviews("The Matrix")); // Should return 'I like the part where they spin around in slow-motion.'

let addSummary = () => {
  for (const movie of movies) {
    movie.showSummary = function () {
      let summary = "";
      let hours = this.minutes >= 60 ? Math.floor(this.minutes / 60) : 0;
      let minutes = this.minutes % 60 !== 0 ? this.minutes % 60 : 0;

      summary += `${this.title} (${this.year}).\n`;
      summary += `This movie is in ${this.isblackAndWhite ? "black and white" : "color"}.\n`;
      summary += `This movie is ${hours === 0 ? "" : hours === 1 ? "1 hour " : hours + " hours "}${
        hours === 0 ? "" : minutes === 0 ? "" : "and "
      }${minutes === 0 ? "" : minutes === 1 ? "1 minute" : minutes + " minutes"} long.\n`;
      summary += `${
        this.reviews.length === 0
          ? "No reviews."
          : this.reviews.length === 1
          ? "1 review: "
          : this.reviews.length + " reviews:"
      }\n\n`;
      for (const review of this.reviews) {
        summary += `(${review.stars === 1 ? "1 star" : review.stars + " stars"})`;
        summary += ` ${"*".repeat(review.stars)}\n`;
        summary += `${review.text}\n\n`;
      }
      console.log(summary);
    };
  }
};

addSummary();

let showSummary = (movieTitle) => {
  let movie = getMovieByTitle(movieTitle);
  if (!movie) return console.log(movieTitle + " not found");
  movie.showSummary();
};

showSummary("Star Wars");
showSummary("matrix");
showSummary("citiZen Kane");
