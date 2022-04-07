import React from 'react';
import queryString from 'query-string';
import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { setAccessToken } from "../../reduxThing/acssTokenSlice"
import Login from '../Login/index';
import { useHistory } from 'react-router-dom';

const Home = () => {
    //const [accessToken, setAccessToken] = useState('');
    const accessToken = useSelector((state) => state.accessToken.value);
    const dispatch = useDispatch();
    const history = useHistory(); 

    useEffect(()=>{
        const parsed = queryString.parse(window.location.hash);
        dispatch(setAccessToken(parsed.access_token));
        console.log(accessToken);
    }, [accessToken, dispatch])

    // if(accessToken !== undefined){
    //     return(
    //         <Search  />
    //     )
    // }
    // else{
    //     return(
    //         <Login/>
            
    //     )
    // }
    return(
        <Login/>
                
        )

}
export default Home;