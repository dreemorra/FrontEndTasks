import Sidebar       from '../components/Sidebar.js'
import * as dbFunctions from '../../services/dbFunctions.js'

let Home = {
    render : async () => {
        let view =  /*html*/
        ` 
        <div style="display: flex;">
        <div id="sidebar_container"></div>
        <main id="main-container">
        <div class="content">
            <section class="playlists-container">
                <h2 id="nav-playlists">Popular playlists</h2>
                <ul id="popular-list" class="playlist-items"></ul>
            </section>
            <section class="search-container">
                <h2 id="nav-search">Search</h2>
                <input id="search-input" placeholder="Search">
                <ul id="search-list" class="search-items"></ul>
            </section>
            <section id="library-section" class="library-container">
                <h2 id="nav-library">Your library</h2>
                <ul id="library-list" class="playlist-items"></ul>
            </section>
            <section class="artists-container">
                <h2 id="nav-artists">Artists</h2>
                <ul id="artists-list" class="playlist-items"></ul>
            </section>
            <section class="genres-container">
                <h2 id="nav-genres">Genres</h2>
                <ul id="genre-list" class="playlist-items"></ul>
            </section>
            <section class="albums-container">
                <h2 id="nav-albums">Albums</h2>
                <ul id="album-list" class="playlist-items"></ul>
            </section>
            </div>
        </main>
        </div>
        `
        return view
    }
    
    , after_render: async () => { 
        const sidebar = null || document.getElementById('sidebar_container');

        const artistlist = document.getElementById('artists-list');   
        const genrelist = document.getElementById('genre-list');
        const albumlist = document.getElementById('album-list');
        const popularlist = document.getElementById('popular-list');
        const librarylist = document.getElementById('library-list');
        const searchlist = document.getElementById('search-list');

        const artists = await dbFunctions.getItems('artists');
        const genres = await dbFunctions.getItems('genres');
        const albums = await dbFunctions.getItems('albums');
        const playlists = await dbFunctions.getItems('playlists');
        const songs = await dbFunctions.getItems('songs');
        const users = await dbFunctions.getItems('users');
        let likedPlaylistsList;

        let query = ""

        sidebar.innerHTML = await Sidebar.render();
        await Sidebar.after_render();

        firebase.auth().onAuthStateChanged(firebaseUser => {
            if (firebaseUser){
                document.getElementById("library-section").classList.remove('hide');
            } else {
                document.getElementById("library-section").classList.add('hide');
            }
        });

        if (firebase.auth().currentUser) {
            let likedPlaylists;
            for(const [index, userRef] of users.entries()){
                if (!userRef) continue;
                let userId = index;
                console.log("UserId: " + userId);
                if (userRef.username == firebase.auth().currentUser.email) {
                    likedPlaylists = await dbFunctions.getItems('users/' + userId + '/likedPlaylists');
                    break;
                }
            }

            if(likedPlaylists) {
                likedPlaylistsList = playlists.filter((elem) => {
                    return likedPlaylists.some((filter) => {
                        return filter.id === elem.id;
                    });
                });
            }
            console.log(likedPlaylistsList);
        }

        const searchInput = document.getElementById('search-input');

        function getPlaylistType(str) {
            if (str.includes("Album")) {
                return "album";
            } else if (str.includes("Artist")) {
                return "artist";
            } else if (str.includes("Genre")) {
                return "genre";
            } else if (str.includes("Playlist")) {
                return "playlist";
            }
        }

        if(playlists) {
            console.log(playlists);
            playlists.slice(1,5).forEach(async function(playlistRef) {
                const picUrl = await dbFunctions.getItemImage(playlistRef.idPicture);
                let playlistType = getPlaylistType(playlistRef.idPicture);
                let playlistLI = document.createElement('LI');
                playlistLI.className = 'playlist-item';
                playlistLI.innerHTML = `
                <div class="playlist-div">
                    <a href="/#/${playlistType}/${playlistRef.id}">
                        <img class="playlist-img" src=${picUrl} alt="Playlist image">
                        <div class="playlist-play-btn">
                            <span class="medium-play-btn"> play_arrow </span>
                        </div>
                    </a>
                    <a class="playlist-name-link" href="/#/${playlistType}/${playlistRef.id}">${playlistRef.name}</a>
                    <p class="playlist-description">${playlistRef.desc}</p>
                </div>
                `
                popularlist.appendChild(playlistLI);
            });
        }

        librarylist.innerHTML = `
                <a id="liked-ref" href="/#/liked">
                <li id="liked-item">
                    <div id="liked-div">
                        <p id="liked-description">Liked songs</p>
                        <p id="liked-name">1488 liked songs</p>
                    </div>
                </li>
                </a>
                `
                
        if(likedPlaylistsList) {

            likedPlaylistsList.forEach(async function(playlistRef) {
                const picUrl = await dbFunctions.getItemImage(playlistRef.idPicture);
                let playlistType = getPlaylistType(playlistRef.idPicture);
                let playlistLI = document.createElement('LI');
                playlistLI.className = 'playlist-item';
                playlistLI.innerHTML = `
                <div class="playlist-div">
                    <a href="/#/${playlistType}/${playlistRef.id}">
                        <img class="playlist-img" src=${picUrl} alt="Playlist image">
                        <div class="playlist-play-btn">
                            <span class="medium-play-btn"> play_arrow </span>
                        </div>
                    </a>
                    <a class="playlist-name-link" href="/#/${playlistType}/${playlistRef.id}">${playlistRef.name}</a>
                    <p class="playlist-description">${playlistRef.desc}</p>
                </div>
                `
                librarylist.appendChild(playlistLI);
            });
        }

        searchInput.addEventListener("keyup", function(event) {
            query = searchInput.value;
            // console.log(query);
            searchlist.innerHTML = "";
            songs.forEach(async function(songRef, index) {
                if (query && (songRef.name.toLowerCase().includes(query) || songRef.artist.toLowerCase().includes(query))) {
                    const picUrl = await dbFunctions.getItemImage(songRef.idPicture);
                    let searchLI = document.createElement('LI');
                    searchLI.className = 'song-item';
                    searchLI.innerHTML = `
                    <div class="song-image-div">
                        <img class="song-image" src=${picUrl} alt="Song image">
                        <div class="song-play-btn">
                            <span id="a${index}" class="little-play-btn"> play_arrow </span>
                        </div>
                    </div>
                    <div class="song-info">
                        <a class="song-name">${songRef.name}</a>
                        <a class="song-artist">${songRef.artist}</a>
                    </div>
                    `
                    searchlist.appendChild(searchLI);
                }
            });
        });

        if (albums) {
            albums.forEach(async function(albumRef){
                const picUrl = await dbFunctions.getItemImage(albumRef.idPicture);
                let albumLI = document.createElement('LI');
                albumLI.className = 'playlist-item';
                albumLI.innerHTML = `
                <div class="playlist-div">
                    <a href="/#/album/${albumRef.idPlaylist}">
                        <img class="playlist-img" src=${picUrl} alt="Playlist image">
                        <div class="playlist-play-btn">
                        <span class="medium-play-btn"> play_arrow </span>
                        </div>
                    </a>
                        <a class="playlist-name-link" href="/#/album/${albumRef.idPlaylist}">${albumRef.name}</a>
                        <p class="playlist-description">${albumRef.year}</p>
                </div>
                `
                albumlist.appendChild(albumLI);
            });
        }

        if (genres) {
            genres.forEach(async function(genreRef){
                const picUrl = await dbFunctions.getItemImage(genreRef.idPicture);
                let genreLI = document.createElement('LI');
                genreLI.className = 'genre-item';
                genreLI.innerHTML = `
                <a class="genres-img-ref" href="/#/genre/${genreRef.idPlaylist}">
                <img class="genres-img" src=${picUrl} alt="Genre image"></a>
                <a class="genre-name-link" href="/#/genre/${genreRef.idPlaylist}">${genreRef.name}</a>
                `
                genrelist.appendChild(genreLI);
            });
        }

        if (artists) {
            artists.forEach(async function(artistRef){
                const picUrl = await dbFunctions.getItemImage(artistRef.idPicture);
                let artistLI = document.createElement('LI');
                artistLI.className = 'playlist-item';
                artistLI.innerHTML = `
                <div class="playlist-div">
                   <a href="/#/artist/${artistRef.idPlaylist}">
                       <img class="artist-img" src=${picUrl} alt="Artist image">
                       <div class="playlist-play-btn">
                               <span class="medium-play-btn"> play_arrow </span>
                       </div>
                   </a>
                   <a class="playlist-name-link" href="/#/artist/${artistRef.idPlaylist}">${artistRef.name}</a>
                </div>
                `
                artistlist.appendChild(artistLI);
            });
        }

        searchlist.addEventListener("click", async function(e){
            event.preventDefault();
            if (e.target && e.target.nodeName == "SPAN") {
                if(e.target.id.includes("a")) {
                    console.log(e.target.id);
                    if (firebase.auth().currentUser) {
                    dbFunctions.pushPlaylist(firebase.auth().currentUser.email, [parseInt(e.target.id.substr(1))]);
                    } else {
                        alert("Login first.")
                    }
                }  
            }
        });
    }   
}

export default Home;

