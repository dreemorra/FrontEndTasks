import Sidebar          from '../components/Sidebar.js'
import Utils            from '../../services/Utils.js'
import * as dbFunctions from '../../services/dbFunctions.js'

let PlaylistAdd = {

    render: async () => {
        return /*html*/ `
        <div style="display: flex;">
        <div id="sidebar_container"></div>
        <main id="main-container">
            <div class="content">
                <div class="currentPlaylist">
                    <section>
                        <div class="playlistInfo">
                            <div>
                                <img id="playlist-cover" class="playlist-img" src="" alt="Cover image">
                            </div>
                            <div class="playlistMainInfo">
                                <h2>Playlist</h2>
                                <input id="pl-name" class="playlist-name" style="border: 0 solid #000;"></h1>
                                <input id="pl-desc" class="playlistDescription" style="border: 0 solid #000;"></p>
                                <p id="playlist-author" class="playlistDescription"></p>
                            </div>
                            <div class="playlist-actions">
                                <label class="playlist-btn">
                                <input type="file" accept=".png" id="add-pic-button" style="display: none">
                                Edit pic </label>
                                <button id="save-button" class="playlist-btn">Save</button>
                                <button id="delete-button" class="playlist-btn">Delete</button>
                            </div>
                        </div>
                    </section>
                    <section class="search-container" style="padding: 2em 2em 0 2em;">
                        <h2 id="nav-search">Search</h2>
                        <input id="search-input" placeholder="Search">
                        <ul id="search-list" class="search-items"></ul>
                    </section>
                    <section class="playlistItems">
                        <ol id="playlist-list"></ol>
                    </section>
                </div>
            </div>
        </main>
        </div>
        `
    }
    // All the code related to DOM interactions and controls go in here.
    // This is a separate call as these can be registered only after the DOM has been painted
    , after_render: async () => {
        let request = Utils.parseRequestURL()
        let playlistId;
        if (request.resource == "edit_playlist") {
            playlistId = decodeURIComponent(request.id);
        }
        else {
            let playlistIdRef = await firebase.database().ref('/playlist_id/id').once('value');
            playlistId = playlistIdRef.val();
        }

        const sidebar = null || document.getElementById('sidebar_container');
        sidebar.innerHTML = await Sidebar.render();
        await Sidebar.after_render();

        const cover = document.getElementById('playlist-cover');
        const name = document.getElementById('pl-name');
        const desc = document.getElementById('pl-desc');
        const playlistAuthor = document.getElementById('playlist-author');
        const songlist = document.getElementById('playlist-list');
        let author;

        const addPicButton = document.getElementById('add-pic-button');
        const saveButton = document.getElementById('save-button');
        const deleteButton = document.getElementById('delete-button');

        const searchlist = document.getElementById('search-list');
        const searchInput = document.getElementById('search-input');
        let query = ""
        
        let user;
        let userId;        
        const users = await dbFunctions.getItems('users');
        for(const [index, userRef] of users.entries()){
            if (!userRef) continue;
            if (firebase.auth().currentUser && userRef.username == firebase.auth().currentUser.email) {
                user = userRef;
                userId = index;
                break;
            }
        }
        console.log(userId);

        let snap = await firebase.database().ref('/playlists/' + playlistId);
        snap.on("value", async function(snap) {
            let playlist = snap.val();
            name.value = playlist.name;
            desc.value = playlist.desc;
            playlistAuthor.innerHTML = "Author: " + playlist.created;
            author = playlist.created;
            let picUrl = await dbFunctions.getItemImage(playlist.idPicture);
            cover.src = picUrl;
        });

        
        let songs = await dbFunctions.getItems('playlists/' + playlistId + '/songs');
        if (songs) {
            for(const [index, songRef] of songs.entries()){
                if (!songRef) continue;
                let songId = songRef.id;
                let songSnapshot = await firebase.database().ref('/songs/' + songId).once('value');
                let song = songSnapshot.val();
                console.log(song);
                const picUrl = await dbFunctions.getItemImage(song.idPicture);
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
                        <a class="song-name" href="*">${song.name}</a>
                        <a class="song-artist" href="*">${song.artist}</a>
                    </div>
                    </div>
                <div><p class="song-time">2:28</p></div>
                `
                songlist.appendChild(searchLI);
            }
        }

        const allSongs = await dbFunctions.getItems('songs');
        searchInput.addEventListener("keyup", function(event) {
            query = searchInput.value;
            searchlist.innerHTML = "";
            allSongs.forEach(async function(songRef, index){
                if (query && (songRef.name.toLowerCase().includes(query) || songRef.artist.toLowerCase().includes(query))) {
                    const picUrl = await dbFunctions.getItemImage(songRef.idPicture);
                    let searchLI = document.createElement('LI');
                    searchLI.className = 'song-item';
                    searchLI.id = index;
                    searchLI.innerHTML = `
                    <div class="song-image-div">
                        <img class="song-image" src=${picUrl} alt="Song image">
                        <div class="song-play-btn">
                            <span class="little-play-btn"> play_arrow </span>
                        </div>
                    </div>
                    <div id="${index}" class="song-info">
                        <p id="${index}" class="song-name">${songRef.name}</p>
                        <p id="${index}" class="song-artist">${songRef.artist}</p>
                    </div>
                    `
                    searchlist.appendChild(searchLI);
                }
            });
        });

        async function updatePlaylistSongs(){
            songlist.innerHTML = "";
            const snap = await firebase.database().ref('/playlists/' + playlistId + '/songs');
            snap.on("value", async function(snap) {
                let idList = snap.val();
                console.log(idList);
                songlist.innerHTML = "";
                if (idList){  
                    for(const [index,itemRef] of idList.entries()){
                        if (!itemRef) continue;
                        let songId = itemRef.id;
                        console.log("songId " + songId);
                        let songSnapshot = await firebase.database().ref('/songs/' + songId).once('value');
                        let song = songSnapshot.val();
                        console.log(song);
                        
                        let picUrl = await dbFunctions.getItemImage(song.idPicture); 

                        let playlistLI = document.createElement('LI');
                        playlistLI.className = 'song-item';
                        playlistLI.id = index;
                        playlistLI.innerHTML = `
                        <div class="song-image-div">
                        <img class="song-image" src=${picUrl} alt="Song image">
                        <div class="song-play-btn">
                            <span class="little-play-btn"> play_arrow </span>
                        </div>
                        </div>
                        <div id="${index}" class="song-info">
                            <p id="${index}" class="song-name">${song.name}</p>
                            <p id="${index}" class="song-artist">${song.artist}</p>
                        </div>
                        `;
                        songlist.appendChild(playlistLI);
                        console.log(song.author);
                    }
                }
            }, function (errorObject) {
                console.log("The read failed: " + errorObject.code);
            });

        }

        // Buttons and clicks
        searchlist.addEventListener("click", async function(e){
            event.preventDefault();
            if (e.target && e.target.nodeName == "LI" || e.target.nodeName == "P") {
                const snapshot = await firebase.database().ref('/playlists/' + playlistId + "/songCount").once('value');
                const lastSongId = snapshot.val();
                console.log(lastSongId);
                //Increment song count by 1
                firebase.database().ref('/playlists/' + playlistId + "/songCount").set(lastSongId + 1);
                //Push song id into playlist
                console.log("target id " + e.target.id);
                firebase.database().ref('/playlists/' + playlistId + "/songs/" + lastSongId).set({
                    id : e.target.id
                }, function(error) {
                    if (error) {
                        alert(error.message);
                    } 
                });
                await updatePlaylistSongs();
            }
        });

        saveButton.addEventListener("click", async function(e) {
            firebase.database().ref('/playlists/' + playlistId + "/name").set(name.value);
            firebase.database().ref('/playlists/' + playlistId + "/desc").set(desc.value);
            firebase.database().ref('/playlists/'  + playlistId + "/id").set(playlistId);
            if(request.resource == "add_playlist") {
                console.log(playlistId+1);
                firebase.database().ref('/playlist_id/id').set(playlistId+1);
                firebase.database().ref('users/' + userId + '/likedPlaylists/' + (user.likedPlaylistsCount + 1) + '/id').set(playlistId);
                firebase.database().ref('users/' + userId + '/likedPlaylistsCount').set(user.likedPlaylistsCount + 1);
            }

            document.location.href ="/#/playlist/" + playlistId;
        });

        deleteButton.addEventListener("click", async function(e){
            firebase.database().ref('/playlists/' + playlistId).remove();
            document.location.href ="/#/";
        });

        addPicButton.addEventListener('change', async (event) => {
            let file = event.target.files[0];

            let storageRef = firebase.storage().ref('pics/idPlaylist' + playlistId + '.png');
            await storageRef.put(file);

            firebase.database().ref('/playlists/' + playlistId + '/idPicture').set('idPlaylist' + playlistId);

            let picUrl = await dbFunctions.getItemImage('idPlaylist' + playlistId);
            cover.src = picUrl;
        });

    }
}


export default PlaylistAdd;