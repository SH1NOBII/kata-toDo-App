import { formatDistanceToNow } from 'date-fns';
import './App.css';
import { Footer } from './components/Footer/Footer';
import { NewTaskForm } from './components/NewTaskForm.js/NewTaskForm';
import { TaskList } from './components/TaskList.js/TaskList';

function App() {

  const currentDate = new Date();

  const tasks = [
    {status: 'completed', description: 'Completed task', createdTime: formatDistanceToNow(currentDate)},
    {status: 'editing', description: 'Editing task', createdTime: ''},
    {status: 'view', description: 'Active task', createdTime: ''}
  ]

  return (
    <section className="todoapp">
    <NewTaskForm />
    <section className="main">
    <TaskList tasks={tasks}/>
    <Footer />
    </section>
  </section>
  );
}

export default App;
