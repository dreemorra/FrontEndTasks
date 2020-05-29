import Sidebar          from '../components/Sidebar.js'
import Utils            from '../../services/Utils.js'
import * as dbFunctions from '../../services/dbFunctions.js'

let Playlist = {

    render: async () => {
        return /*html*/ `
        <div style="display: flex;">
        <div id="sidebar_container"></div>
        <main id="main-container">
            <div class="content">
                <section class="currentPlaylist">
                    <div class="playlistInfo">
                        <div>
                            <img id="playlist-cover" class="playlist-img" src="" alt="Cover image">
                        </div>
                        <div class="playlistMainInfo">
                            <h2 id="playlist-title"></h2>
                            <h1 id="pl-name" class="playlist-name"></h1>
                            <p id="pl-desc" class="playlistDescription"></p>
                            <p id="pl-duration" class="playlistDescription">14h 48min</p>
                        </div>
                        <div class="playlist-actions">
                            <button id="play-button" class="playlist-btn">Play</button>
                            <button id="favorites-button" class="playlist-btn">Add to Favorites</button>
                            <button id="edit-button" class="playlist-btn">Edit</button>
                        </div>
                    </div>
                    <div class="playlistItems">
                        <ol id="playlist-list"></ol>
                    </div>
                </section>
            </div>
        </main>
        </div>
        `
    }
    // All the code related to DOM interactions and controls go in here.
    // This is a separate call as these can be registered only after the DOM has been painted
    , after_render: async () => {
        let request = Utils.parseRequestURL()
        let playlistId = decodeURIComponent(request.id);

        const sidebar = null || document.getElementById('sidebar_container');
        sidebar.innerHTML = await Sidebar.render();
        await Sidebar.after_render();
        
        const editButton = document.getElementById('edit-button');


        let playlist = await dbFunctions.getItems('playlists/' + playlistId);
        const cover = document.getElementById('playlist-cover');
        const name = document.getElementById('pl-name');
        const desc = document.getElementById('pl-desc');
        const songlist = document.getElementById('playlist-list');
        let songs = await dbFunctions.getItems('playlists/' + playlistId + '/songs');

        switch (request.resource) {
            case "album":
                document.getElementById('playlist-title').innerHTML = "Album";
                cover.src = await dbFunctions.getItemImage('albums', playlist.idPicture);
                break;
            case "playlist":
                document.getElementById('playlist-title').innerHTML = "Playlist";
                cover.src = await dbFunctions.getItemImage('playlists', playlist.idPicture);
                break;
            case "genre":
                document.getElementById('playlist-title').innerHTML = "Genre";
                document.getElementById('pl-duration').classList.add('hide');
                cover.src = await dbFunctions.getItemImage('genres', playlist.idPicture);
                break;
            case "artist":
                document.getElementById('playlist-title').innerHTML = "Artist";
                document.getElementById('pl-duration').classList.add('hide');
                cover.src = await dbFunctions.getItemImage('artists', playlist.idPicture);
                break;
        }

        name.innerHTML = playlist.name;
        desc.innerHTML = playlist.desc;

        console.log(songs);
        if (songs) {
            for(const [index, songRef] of songs.entries()){
                if (!songRef) continue;
                let songId = index;
                console.log("songId " + songId);
                let songSnapshot = await firebase.database().ref('/songs/' + songId).once('value');
                let song = songSnapshot.val();
                console.log(song);
                const picUrl = await dbFunctions.getItemImage('albums', song.idPicture);
                // console.log(picUrl);
                let searchLI = document.createElement('LI');
                searchLI.className = 'cur-playlist-item';
                searchLI.innerHTML = `
                <div class="song-item">
                    <div class="playlist-song-div">
                        <img class="playlist-song-image" src=${picUrl} alt="Song image">
                        <div class="song-play-btn">
                            <span class="medium-play-btn"> play_arrow </span>
                        </div>
                    </div>
                    <div class="song-info">
                        <a class="song-name">${song.name}</a>
                        <a class="song-artist">${song.artist}</a>
                    </div>
                    </div>
                <div><p class="song-time">2:28</p></div>
                `
                songlist.appendChild(searchLI);
            }
        }

        editButton.addEventListener("click", async function(e){
            document.location.href ="/#/edit_playlist/" + playlistId;
        });

    }
}


export default Playlist;