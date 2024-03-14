

import { Outlet } from 'react-router-dom';
import Menu from '../components/Menu';
// import AddCartNum from '../components/AddCartNum';
// import HocComp from '../components/HocComp'
import '../App.css'; 
import DarkTheme from '../components/DarkTheme'

function Body(){


    return <>
      
       <Menu/>
     
       <Outlet></Outlet>

       {/* <AddCartNum/> */}

       {/* <DarkTheme/> */}
    </>
}

export default Body;