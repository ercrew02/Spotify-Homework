const Login =()=>{
    var client_id = process.env.REACT_APP_SPOTIFY_KEY;
    var redirect_uri = 'https://spotify-homework-bmz0uyucg-ercrew02.vercel.app/';

    var scope = 'playlist-modify-private';

    var url = 'https://accounts.spotify.com/authorize';
    url += '?response_type=token';
    url += '&client_id=' + encodeURIComponent(client_id||"");
    url += '&scope=' + encodeURIComponent(scope);
    url += '&redirect_uri=' + encodeURIComponent(redirect_uri);

    return(
        <>
        <a href={url}>
            <button>Login</button>
        </a>
        </>
    )
}

export default Login;

