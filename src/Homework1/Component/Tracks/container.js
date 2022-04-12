import "../../../model.css"

const Tracks = ({track, handleSelectedTrack}) => {
    
    const { album, name: songName, isSelected, uri} =track;

    return(
    <div class="flex-container">
        <div>
        <img src={album.images[2].url} id='Cover' alt="This Must Be a Album Cover"></img>
        </div>
        <div>
        <p id='Title'>{songName}</p>
        <p id='Artis'>{track.artists[0].name}</p>
        <button onClick={() => handleSelectedTrack(uri)}>{isSelected ? 'Deselect' : 'Select'}</button>
        </div>
        
    </div>
    );
};

export default Tracks;