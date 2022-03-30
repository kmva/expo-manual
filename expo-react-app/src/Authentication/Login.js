import React from 'react';
import tokens from "../data/tokens";
import { useState } from 'react';




    export const Login = () => {
        const [token, setToken] = useState('');


        const handleSubmit = e => {e.preventDefault()
        console.log(token);
            tokens.forEach(el => {
                
                if(el.token == token){
                    const group = el.groupId;
                    console.log('Logged in successfully');
                    console.log(el.groupId);

                }
                
            })

                
            }


        return (
        
            <div>
            
                <h1>Sign In</h1>
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



    

