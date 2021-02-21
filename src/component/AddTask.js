import React,{useState} from 'react'
import {Button,Form} from 'react-bootstrap'
import { useDispatch } from 'react-redux'
import {AddTodo} from '../redux/action'
import {store} from '../redux/store'
function AddTask() {
    const [description, setDescription] = useState()
    const [id,setId]=useState(4)
   const dispatch = useDispatch()
    return (
        <div className='row m-2'>
            <Form.Control  value={description} onChange={(e)=>setDescription(e.target.value)} className='col' type="text" placeholder="Enter new description" />
            <Button onClick={()=> {setId(id+1); dispatch(AddTodo({id:id,description:description,isDone:'False'}))}} className='mx-2' variant="primary">ADD Task</Button>{' '}
        </div>
    )
}
 
export default AddTask
