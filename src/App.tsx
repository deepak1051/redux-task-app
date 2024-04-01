import TaskInput from './components/TaskInput';
import TaskList from './components/TaskList';

function App() {
  return (
    <div className="container mx-auto px-6">
      <h2 className="bg-pink-800 py-4 text-center text-2xl text-white mt-4 rounded">
        Todo App
      </h2>

      <TaskInput />
      <TaskList />
    </div>
  );
}

export default App;
