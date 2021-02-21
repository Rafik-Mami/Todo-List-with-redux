import React,{useState} from "react";
import { useSelector } from "react-redux";
import Task from "./Task";
import {Table,Button } from 'react-bootstrap'
function TaskList() {
  const todos = useSelector((state) => state);
  const [done,setDone] = useState(true)
  return (
    <div className="my-3">
    <Button style={{marginLeft:'900px',marginBottom:'100px'}}onClick={()=>setDone(false)} variant="primary">task not done</Button>
    <Table striped bordered hover variant="dark">
  <thead>
    <tr>
      <th>#id</th>
      <th>description</th>
      <th>isDone</th>
      
    </tr>
  </thead>
  <tbody>
  
    {done? todos.map((todo) => {
        return <Task key={todo.id} todo={todo}/>;
      }):todos.filter((todo)=> todo.isDone==='False'
      ).map((todo) => {
        return <Task key={todo.id} todo={todo}/>;
      }

      )}  
       </tbody>
      </Table>
    </div>
  );
}

export default TaskList;
