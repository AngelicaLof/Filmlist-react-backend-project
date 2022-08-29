
import { Link } from "react-router-dom";

/**
 * This function is mapping through objects using them as a parameter
 * @param {object} films using props films as a parameter from the list.js file
 * @returns a list of the properties, and makes them into links with the import Link from react router dom.
 */
const Filmlist = ({films}) => {



//mapping through the object list with javascript
    return ( 
        <div className="fullList">

        {films.map((film) => (
              <div className="infofilm" key={film.id}> 
             
                 
              <Link to={`/films/${ film.id }`}>
             <div className="listtitle"><h2>{film.title}</h2></div>
              </Link>
              
              
              <Link to={`/films/${ film.id }`}>
              <div><button className="edit">Edit</button></div>
              </Link>
              
              
               <Link to={`/films/${ film.id }`}>
              <div><button className="delete">Delete</button></div>
              </Link>
             
              
              </div>
          ))} 

        </div>
     );
}
 
export default Filmlist;