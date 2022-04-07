import React, { useState, useEffect } from "react";
import Tracks from "./container";


const Playlist = ({combinedTracks, handleSelectedTrack}) => {

    const Loop = combinedTracks.map((item) => {
        const {uri} = item;
        return (
            <Tracks  key={uri} track={item} handleSelectedTrack={handleSelectedTrack}/>
        )
    })
    return(
        <div >{Loop}</div>
    )
};

export default Playlist;
