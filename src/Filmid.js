import { useHistory, useParams } from 'react-router-dom';
import useFetch from './useFetch';
import Editfilm from './Editfilm';
import Footer from './Footer';

/**
 * The main function for this component. 
 * @returns it imports and uses useParams for the id and the useFetch method to get the data to display it in the return.
 */
const Filmid = () => {
const { id } = useParams();
const { data: film, loading } = useFetch( 'http://localhost:4000/films/' + id )
const history = useHistory();

/**
 * the handleclick function is a delete function that deletes an object from the json database. It fetches the specific 
 * object with the URL + id and with the DELETE method it deletes it from the json file, then history.push takes the user 
 * back to the homepage. The editfilm component is imported at this page.
 */
const handleClick = () => {
    fetch('http://localhost:4000/films/' + film.id, {

        method: 'DELETE'
    }).then(() => {
        history.push('/');
    })
}

    return ( 
        <div className="Film-id">
            <div className="film-Id">
        { loading && <div>Loading</div> }
        { film && (
            <article>
                <h1 className="deleteHeader">{ film.title }</h1>
                
                <div>{film.description}</div>
               
                <div><p className="deletefilm">Do you want to delete this film?</p></div>
                <button className="delete" onClick={handleClick}>Delete</button>
            </article>

        )}
        </div>
        <div className="editFilm"> <Editfilm /> </div>
        < Footer/>
    
        </div>
     );
}
 
export default Filmid;

