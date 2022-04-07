const Tracks = ({track, handleSelectedTrack}) => {
    
    const { album, name: songName, isSelected, uri} =track;

    return(
        <div>
            <img src={album.images[2].url} id='Cover' alt="This Must Be a Album Cover"></img>
             <p id='Title'>{songName}</p>{/*or u can do {songName} */}
            <p id='Artis'>{track.artists[0].name}</p>
            <button onClick={() => handleSelectedTrack(uri)}>{isSelected ? 'Deselect' : 'Select'}</button>
            <br/>
            <br/>
        </div>
    );
};

export default Tracks;