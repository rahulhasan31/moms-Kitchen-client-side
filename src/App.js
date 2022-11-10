
import './App.css';
import { RouterProvider } from 'react-router-dom';
import router from './Routers/Router';
import 'react-photo-view/dist/react-photo-view.css';

function App() {
  return (
    <div  className="max-w-screen-xl drop-shadow-lg mx-auto bg-blue-100  ">
      <RouterProvider router={router}>
   
      </RouterProvider>
    </div>
  );
}

export default App;
