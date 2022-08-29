import { useState } from "react";
import { useHistory } from 'react-router-dom';
import Footer from './Footer';


/**
 * the main function for the create page
 * @returns the content for the create-page
 */
const Create = () => {
//using useState to set and change values
const [title, setTitle] = useState('');
const [genreId, setGenreId] = useState('');
const [description, setDescription] = useState('');
const [isPending, SetIsPending] = useState(false);
const history = useHistory();

//a submit form that is used for posting a new film to the database using fetch with the POST method
/**
 * the handlesubmit function, takes in parameter
 * @param {any} e the preventdefault makes the default action not happen if its possible
 * @param {string, number} e  There is also parameters in the onChange property that changes the value from the input of the title, 
 * genreId and the description with the onChange and target value property.
 */
const handleSubmit = (e) => {
    e.preventDefault();
    const film = { title, genreId, description };
//SetIsPending is first set to true while the function is loading. When the data is posted it is set to false. History.push makes you return to the homepage
    SetIsPending(true);
    //fetching the URL to the json database and post the content. 
    fetch('http://localhost:4000/films', {
        method: 'POST',
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(film)
    }).then(() => {
        console.log('new film added');
        SetIsPending(false);
        history.push('/');
    })
}

    return ( 
        <div className="create">
            <div className="createForm">

<form onSubmit={handleSubmit}>
    <h2 className="addHeader">Add a new film</h2>
    <h3>Film title</h3>
    <input 
    type="text" className="inputField"
    required 
    value ={title}
    onChange={(e) => setTitle(e.target.value)}
    />
    <div>
    </div>
    <div>
    <h3>Film genre Id:</h3>
    <div>comedy:1 horror:2 drama:3</div>
    <input 
    type="number" className="inputField"
    required
     value ={genreId}
    onChange={(e) => setGenreId(e.target.value)}
    />
    </div>
    <div>
    <h3>Film description</h3>
    <div>
    <textarea required className="inputArea" rows="5" cols="30"
     value ={description}
    onChange={(e) => setDescription(e.target.value)}
    ></textarea>
    </div>
    </div>
    { !isPending && <button className="edit">Add film</button>}
    { isPending && <button className="edit" disabled>Adding film</button>}
</form>
</div>
< Footer/>
        </div>
     );
}
 
export default Create;