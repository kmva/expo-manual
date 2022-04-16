import {React, useState} from 'react';
import tokens from "../data/tokens";
import { useNavigate } from "react-router-dom";
import links from '../data/links';


export const Login = () => {

        

        const navigate = useNavigate();

        const [token, setToken] = useState('');


        const handleSubmit = () => {
            tokens.forEach(el => {
                
                if(el.token == token){

                    const group = el.groupId;
                    localStorage.setItem('isAuth', 'true');
                    navigate(`/${group}/lessons`);
                }
                
            })
   
            };
        
        

        return (
        
            <div>
            
                <h1>Connexion</h1>
                <form>
                    <label htmlFor="token"> Your token here : </label>
                    <input 
                        type="text"
                        id="token"
                        value={token}
                        onChange={(e) => setToken(e.target.value)}
                        autoComplete="off"
                        required
                    />
                    <button onClick={handleSubmit}>Submit</button>
                 
                </form>
            </div>
        
        );
    }



    

