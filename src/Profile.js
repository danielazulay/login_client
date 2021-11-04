import { useState } from "react";
import InputTextile from "./InputTextile";
import axios from "axios";
const api = axios.create({ baseURL: "http://localhost:4000" });


function Profile(){


    const [state, setState] = useState({

        email: "",
        password: "",

      });

      async function handleChnage(event){

        setState({...state,[event.target.name]:event.target.value,})

        const response = await api.get("http://localhost:5000/profile", state);
        console.log(response);
    }
    
 


      return(


        <div>
        <h1>profile</h1>
        <form >
    
        <InputTextile
        name="name"
        type="text"
        value={state.name}
        onChange={handleChnage}
        label="name"
        />
        <InputTextile
        name="email"
        type="text"
        value={state.email}
        onChange={handleChnage}
        label="email"
        />
    
    <InputTextile
        name="password"
        type="text"
        value={state.password}
        onChange={handleChnage}
        label="password"
        />
        <button type="submit">salvar</button>
    
        </form>
    
  {/*   <Link to="/sign">sign</Link> */}
    
    </div>
      )
}

export default Profile