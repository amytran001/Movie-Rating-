const movie = {
    title: '',
    director: '',
    rating: 0,
    
    displayInfo() {
        return `${this.title} directed by ${this.director}, Rating: ${this.rating}`;
    }
};

// Constructor 
function Movie(title, director, rating) {
    this.title = title;
    this.director = director;
    this.rating = rating;
}

Movie.prototype.displayInfo = function() {
    return `${this.title} directed by ${this.director}, Rating: ${this.rating}`;
};

function createMovie(title, director, rating) {
    let movieTitle = title;
    let movieDirector = director;
    let movieRating = rating;

    return {
        getTitle() {
            return movieTitle;
        },
        getDirector() {
            return movieDirector;
        },
        getRating() {
            return movieRating;
        },
        displayInfo() {
            return `${movieTitle} directed by ${movieDirector}, Rating: ${movieRating}`;
        }
    };
}

// Function to handle form submission and display movies
function handleFormSubmit(event) {
    event.preventDefault();

    const title = document.getElementById('title').value;
    const director = document.getElementById('director').value;
    const rating = parseFloat(document.getElementById('rating').value);

    const newMovie = new Movie(title, director, rating);
    addMovieToList(newMovie);
    
    document.getElementById('movieForm').reset();
}

function addMovieToList(movie) {
    const movieUl = document.getElementById('movieUl');
    const li = document.createElement('li');
    li.textContent = movie.displayInfo();
    movieUl.appendChild(li);
}

document.getElementById('movieForm').addEventListener('submit', handleFormSubmit);
