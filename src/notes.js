import React,{useState} from "react";
import { noteref } from "./firebase";


function createnote(){
     console.log('run')
     const [note , setnote] = useState('')

     const CreateNote = (e: React.FormEvent<EventTarget>) =>{
         e.preventDefault()
         const item = {
             task:note,
             done:false
         }
         noteref.push(item)
         setnote('')
     }
     return(
         console.log('run'),
         <form onSubmit={CreateNote}>
             <input type='text ' value={note} onChange={(e)=> setnote(e.target.value)} placeholder = 'Create note'/>
         </form>
     )

}

export default createnote;