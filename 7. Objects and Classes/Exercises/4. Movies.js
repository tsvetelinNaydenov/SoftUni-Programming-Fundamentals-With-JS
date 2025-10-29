function solve(movieList){
    let movies = [];

    for (let currentMovieCommand of movieList){
        let command = currentMovieCommand.split(' ');

        if (command[0] === 'addMovie'){
            let currentMovie = command.slice(1).join(' ');
            addMovie(currentMovie);
        }
        else if (command.includes('directedBy')){
            let index = command.indexOf('directedBy');
            let movie = command.slice(0, index).join(' ');
            let director = command.slice(index + 1).join(' ');

            addDirector(movie, director);
        }
        else if (command.includes('onDate')){
            let index = command.indexOf('onDate');
            let movie = command.slice(0, index).join(' ');
            let director = command.slice(index + 1).join(' ');

            addDate(movie, director);
        }
    }

    for (let currentMovie of movies){
        let hasName = currentMovie.hasOwnProperty('name');
        let hasDirector = currentMovie.hasOwnProperty('director');
        let hasDate = currentMovie.hasOwnProperty('date');

        if (hasName && hasDirector && hasDate){
            console.log(JSON.stringify(currentMovie));
        }
    }

    function addMovie(movieName){
        let currentMovieObj = {
            name: movieName
        }

        movies.push(currentMovieObj);
    }
    function addDirector(movieName, currentDirector){
        for (let index = 0; index < movies.length; index++){
            if (movies[index].name === movieName){
                movies[index]['director'] = currentDirector;
            }
        }
    }
    function addDate(movieName, date){
        for (let index = 0; index < movies.length; index++){
            if (movies[index].name === movieName){
                movies[index]['date'] = date;
            }
        }
    }
}

solve([
'addMovie The Avengers',
'addMovie Superman',
'The Avengers directedBy Anthony Russo',
'The Avengers onDate 30.07.2010',
'Captain America onDate 30.07.2010',
'Captain America directedBy Joe Russo']);