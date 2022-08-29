
import Filmlist from './Filmlist';
import useFetch from './useFetch';
import Search from './Search';
import Footer from './Footer';

//using useState hook to update the filmlist and the useEffect hook to fetch the data from the json file.
/**
 * List function that is rendering the Filmlist and the Search component. It imports the Usefetch components and the properties
 * to be able to use them together with the URL adress. Using films as props with the Filmlist
 * @returns the filmlist with the help of data and the useFetch component, and the search component.
 */
const List = () => {
const { data: films, loading } = useFetch('http://localhost:4000/films');



// putting out the value that was fetched with useFetch
    return ( 
        <div className="Lists">

        { loading && <div>Loading page...</div> }
         { films && <Filmlist films={films}  />}
         <div className="mainsearch">< Search /> </div>
         <div><Footer /></div>
        </div>
     );
}
 
export default List;