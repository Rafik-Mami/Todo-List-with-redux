import './App.css';
import AddTask from './component/AddTask';
import TaskList from './component/TaskList';

function App() {
  return (
    <div className="App m-5">
     <AddTask/>
     <TaskList/>
    </div>
  );
}

export default App;
