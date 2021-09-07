import React from 'react'
import { Alert,Form,Input, Button,message } from "antd";
import { useState } from 'react';
import axios from 'axios';
import { config } from '../../config';
export default function RegenererPassword() {
    const [Email, setEmail] = useState("");
    console.log(Email);
    const handleFormSubmit=(e)=>{
        e.preventDefault();
        const EmailPass={
         
          email:Email,
        
        }
        console.log(EmailPass);
    
    if( Email=='' ){
      
        message.error('Le champ password est obligatoire');
      
      }else{
        message.success('Le mot de passe a été modifié avec succès');
        axios.post(config+'/BoussolePro-backend/UpdatePassword.php',EmailPass).then(res=>console.log(res.data));
    
        setEmail('');
       
      }
    }
    return (
        <div>
            <Alert style={{minWidth:"1000px"}}
                message="Regénerer un mot de passe"
                description="Pour regénerer un mot de passe d'un abonné veuillez saisir son adresse mail"
                type="info"
                showIcon
                />
                <br></br>
                 
                <br></br>
                <form   className="ajoutM">
                <Form.Item >
         <label style={{marginLeft:"100px"}}><b>Email</b><span class="required">*</span></label><br></br>
           <Input style={{width:"700px",marginLeft:"100px"}} value={Email} onChange={(e)=>setEmail(e.target.value)} placeholder="Email"  required />
           </Form.Item>  
           <Form.Item >
         <div class="btn-block col">
        <button  type="primary" type="submit" onClick={handleFormSubmit} required style={{margin:"10px"}}>Soumettre</button>
      </div>
         
           </Form.Item>

                        </form>
            
        </div>
    )
}
