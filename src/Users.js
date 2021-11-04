import { useState,Link } from "react";
import InputTextile from "./InputTextile";
import axios from "axios";
const api = axios.create({ baseURL: "http://localhost:4000" });


function Users(){


    const [state, setState] = useState({

        email: "",
        password: "",

      });

      function handleChnage(event){

        setState({...state,[event.target.name]:event.target.value,})
    
    }
    
    
    async function handleSubmit(event) {
        event.preventDefault();
    
        try {
          const response = await api.post("http://localhost:5000/login", state);
    
    
          console.log(response);
    
        } catch (err) {
          console.log(err.response);
    
          // Garantindo que o objeto de erro tem as propriedades que precisamos para evitar tentar acessar propriedades de undefined
         
        }
      }


      return(


        <div>
        <h1>Login</h1>
        <form onSubmit={handleSubmit}>
    
      
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

export default Users