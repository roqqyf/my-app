import { Movie } from './Movie';
import poro from './porosad-poro.png'

function Movies(props) {
    const { movies = [] } = props;

    return (
        <div className="movies">
            {movies.length ? (
                movies.map((movie) => <Movie key={movie.imdbID}{...movie} /> )
            ) : (
                <div className='asas'>
                <div className="poropic">
                <h4>Not found :(</h4>
                </div>
                <div className="poropics">
                <img style={{width: 300, height: 300, margin: 50}} src={poro}/>
                </div>
                </div>
            )}
    </div>
    );
}

export { Movies };
