import TaskInput from '../components/TaskInput';
import TaskList from '../components/TaskList';
import { useAppDispatch } from '../store';
import { logout } from '../store/slices/authSlice';

const Home = () => {
  const dispatch = useAppDispatch();

  const handleLogout = () => {
    dispatch(logout());
  };

  return (
    <div className="container mx-auto px-6">
      <div className="bg-[#003135] py-4   text-white mt-4 rounded flex items-center justify-between px-2">
        <h2 className="text-2xl">Todo App</h2>
        <button
          onClick={handleLogout}
          className="border text-xs font-bold  rounded p-2 bg-white text-[#003135]"
        >
          Logout
        </button>
      </div>

      <TaskInput />
      <TaskList />
    </div>
  );
};

export default Home;
