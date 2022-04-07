import React, { useState, useEffect } from "react";
import axios from "axios";
import Playlist from "../../Component/Tracks/index";
import Alist from "../create-playlist";
import Profile from "../../Component/Profile/index";
import { useSelector } from "react-redux";

function Search() {
  const accessToken = useSelector((state) => state.accessToken.value)
  const [data, setData] = useState([]);
  const [query, setQuery] = useState("");
  const [selectedTrack, setSelectedTrack] = useState([]);
  const [combinedTracks, setCombinedTracks] = useState([]);
  const [user, setUser] = useState({
    displayName: '',
    imagesUrl: '',
    user_id: undefined
  });
  const [addPlaylistData, setAddPlaylistData] = useState({
    title: '',
    description: '',
  })

  const handleOnChange = (e) => {
    setQuery(e.target.value);
  };

  const getTracks = async (accessToken) => {
    const data = await axios
      .get(
        `https://api.spotify.com/v1/search?q=${query}&type=track&access_token=${accessToken}`
      )
      .then((response) => response)
      .catch((error) => error)
    setData(data.data.tracks.items);
    console.log(data);
  };

  const fetchUserData = async () => {
    const data = await axios
      .get(
        `https://api.spotify.com/v1/me?access_token=${accessToken}`
      )
      .catch((error) => error)
    setUser({ ...user, displayName: data.data.display_name, user_id: data.data.id })
    console.log(data);
  }

  const handleSelectedTrack = (uri) => {
    const alreadySelected = selectedTrack.find(selectedTrack => selectedTrack === uri);
    if (alreadySelected) {
      setSelectedTrack(selectedTrack.filter(selectedTrack => selectedTrack !== uri));
    }
    else {
      setSelectedTrack([...selectedTrack, uri]);
    }
    console.log(selectedTrack);
  }

  useEffect(() => {
    const combinedTracksWithSelectedTrack = data.map((track) => ({
      ...track,
      isSelected: selectedTrack.find(selectedTrack => selectedTrack === track.uri),
    }));
    setCombinedTracks(combinedTracksWithSelectedTrack);
  }, [selectedTrack, data]);

  const bodyParams = {
    name: addPlaylistData.title,
    description: addPlaylistData.description,
    collaborative: false,
    public: false
  }
  const header = {
    Authorization: `Bearer ${accessToken}`
  }
  const itemParams = {
    uris: selectedTrack
  }
  const handleAddItemToPlaylist = async (id) => {
    const data = await axios
        .post(
            `https://api.spotify.com/v1/playlists/${id}/tracks`, itemParams,
            {
                headers: header
            }
        )
        .catch((error) => error)
    console.log(data);
  }

  const handleAddPlaylistOnChange = e => {
    const { name, value } = e.target;
    setAddPlaylistData({ ...addPlaylistData, [name]: value })
  }
  const handleAddPlaylistOnSubmit = async e => {
    e.preventDefault();
    console.log(addPlaylistData);
    await axios
        .post(
            `https://api.spotify.com/v1/users/${user.user_id}/playlists`, bodyParams,
            {
                headers: header
            }
        )
        .then((response) => (
            handleAddItemToPlaylist(response.data.id)))
        .catch((error) => error)
  }

  return (
    <div>
      <Profile
        fetchUserData={fetchUserData}
        user={user}
      />

      <Alist
        handleAddPlaylistOnChange={handleAddPlaylistOnChange}
        handleAddPlaylistOnSubmit={handleAddPlaylistOnSubmit}
        addPlaylistData={addPlaylistData}
      />
      <input onChange={handleOnChange} />
      <button onClick={() => { getTracks(accessToken) }}>
        Search
      </button>

      {combinedTracks !== undefined && (
        <Playlist combinedTracks={combinedTracks} handleSelectedTrack={handleSelectedTrack} />
      )}

    </div>
  );



}

export default Search;