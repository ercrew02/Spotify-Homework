import Tracks from "./container";
import "../../../model.css"

const Playlist = ({combinedTracks, handleSelectedTrack}) => {

    const Loop = combinedTracks.map((item) => {
        
        const {uri} = item;
        return (
            <div className= "item">
            <Tracks  key={uri} track={item} handleSelectedTrack={handleSelectedTrack}/>
            </div>
        )
    })
    return(
        <div className= "container">
        {Loop}
        </div>
    )
};

export default Playlist;
