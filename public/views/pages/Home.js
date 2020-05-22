import Sidebar       from '../components/Sidebar.js'

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
                <ul class="playlist-items">
                    <li class="playlist-item">
                        <div class="playlist-div">
                        <a href="/#/playlist">
                            <img class="playlist-img" src="https://f4.bcbits.com/img/a1517161160_10.jpg" alt="Playlist image">
                            <div class="playlist-play-btn">
                                <span class="medium-play-btn"> play_arrow </span>
                            </div>
                        </a>
                            <a class="playlist-name-link" href="/#/playlist">Playlist_Name</a>
                            <p class="playlist-description">Playlist_Description</p>
                        </div>
                    </li>
                    <li class="playlist-item">
                        <div class="playlist-div">
                        <a href="/#/playlist">
                            <img class="playlist-img" src="https://f4.bcbits.com/img/a1517161160_10.jpg" alt="Playlist image">
                            <div class="playlist-play-btn">
                                <span class="medium-play-btn"> play_arrow </span>
                            </div>
                        </a>
                            <a class="playlist-name-link" href="/#/playlist">Playlist_Name</a>
                            <p class="playlist-description">Playlist_Description</p>
                        </div>
                    </li>
                    <li class="playlist-item">
                        <div class="playlist-div">
                        <a href="/#/playlist">
                            <img class="playlist-img" src="https://f4.bcbits.com/img/a1517161160_10.jpg" alt="Playlist image">
                            <div class="playlist-play-btn">
                                <span class="medium-play-btn"> play_arrow </span>
                            </div>
                        </a>
                            <a class="playlist-name-link" href="/#/playlist">Playlist_Name</a>
                            <p class="playlist-description">Playlist_Description</p>
                        </div>
                    </li>
                    <li class="playlist-item">
                        <div class="playlist-div">
                        <a href="/#/playlist">
                            <img class="playlist-img" src="https://f4.bcbits.com/img/a1517161160_10.jpg" alt="Playlist image">
                            <div class="playlist-play-btn">
                                <span class="medium-play-btn"> play_arrow </span>
                            </div>
                        </a>
                            <a class="playlist-name-link" href="/#/playlist">Playlist_Name</a>
                            <p class="playlist-description">Playlist_Description</p>
                        </div>
                    </li>
                    <li class="playlist-item">
                        <div class="playlist-div">
                        <a href="/#/playlist">
                            <img class="playlist-img" src="https://f4.bcbits.com/img/a1517161160_10.jpg" alt="Playlist image">
                            <div class="playlist-play-btn">
                                <span class="medium-play-btn"> play_arrow </span>
                            </div>
                        </a>
                            <a class="playlist-name-link" href="/#/playlist">Playlist_Name</a>
                            <p class="playlist-description">Playlist_Description</p>
                        </div>
                    </li>
                    <li class="playlist-item">
                        <div class="playlist-div">
                        <a href="/#/playlist">
                            <img class="playlist-img" src="https://f4.bcbits.com/img/a1517161160_10.jpg" alt="Playlist image">
                            <div class="playlist-play-btn">
                                <span class="medium-play-btn"> play_arrow </span>
                            </div>
                        </a>
                            <a class="playlist-name-link" href="/#/playlist">Playlist_Name</a>
                            <p class="playlist-description">Playlist_Description</p>
                        </div>
                    </li>
                </ul>
            </section>
            <section class="search-container">
                <h2 id="nav-search">Search</h2>
                <input id="search-input" placeholder="Search">
                <ul class="search-items">
                    <li class="song-item">
                        <div class="song-image-div">
                            <img class="song-image" src="https://f4.bcbits.com/img/a1517161160_10.jpg" alt="Song image">
                            <div class="song-play-btn">
                                <span class="little-play-btn"> play_arrow </span>
                            </div>
                        </div>
                        <div class="song-info">
                            <a class="song-name" href="*">Result_Song_Name</a>
                            <a class="song-artist" href="*">Result_Song_Artist</a>
                        </div>
                    </li>
                    <li class="song-item">
                        <div class="song-image-div">
                            <img class="song-image" src="https://f4.bcbits.com/img/a1517161160_10.jpg" alt="Song image">
                            <div class="song-play-btn">
                                <span class="little-play-btn"> play_arrow </span>
                            </div>
                        </div>
                        <div class="song-info">
                            <a class="song-name" href="*">Result_Song_Name</a>
                            <a class="song-artist" href="*">Result_Song_Artist</a>
                        </div>
                    </li>
                    <li class="song-item">
                        <div class="song-image-div">
                            <img class="song-image" src="https://f4.bcbits.com/img/a1517161160_10.jpg" alt="Song image">
                            <div class="song-play-btn">
                                <span class="little-play-btn"> play_arrow </span>
                            </div>
                        </div>
                        <div class="song-info">
                            <a class="song-name" href="*">Result_Song_Name</a>
                            <a class="song-artist" href="*">Result_Song_Artist</a>
                        </div>
                    </li>
                    <li class="song-item">
                        <div class="song-image-div">
                            <img class="song-image" src="https://f4.bcbits.com/img/a1517161160_10.jpg" alt="Song image">
                            <div class="song-play-btn">
                                <span class="little-play-btn"> play_arrow </span>
                            </div>
                        </div>
                        <div class="song-info">
                            <a class="song-name" href="*">Result_Song_Name</a>
                            <a class="song-artist" href="*">Result_Song_Artist</a>
                        </div>
                    </li>
                    <li class="song-item">
                        <div class="song-image-div">
                            <img class="song-image" src="https://f4.bcbits.com/img/a1517161160_10.jpg" alt="Song image">
                            <div class="song-play-btn">
                                <span class="little-play-btn"> play_arrow </span>
                            </div>
                        </div>
                        <div class="song-info">
                            <a class="song-name" href="*">Result_Song_Name</a>
                            <a class="song-artist" href="*">Result_Song_Artist</a>
                        </div>
                    </li>
                    <li class="song-item">
                        <div class="song-image-div">
                            <img class="song-image" src="https://f4.bcbits.com/img/a1517161160_10.jpg" alt="Song image">
                            <div class="song-play-btn">
                                <span class="little-play-btn"> play_arrow </span>
                            </div>
                        </div>
                        <div class="song-info">
                            <a class="song-name" href="*">Result_Song_Name</a>
                            <a class="song-artist" href="*">Result_Song_Artist</a>
                        </div>
                    </li>
                    <li class="song-item">
                        <div class="song-image-div">
                            <img class="song-image" src="https://f4.bcbits.com/img/a1517161160_10.jpg" alt="Song image">
                            <div class="song-play-btn">
                                <span class="little-play-btn"> play_arrow </span>
                            </div>
                        </div>
                        <div class="song-info">
                            <a class="song-name" href="*">Result_Song_Name</a>
                            <a class="song-artist" href="*">Result_Song_Artist</a>
                        </div>
                    </li>
                    <li class="song-item">
                        <div class="song-image-div">
                            <img class="song-image" src="https://f4.bcbits.com/img/a1517161160_10.jpg" alt="Song image">
                            <div class="song-play-btn">
                                <span class="little-play-btn"> play_arrow </span>
                            </div>
                        </div>
                        <div class="song-info">
                            <a class="song-name" href="*">Result_Song_Name</a>
                            <a class="song-artist" href="*">Result_Song_Artist</a>
                        </div>
                    </li>
                    <li class="song-item">
                        <div class="song-image-div">
                            <img class="song-image" src="https://f4.bcbits.com/img/a1517161160_10.jpg" alt="Song image">
                            <div class="song-play-btn">
                                <span class="little-play-btn"> play_arrow </span>
                            </div>
                        </div>
                        <div class="song-info">
                            <a class="song-name" href="*">Result_Song_Name</a>
                            <a class="song-artist" href="*">Result_Song_Artist</a>
                        </div>
                    </li>
                    <li class="song-item">
                        <div class="song-image-div">
                            <img class="song-image" src="https://f4.bcbits.com/img/a1517161160_10.jpg" alt="Song image">
                            <div class="song-play-btn">
                                <span class="little-play-btn"> play_arrow </span>
                            </div>
                        </div>
                        <div class="song-info">
                            <a class="song-name" href="*">Result_Song_Name</a>
                            <a class="song-artist" href="*">Result_Song_Artist</a>
                        </div>
                    </li>
                    <li class="song-item">
                        <div class="song-image-div">
                            <img class="song-image" src="https://f4.bcbits.com/img/a1517161160_10.jpg" alt="Song image">
                            <div class="song-play-btn">
                                <span class="little-play-btn"> play_arrow </span>
                            </div>
                        </div>
                        <div class="song-info">
                            <a class="song-name" href="*">Result_Song_Name</a>
                            <a class="song-artist" href="*">Result_Song_Artist</a>
                        </div>
                    </li>
                    <li class="song-item">
                        <div class="song-image-div">
                            <img class="song-image" src="https://f4.bcbits.com/img/a1517161160_10.jpg" alt="Song image">
                            <div class="song-play-btn">
                                <span class="little-play-btn"> play_arrow </span>
                            </div>
                        </div>
                        <div class="song-info">
                            <a class="song-name" href="*">Result_Song_Name</a>
                            <a class="song-artist" href="*">Result_Song_Artist</a>
                        </div>
                    </li>
                    <li class="song-item">
                        <div class="song-image-div">
                            <img class="song-image" src="https://f4.bcbits.com/img/a1517161160_10.jpg" alt="Song image">
                            <div class="song-play-btn">
                                <span class="little-play-btn"> play_arrow </span>
                            </div>
                        </div>
                        <div class="song-info">
                            <a class="song-name" href="*">Result_Song_Name</a>
                            <a class="song-artist" href="*">Result_Song_Artist</a>
                        </div>
                    </li>
                    <li class="song-item">
                        <div class="song-image-div">
                            <img class="song-image" src="https://f4.bcbits.com/img/a1517161160_10.jpg" alt="Song image">
                            <div class="song-play-btn">
                                <span class="little-play-btn"> play_arrow </span>
                            </div>
                        </div>
                        <div class="song-info">
                            <a class="song-name" href="*">Result_Song_Name</a>
                            <a class="song-artist" href="*">Result_Song_Artist</a>
                        </div>
                    </li>
                    <li class="song-item">
                        <div class="song-image-div">
                            <img class="song-image" src="https://f4.bcbits.com/img/a1517161160_10.jpg" alt="Song image">
                            <div class="song-play-btn">
                                <span class="little-play-btn"> play_arrow </span>
                            </div>
                        </div>
                        <div class="song-info">
                            <a class="song-name" href="*">Result_Song_Name</a>
                            <a class="song-artist" href="*">Result_Song_Artist</a>
                        </div>
                    </li>
                </ul>
            </section>
            <section id="library-section" class="library-container">
                <h2 id="nav-library">Your library</h2>
                <ul class="playlist-items">
                    <a id="liked-ref" href="/#/playlist">
                        <li id="liked-item">
                            <div id="liked-div">
                                <p id="liked-description">Liked songs</p>
                                <p id="liked-name">1488 liked songs</p>
                            </div>
                        </li>
                    </a>
                    <li class="playlist-item">
                        <div class="playlist-div">
                        <a href="/#/playlist">
                            <img class="playlist-img" src="https://f4.bcbits.com/img/a1517161160_10.jpg" alt="Playlist image">
                            <div class="playlist-play-btn">
                                <span class="medium-play-btn"> play_arrow </span>
                            </div>
                        </a>
                            <a class="playlist-name-link" href="/#/playlist">Playlist_Name</a>
                            <p class="playlist-description">Playlist_Description</p>
                        </div>
                    </li>
                    <li class="playlist-item">
                        <div class="playlist-div">
                        <a href="/#/playlist">
                            <img class="playlist-img" src="https://f4.bcbits.com/img/a1517161160_10.jpg" alt="Playlist image">
                            <div class="playlist-play-btn">
                                <span class="medium-play-btn"> play_arrow </span>
                            </div>
                        </a>
                            <a class="playlist-name-link" href="/#/playlist">Playlist_Name</a>
                            <p class="playlist-description">Playlist_Description</p>
                        </div>
                    </li>
                    <li class="playlist-item">
                        <div class="playlist-div">
                        <a href="/#/playlist">
                            <img class="playlist-img" src="https://f4.bcbits.com/img/a1517161160_10.jpg" alt="Playlist image">
                            <div class="playlist-play-btn">
                                <span class="medium-play-btn"> play_arrow </span>
                            </div>
                        </a>
                            <a class="playlist-name-link" href="/#/playlist">Playlist_Name</a>
                            <p class="playlist-description">Playlist_Description</p>
                        </div>
                    </li>
                    <li class="playlist-item">
                        <div class="playlist-div">
                        <a href="/#/playlist">
                            <img class="playlist-img" src="https://f4.bcbits.com/img/a1517161160_10.jpg" alt="Playlist image">
                            <div class="playlist-play-btn">
                                <span class="medium-play-btn"> play_arrow </span>
                            </div>
                        </a>
                            <a class="playlist-name-link" href="/#/playlist">Playlist_Name</a>
                            <p class="playlist-description">Playlist_Description</p>
                        </div>
                    </li>
                </ul>
            </section>
            <section class="artists-container">
                <h2 id="nav-artists">Artists</h2>
                <ul class="playlist-items">
                    <li class="playlist-item">
                        <div class="playlist-div">
                            <a href="/#/playlist">
                                <img class="artist-img" src="https://f4.bcbits.com/img/a1517161160_10.jpg" alt="Artist image">
                                <div class="playlist-play-btn">
                                        <span class="medium-play-btn"> play_arrow </span>
                                </div>
                            </a>
                            <a class="playlist-name-link" href="*">Artist_Name</a>
                            <p class="playlist-description">Artist</p>
                        </div>
                    </li>
                    <li class="playlist-item">
                        <div class="playlist-div">
                            <a href="/#/playlist">
                                <img class="artist-img" src="https://f4.bcbits.com/img/a1517161160_10.jpg" alt="Artist image">
                                <div class="playlist-play-btn">
                                        <span class="medium-play-btn"> play_arrow </span>
                                </div>
                            </a>
                            <a class="playlist-name-link" href="*">Artist_Name</a>
                            <p class="playlist-description">Artist</p>
                        </div>
                    </li>
                    <li class="playlist-item">
                        <div class="playlist-div">
                            <a href="/#/playlist">
                                <img class="artist-img" src="https://f4.bcbits.com/img/a1517161160_10.jpg" alt="Artist image">
                                <div class="playlist-play-btn">
                                        <span class="medium-play-btn"> play_arrow </span>
                                </div>
                            </a>
                            <a class="playlist-name-link" href="*">Artist_Name</a>
                            <p class="playlist-description">Artist</p>
                        </div>
                    </li>
                    <li class="playlist-item">
                        <div class="playlist-div">
                            <a href="/#/playlist">
                                <img class="artist-img" src="https://f4.bcbits.com/img/a1517161160_10.jpg" alt="Artist image">
                                <div class="playlist-play-btn">
                                        <span class="medium-play-btn"> play_arrow </span>
                                </div>
                            </a>
                            <a class="playlist-name-link" href="*">Artist_Name</a>
                            <p class="playlist-description">Artist</p>
                        </div>
                    </li>
                </ul>
            </section>
            <section class="genres-container">
                <h2 id="nav-genres">Genres</h2>
                <ul class="playlist-items">
                    <li class="genre-item">
                        <a class="genres-img-ref" href="/#/playlist">
                            <img class="genres-img" src="https://f4.bcbits.com/img/a1517161160_10.jpg" alt="Genre image">
                        </a>
                        <a class="genre-name-link" href="/#/playlist">Genre_Name</a>
                    </li>
                    <li class="genre-item">
                        <a class="genres-img-ref" href="/#/playlist">
                            <img class="genres-img" src="https://f4.bcbits.com/img/a1517161160_10.jpg" alt="Genre image">
                        </a>
                        <a class="genre-name-link" href="/#/playlist">Genre_Name</a>
                    </li>
                    <li class="genre-item">
                        <a class="genres-img-ref" href="/#/playlist">
                            <img class="genres-img" src="https://f4.bcbits.com/img/a1517161160_10.jpg" alt="Genre image">
                        </a>
                        <a class="genre-name-link" href="/#/playlist">Genre_Name</a>
                    </li>
                    <li class="genre-item">
                        <a class="genres-img-ref" href="/#/playlist">
                            <img class="genres-img" src="https://f4.bcbits.com/img/a1517161160_10.jpg" alt="Genre image">
                        </a>
                        <a class="genre-name-link" href="/#/playlist">Genre_Name</a>
                    </li>
                </ul>
            </section>
            <section class="albums-container">
                <h2 id="nav-albums">Albums</h2>
                <ul class="playlist-items">
                    <li class="playlist-item">
                        <div class="playlist-div">
                        <a href="/#/playlist">
                            <img class="playlist-img" src="https://f4.bcbits.com/img/a1517161160_10.jpg" alt="Playlist image">
                            <div class="playlist-play-btn">
                                <span class="medium-play-btn"> play_arrow </span>
                            </div>
                        </a>
                            <a class="playlist-name-link" href="/#/playlist">Playlist_Name</a>
                            <p class="playlist-description">Playlist_Description</p>
                        </div>
                    </li>
                    <li class="playlist-item">
                        <div class="playlist-div">
                        <a href="/#/playlist">
                            <img class="playlist-img" src="https://f4.bcbits.com/img/a1517161160_10.jpg" alt="Playlist image">
                            <div class="playlist-play-btn">
                                <span class="medium-play-btn"> play_arrow </span>
                            </div>
                        </a>
                            <a class="playlist-name-link" href="/#/playlist">Playlist_Name</a>
                            <p class="playlist-description">Playlist_Description</p>
                        </div>
                    </li>
                    <li class="playlist-item">
                        <div class="playlist-div">
                        <a href="/#/playlist">
                            <img class="playlist-img" src="https://f4.bcbits.com/img/a1517161160_10.jpg" alt="Playlist image">
                            <div class="playlist-play-btn">
                                <span class="medium-play-btn"> play_arrow </span>
                            </div>
                        </a>
                            <a class="playlist-name-link" href="/#/playlist">Playlist_Name</a>
                            <p class="playlist-description">Playlist_Description</p>
                        </div>
                    </li>
                    <li class="playlist-item">
                        <div class="playlist-div">
                        <a href="/#/playlist">
                            <img class="playlist-img" src="https://f4.bcbits.com/img/a1517161160_10.jpg" alt="Playlist image">
                            <div class="playlist-play-btn">
                                <span class="medium-play-btn"> play_arrow </span>
                            </div>
                        </a>
                            <a class="playlist-name-link" href="/#/playlist">Playlist_Name</a>
                            <p class="playlist-description">Playlist_Description</p>
                        </div>
                    </li>
                </ul>
            </section>
            </div>
        </main>
        </div>
        `
        return view
    }
    , after_render: async () => { 
        const sidebar = null || document.getElementById('sidebar_container');
        sidebar.innerHTML = await Sidebar.render();
        await Sidebar.after_render();

        firebase.auth().onAuthStateChanged(firebaseUser => {
            if (firebaseUser){
                document.getElementById("library-section").classList.remove('hide');
            }else{
                document.getElementById("library-section").classList.add('hide');
            }
        });
    }

}

export default Home;

