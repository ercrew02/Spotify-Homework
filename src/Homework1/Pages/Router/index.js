import Search from '../Search';
// import Login from '../Login';
import Home from '../Auth';
import { useSelector} from "react-redux";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Redirect,
    Link
  } from "react-router-dom";

function AppRoute() {
    // const isLogin = true;
    const accessToken = useSelector((state) => state.accessToken.value);
    return (
      <Router>
        <div >
            <Link to="/">Home</Link>
            <br/>
            <Link to="/createplaylist">Create Playlist</Link>
        </div>
        <Switch>
          <div className='App'>
            <Route path='/' component={Home}></Route>
            <Route path='/createplaylist'>
              {accessToken !== undefined ? <Search /> : <Redirect to="/" />}
            </Route>
          </div>
        </Switch>
      </Router>
    );
  }

export default AppRoute;






// import Login from '../Login';
// import Alist from '../create-playlist';
// import {Link} from 'react-router-dom'

// function Nav() {

//     if(fetchUserData !== undefined){
//         return(
//           <Link to='/Login/index.js' />
//         )
//     }
//     else{
//         return(
//           <Link to='/create-playlist/index.js' />
            
//         )
//     }
// }

// export default Nav;



//     // if(fetchUserData !== undefined){
//     //     return(
//     //       <Link to='/Login/index.js' />
//     //     )
//     // }
//     // else{
//     //     return(
//     //       <Link to='/create-playlist/index.js' />
            
//     //     )
//     // }