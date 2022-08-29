import { useState } from "react";
import { useHistory, useParams } from 'react-router-dom';

/**
 * Editfilm is the main function for this component, it makes it possible to edit the film with the PUT method, it similar to 
 * the Create component. it Uses the useState hook to update the values the user puts in the input fields that is in a form-format.
 * @returns it returns values with the onChange and target.value properties and updates the values with useState.
 * After that, the fetch with PUT method updates the database with the specific id using the useParams function imported from 
 * react router dom. With the useHistory function, also imported from react-router-dom, it takes you to the homepage.
 */
const Editfilm = () => {

const { id } = useParams();



const [title, setTitle] = useState('');
const [genreId, setGenreId] = useState('');
const [description, setDescription] = useState('');
const [isEdit, SetIsEdit] = useState(false);
const history = useHistory();

const handleEdit = (e) => {
    e.preventDefault();
    const film = { title, genreId, description };

    SetIsEdit(true);
    
    fetch('http://localhost:4000/films/' + id, {
        method: 'PUT',
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(film)
    }).then(() => {
        console.log('Film was edited');
        SetIsEdit(false);
        history.push('/');
    })
}

    return ( 
        <div className="create">
<h2>Edit the film</h2>
<form onSubmit={handleEdit}>
    <div>
    <div>Film title</div>
    <input 
    type="text" className="inputField"
    required 
    value ={title}
    onChange={(e) => setTitle(e.target.value)}
    />
    </div>

    <div>
    <h3>Film genre Id</h3>
    <div>comedy:1 horror:2 drama:3</div>
    <input 
    type="number" className="inputField" 
    min="0"
    max="3"
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
    { !isEdit && <button className="edit">Edit film</button>}
    { isEdit && <button className="edit" disabled>film was edited</button>}
</form>
        </div>
     );
}
 
export default Editfilm;