import { useDispatch } from "react-redux";
import { addContact } from "redux/addContacts/addContacts";
import { filtrar } from "redux/addContacts/addContacts";

const Bar = () => { 
    const dispatch = useDispatch();  

    const handleCreatecontact = (e) => {
        e.preventDefault();
        const {text,number} = e.target.elements;
        if (text.value && number.value) {
            dispatch(addContact({
              nombre:text.value,
              numero:number.value
            }));
          }
    };
    const filtro = (e) =>{
      e.preventDefault();
      
      dispatch(filtrar(e.target.value));
      
    }
    return (
        <form onSubmit={handleCreatecontact}>
          <h3>Add Contact</h3>
          <input type="text" placeholder="Add Contact" name="text" />
          <input type="text" placeholder="Number" name="number" />
          <input type="text" placeholder="filter" name="filetro" onChange={filtro}/>
          <button type="submit">Add task</button>
        </form>
      );
};



export default Bar;