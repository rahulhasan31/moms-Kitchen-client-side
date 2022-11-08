
import './App.css';
import { RouterProvider } from 'react-router-dom';
import router from './Routers/Router';

function App() {
  return (
    <div  className="max-w-screen-xl drop-shadow-lg mx-auto ">
      <RouterProvider router={router}>
   
      </RouterProvider>
    </div>
  );
}

export default App;
