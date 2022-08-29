import { useState } from 'react';



/**
 * the search component. it uses useState to set and then inside the handleSearch function it updates them.
 * there is some if statements if the data is loading or if there is an error using the usestate hook.
 * The onsubmit form has an input field and uses the input value in the fetch method together with the URL.
 * @returns the fetch method returns the data with the input value and the specific objects that matches the id
 * and then maps and output the data.
 */
const Search = () => {



const [data, setData] = useState(null);
const [loading, setLoading] =useState(true);
const [error, setError] = useState(null);
const [genreId, setGenreId] =useState("");

const handleSearch = (e) => {
     e.preventDefault();

     const searchValue = document.getElementById("searchValue").value;


   fetch("http://localhost:4000/films?genreId_like=" + searchValue)
.then((res) => res.json())
.then(
    (films) => {
        setData(films);
        setLoading(false);
        console.log(films);
    },
    (error) => {
        console.error("error fetching data:", error);
        setError(error);
    },
);


if (loading) return "loading..";
if (error) return "error!";

}

    return (  
<div className="SearchArea">
    <div>
   
<form onSubmit={handleSearch}>
    <h2 className="searchheader">Search film by genre ID below:</h2>
    <div className="category">Comedy: 1 Horror: 2 Drama: 3</div>
    <input type="number" className="inputField" id="searchValue"
    required value ={genreId}
    onChange={(e) => setGenreId(e.target.value)}

    />
    

    { <button className="edit2">Search film</button>} 

   { data && data.map((film) => (
              <div key={film.id}> 
             
             <h2>{film.title}</h2>
            

              
              </div>
          ))} 


    </form>
</div>

        </div> 
    );
}
 
export default Search;


