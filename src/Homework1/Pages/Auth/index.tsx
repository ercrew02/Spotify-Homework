import queryString from 'query-string';
import { useEffect } from 'react';
import { RootStateOrAny, useDispatch, useSelector } from "react-redux";
import { setAccessToken } from "../../reduxThing/acssTokenSlice"
import Login from "../Login"

const Home = () => {
    //const [accessToken, setAccessToken] = useState('');
    
    const accessToken = useSelector((state: RootStateOrAny) => state.accessToken.value);
    // const accessToken = useSelector((state) => state.accessToken.value);
    const dispatch = useDispatch();
    // const history = useHistory(); 

    useEffect(()=>{
        const parsed = queryString.parse(window.location.hash);
        dispatch(setAccessToken(parsed.access_token));
        console.log(accessToken);
    }, [accessToken, dispatch])

    return(
        <>
        <Login /> 
        </>
            

        )

}
export default Home;