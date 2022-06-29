let inputField = document.querySelector('input');
let movie = document.createElement('li');
let movieTitle = document.createElement('span');
let message = document.querySelector('#message')

const crossOffMovie = (event) => {
    event.target.classList.toggle('checked')
    if(event.target.classList.contains('checked')) {
        message.textContent = 'Movie watched!'
    } else {
        message.textContent = 'Movie added back!'
    }
}

const deleteMovie = (event) => {
    event.target.parentNode.remove()
    message.textContent = 'Movie deleted!'
}

const addMovie = (event) => {
    event.preventDefault();
    movieTitle.textContent = inputField.value;
    movieTitle.addEventListener('click', crossOffMovie)
    movie.appendChild(movieTitle);
    let deleteBtn = document.createElement('button')
    deleteBtn.textContent = 'X'
    deleteBtn.addEventListener('click', deleteMovie)
    movie.appendChild(deleteBtn)
    document.querySelector('ul').appendChild(movie);
    inputField.value = '';
}


document.querySelector('form').addEventListener('submit', addMovie)

