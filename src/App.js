import AOS from 'aos'; 
import './App.css';
import { RouterProvider } from 'react-router-dom';
import router from './Routers/Router';
import 'react-photo-view/dist/react-photo-view.css';
import 'aos/dist/aos.css';
function App() {
  AOS.init();
  return (
    <div  className="max-w-screen-xl  mx-auto app ">
      <RouterProvider router={router}>
   
      </RouterProvider>
    </div>
  );
}

export default App;
