import './App.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import RefHook from './components/RefHook';
import Body from './components/Body';
import Search from './components/Search';
import Toggle from './components/Toggle';
import FetchData from './components/FetchData';
import Question from './components/Question';
import { Provider } from 'react-redux';
import store from './utils/store';
import Alert from './components/Alert';
import HigherOrder from './components/HOC/HigherOrder';

function App() {


  const router = createBrowserRouter([
    {
      path:'/',
      element:<Body/>,
      children: [
        {
          path:'/refhookeg',
          element:<RefHook/>
        },
        {
          path:'/search',
          element:<Search/>
        },
        {
          path:'/toggle_and_hideShow',
          element:<Toggle/>
        },
        {
          path:'/fetchdata',
          element:<FetchData/>
        },
        {
          path:'/questions',
          element:<Question/>
        },
        {
          path:'/alert',
          element:<Alert/>
        },
        {
          path:'/hoc',
          element:<HigherOrder/>
        }

      ]
    },
  
])

  return (
    <div className="App" >
      <Provider store ={store}>

     

      <RouterProvider router={router}> </RouterProvider>

      </Provider>
    
    </div>
  );
}

export default App;
