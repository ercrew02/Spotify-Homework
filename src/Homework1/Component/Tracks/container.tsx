import "../../../model.css"
import Button from '@mui/material/Button';

const Tracks = ({track, handleSelectedTrack}) => {
    
    const { album, name: songName, isSelected, uri} =track;

    return(
    <div className="flex-container">
        <div>
        <img src={album.images[2].url} id='Cover' alt="This Must Be a Album Cover"></img>
        </div>
        <div>
        <p id='Title'>{songName}</p>
        <p id='Artis'>{track.artists[0].name}</p>
        <Button 
        variant="contained" 
        disableElevation 
        className="selectButton" 
        type="submit" 
        value="Submit"onClick={() => handleSelectedTrack(uri)}>
            {isSelected ? 'Deselect' : 'Select'}
        </Button>
        </div>
        
    </div>
    );
};

export default Tracks;