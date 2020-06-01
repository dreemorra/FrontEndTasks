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
                            <p id="pl-author" class="playlistDescription">14h 48min</p>
                        </div>
                        <div id="actions" class="playlist-actions">
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
        let playlistId;

        const sidebar = null || document.getElementById('sidebar_container');
        sidebar.innerHTML = await Sidebar.render();
        await Sidebar.after_render();
        
        const editButton = document.getElementById('edit-button');
        const favoritesButton = document.getElementById('favorites-button');
        const songButton = document.getElementById('playlist-list');
        const playPlaylistButton = document.getElementById('play-button');

        let playlist;
        if (request.resource == "liked") {
            playlistId = 0;
            playlist = await dbFunctions.getItems('playlists/' + playlistId);
        } else {
            playlistId = decodeURIComponent(request.id);
            playlist = await dbFunctions.getItems('playlists/' + playlistId);}
        const cover = document.getElementById('playlist-cover');
        const name = document.getElementById('pl-name');
        const desc = document.getElementById('pl-desc');
        const songlist = document.getElementById('playlist-list');
        const users = await dbFunctions.getItems('users');
        let songs;

        let user;
        let userId;
        let likedPlaylists;
        
        for(const [index, userRef] of users.entries()){
            if (!userRef) continue;
            if (firebase.auth().currentUser && userRef.username == firebase.auth().currentUser.email) {
                user = userRef;
                userId = index;
                likedPlaylists = await dbFunctions.getItems('users/' + userId + '/likedPlaylists');
                break;
            }
        }
        
        if (request.resource == "liked") {
            songs = await dbFunctions.getItems('users/' + userId + '/likedSongs');
        } else songs = await dbFunctions.getItems('playlists/' + playlistId + '/songs');
        
        let likedSongs = await dbFunctions.getItems('users/' + userId + '/likedSongs');
        let isLikedPlaylist = false;
        if (likedPlaylists) {
            isLikedPlaylist = likedPlaylists.filter(elem => elem.id == playlistId);
            if (isLikedPlaylist.length > 0) favoritesButton.innerHTML = "Favorite!";
        }

        cover.src = await dbFunctions.getItemImage(playlist.idPicture);
        switch (request.resource) {
            case "album":
                document.getElementById('playlist-title').innerHTML = "Album";
                document.getElementById('edit-button').classList.add('hide');
                document.getElementById('pl-author').innerHTML = "Author: " + playlist.created;
                break;
            case "playlist":
                document.getElementById('playlist-title').innerHTML = "Playlist";
                document.getElementById('pl-author').innerHTML = "Author: " + playlist.created;
                break;
            case "genre":
                document.getElementById('playlist-title').innerHTML = "Genre";
                document.getElementById('pl-author').classList.add('hide');
                document.getElementById('edit-button').classList.add('hide');
                break;
            case "artist":
                document.getElementById('playlist-title').innerHTML = "Artist";
                document.getElementById('pl-author').innerHTML = "Author: " + playlist.created;
                document.getElementById('edit-button').classList.add('hide');
                break;
            case "liked":
                document.getElementById('favorites-button').classList.add('hide');
                document.getElementById('edit-button').classList.add('hide');
                break;
        }

        name.innerHTML = playlist.name;
        desc.innerHTML = playlist.desc;

        console.log(songs);
        if (songs) {
            for(const [index, songRef] of songs.entries()){
                if (!songRef) continue;
                let songId = songRef.id;
                console.log("songId " + songId);
                let songSnapshot = await firebase.database().ref('/songs/' + songId).once('value');
                let song = songSnapshot.val();
                // console.log(song);
                let isLikedSong = false;
                console.log(likedSongs);
                if(likedSongs) {
                    isLikedSong = likedSongs.filter(elem => elem.id == songId);
                }
                let likeIcon;
                console.log(isLikedSong);
                if (isLikedSong.length > 0) 
                    likeIcon = "favorite"; 
                else likeIcon = "favorite_border";

                const picUrl = await dbFunctions.getItemImage(song.idPicture);
                let searchLI = document.createElement('LI');
                searchLI.className = 'cur-playlist-item';
                searchLI.innerHTML = `
                <div id="song-div" class="song-item">
                    <div class="playlist-song-div">
                        <img class="playlist-song-image" src=${picUrl} alt="Song image">
                        <div class="song-play-btn">
                            <span id="a${index}" class="medium-play-btn"> play_arrow </span>
                        </div>
                    </div>
                    <div class="song-info">
                        <a class="song-name">${song.name}</a>
                        <a class="song-artist">${song.artist}</a>
                    </div>
                    </div>
                <div style="display: flex;">
                    <div class="song-time">
                        <span id="b${index}" style="color: rgba(251, 192, 45);" class="material-icons"> ${likeIcon} </span>
                    </div>
                    <p class="song-time">2:28</p>
                </div>
                `
                songlist.appendChild(searchLI);
            }
        }

        //Buttons and clicks
        songButton.addEventListener("click", async function(e){
            event.preventDefault();
            if (e.target && e.target.nodeName == "SPAN") {
                if(e.target.id.includes("a")) {
                    console.log(e.target.id);
                    if (firebase.auth().currentUser) {
                    dbFunctions.pushPlaylist(firebase.auth().currentUser.email, [songs[e.target.id.substr(1)].id]);
                    } else {
                        alert("Login first.")
                    }
                }
                if(e.target.id.includes("b")) {
                    let index = e.target.id.substr(1);
                    const likedId = songs[index].id;
                    const likeButton = document.getElementById(e.target.id);
                    console.log("liked id:" + likedId);

                    likedSongs = await dbFunctions.getItems('users/' + userId + '/likedSongs');
                    let likedSongsCount = await dbFunctions.getItems('users/' + userId + '/likedSongsCount');

                    let isLikedSong = false;
                    console.log(likedSongs);
                    if(likedSongs && likedSongs.length > 0) {
                        isLikedSong = likedSongs.filter(elem => elem.id == likedId);
                    }
                    console.log(isLikedSong);
                    if (isLikedSong == false && isLikedSong.length > 0) {
                        const likedSongIndex = getLikedIndex(likedSongs, likedId);
                        console.log("liked index: " + likedSongIndex);
                        firebase.database().ref('users/' + userId + '/likedSongs/' + likedSongIndex).remove();
                        firebase.database().ref('users/' + userId + '/likedSongsCount').set(likedSongsCount - 1);
                        likeButton.innerHTML = `<span style="color: rgba(251, 192, 45);" class="material-icons"> favorite_border </span>`;
                        console.log("Unlike!");
                    } else {
                        firebase.database().ref('users/' + userId + '/likedSongs/' + (likedSongsCount + 1) + '/id').set(likedId);
                        firebase.database().ref('users/' + userId + '/likedSongsCount').set(likedSongsCount + 1);
                        likeButton.innerHTML = `<span style="color: rgba(251, 192, 45);" class="material-icons"> favorite </span>`;  
                        console.log("Like!");
                    }
                }
            }
        });

        editButton.addEventListener("click", async function(e){
            document.location.href ="/#/edit_playlist/" + playlistId;
        });

        favoritesButton.addEventListener("click", async function(e) {
            if(isLikedPlaylist.length > 0) {
                likedPlaylists = await dbFunctions.getItems('users/' + userId + '/likedPlaylists');
                let likedPlaylistsCount = await dbFunctions.getItems('users/' + userId + '/likedPlaylistsCount');
                const likedPlaylistIndex = getLikedIndex(likedPlaylists, playlistId);
                firebase.database().ref('users/' + userId + '/likedPlaylists/' + likedPlaylistIndex).remove();
                firebase.database().ref('users/' + userId + '/likedPlaylistsCount').set(likedPlaylistsCount - 1);
                favoritesButton.innerHTML = "Add to Favorites";
            } else {
                firebase.database().ref('users/' + userId + '/likedPlaylists/' + (likedPlaylistsCount + 1) + '/id').set(parseInt(playlistId));
                firebase.database().ref('users/' + userId + '/likedPlaylistsCount').set(likedPlaylistsCount + 1);
                favoritesButton.innerHTML = "Favorite!";  
            }
        });

        playPlaylistButton.addEventListener("click",async function(e) {
            if (firebase.auth().currentUser){
                let list = await dbFunctions.getPlaylistList(playlistId);
                dbFunctions.pushPlaylist(firebase.auth().currentUser.email, list);
            }else{
                alert("Login first.")
            }
        });

        function getLikedIndex(arr, id) {
            for (const [index, itemRef] of arr.entries()) {
                if (!itemRef) continue;
                if (itemRef.id == id) {
                    return index;
                }
            }
        }

    }
}


export default Playlist;