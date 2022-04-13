import React from 'react';
import queryString from 'query-string';
import { useEffect } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { setAccessToken } from "../../reduxThing/acssTokenSlice"
import Login from '../Login/index';
// import { useHistory } from 'react-router-dom';
import {
    BrowserRouter as Routerr,
    Route,
    Link
  } from "react-router-dom";

const Home = () => {
    //const [accessToken, setAccessToken] = useState('');
    const accessToken = useSelector((state) => state.accessToken.value);
    const dispatch = useDispatch();
    // const history = useHistory(); 

    useEffect(()=>{
        const parsed = queryString.parse(window.location.hash);
        dispatch(setAccessToken(parsed.access_token));
        console.log(accessToken);
    }, [accessToken, dispatch])

    return(
        <Routerr>
            <Link to="/login">Login</Link>
            <Route path='/login'>
                <br/>
            <Login /> 
            </Route>
        </Routerr>
        )

}
export default Home;