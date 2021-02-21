import { Button } from 'react-bootstrap'
import {useDispatch} from 'react-redux'
import {updateTodo} from '../redux/action'
import React ,{useState}from 'react'
function Task({todo}) {
    const dispatch = useDispatch()
    const [editable, setEditable] = useState(false)
    const [done, setDone] = useState(todo.isDone)
    const [desc,setDesc] = useState(todo.description)
    return (
            
             <tr>
      <td>{todo.id}</td>
      <td>{editable ? <input onChange={(e)=>setDesc(e.target.value)} value={desc} type='text' placeholder={todo.description}/> :todo.description}</td>
      <td>{editable ? <input onChange={(e)=>setDone(e.target.value)} value={done} type='text' placeholder={todo.isDone}/> :todo.isDone}</td>
      <td><Button  onClick={()=> {dispatch(updateTodo({...todo,description:desc,isDone:done}));
       if(editable){
          setDesc(todo.description)
      } setEditable(!editable)}} className="m-2"variant="primary">{editable?"update":"Edit"}</Button>  
</td>
    </tr>
               
    )
}

export default Task
