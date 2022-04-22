import TextField from '@mui/material/TextField';
import TextareaAutosize from '@mui/material/TextareaAutosize';
import Button from '@mui/material/Button';

const Alist = ({ handleAddPlaylistOnChange, handleAddPlaylistOnSubmit, addPlaylistData}) => {
    return (
        <div className="playlist-form">
            <h2>Create Playlist</h2>
            <form className="addPlaylistForm" onSubmit={handleAddPlaylistOnSubmit}>
                <label htmlFor="title">Title</label><br />
                <TextField id="standard-basic" label="Name of Playlist" variant="standard" type="text"  name="title" value={addPlaylistData.title} onChange={handleAddPlaylistOnChange}/>
                <br />
                <label htmlFor="description"> Description </label><br />
                <TextareaAutosize
                aria-label="minimum height"
                minRows={3}
                placeholder="Description About Your Playlist"
                style={{ width: 200 }}
                type= "text" 
                name="description" 
                value={addPlaylistData.description} 
                onChange={handleAddPlaylistOnChange} 
    />
                <br />
                <Button variant="contained" disableElevation className="selectButton" type="submit" value="Submit">
      Submit
    </Button>
            </form>
        </div>
        
    )
}

export default Alist;