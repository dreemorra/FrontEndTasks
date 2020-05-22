import Sidebar       from '../components/Sidebar.js'
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
                            <img id="playlist-cover" class="playlist-img" src="https://f4.bcbits.com/img/a1517161160_10.jpg" alt="Cover image">
                        </div>
                        <div class="playlistMainInfo">
                            <h2>Playlist</h2>
                            <h1 class="playlist-name">Playlist_Name</h1>
                            <p class="playlistDescription">Playlist_Description</p>
                            <p class="playlistDescription">14h 48min</p>
                        </div>
                        <div class="playlist-actions">
                            <button class="playlist-btn">Play</button>
                            <button class="playlist-btn">Add to Favotites</button>
                        </div>
                    </div>
                    <div class="playlistItems">
                        <ol>
                            <li class="cur-playlist-item">
                                <div class="song-item">
                                    <div class="playlist-song-div">
                                        <img class="playlist-song-image" src="https://f4.bcbits.com/img/a1517161160_10.jpg" alt="Song image">
                                        <div class="song-play-btn">
                                            <span class="medium-play-btn"> play_arrow </span>
                                        </div>
                                    </div>
                                    <div class="song-info">
                                        <a class="song-name" href="*">Result_Song_Name</a>
                                        <a class="song-artist" href="*">Result_Song_Artist</a>
                                    </div>
                                </div>
                                <div><p class="song-time">2:28</p></div>
                            </li>
                            <li class="cur-playlist-item">
                                <div class="song-item">
                                    <div class="playlist-song-div">
                                        <img class="playlist-song-image" src="https://f4.bcbits.com/img/a1517161160_10.jpg" alt="Song image">
                                        <div class="song-play-btn">
                                            <span class="medium-play-btn"> play_arrow </span>
                                        </div>
                                    </div>
                                    <div class="song-info">
                                        <a class="song-name" href="*">Result_Song_Name</a>
                                        <a class="song-artist" href="*">Result_Song_Artist</a>
                                    </div>
                                </div>
                                <div><p class="song-time">2:28</p></div>
                            </li>
                            <li class="cur-playlist-item">
                                <div class="song-item">
                                    <div class="playlist-song-div">
                                        <img class="playlist-song-image" src="https://f4.bcbits.com/img/a1517161160_10.jpg" alt="Song image">
                                        <div class="song-play-btn">
                                            <span class="medium-play-btn"> play_arrow </span>
                                        </div>
                                    </div>
                                    <div class="song-info">
                                        <a class="song-name" href="*">Result_Song_Name</a>
                                        <a class="song-artist" href="*">Result_Song_Artist</a>
                                    </div>
                                </div>
                                <div><p class="song-time">2:28</p></div>
                            </li>
                            <li class="cur-playlist-item">
                                <div class="song-item">
                                    <div class="playlist-song-div">
                                        <img class="playlist-song-image" src="https://f4.bcbits.com/img/a1517161160_10.jpg" alt="Song image">
                                        <div class="song-play-btn">
                                            <span class="medium-play-btn"> play_arrow </span>
                                        </div>
                                    </div>
                                    <div class="song-info">
                                        <a class="song-name" href="*">Result_Song_Name</a>
                                        <a class="song-artist" href="*">Result_Song_Artist</a>
                                    </div>
                                </div>
                                <div><p class="song-time">2:28</p></div>
                            </li>
                            <li class="cur-playlist-item">
                                <div class="song-item">
                                    <div class="playlist-song-div">
                                        <img class="playlist-song-image" src="https://f4.bcbits.com/img/a1517161160_10.jpg" alt="Song image">
                                        <div class="song-play-btn">
                                            <span class="medium-play-btn"> play_arrow </span>
                                        </div>
                                    </div>
                                    <div class="song-info">
                                        <a class="song-name" href="*">Result_Song_Name</a>
                                        <a class="song-artist" href="*">Result_Song_Artist</a>
                                    </div>
                                </div>
                                <div><p class="song-time">2:28</p></div>
                            </li>
                            <li class="cur-playlist-item">
                                <div class="song-item">
                                    <div class="playlist-song-div">
                                        <img class="playlist-song-image" src="https://f4.bcbits.com/img/a1517161160_10.jpg" alt="Song image">
                                        <div class="song-play-btn">
                                            <span class="medium-play-btn"> play_arrow </span>
                                        </div>
                                    </div>
                                    <div class="song-info">
                                        <a class="song-name" href="*">Result_Song_Name</a>
                                        <a class="song-artist" href="*">Result_Song_Artist</a>
                                    </div>
                                </div>
                                <div><p class="song-time">2:28</p></div>
                            </li>
                            <li class="cur-playlist-item">
                                <div class="song-item">
                                    <div class="playlist-song-div">
                                        <img class="playlist-song-image" src="https://f4.bcbits.com/img/a1517161160_10.jpg" alt="Song image">
                                        <div class="song-play-btn">
                                            <span class="medium-play-btn"> play_arrow </span>
                                        </div>
                                    </div>
                                    <div class="song-info">
                                        <a class="song-name" href="*">Result_Song_Name</a>
                                        <a class="song-artist" href="*">Result_Song_Artist</a>
                                    </div>
                                </div>
                                <div><p class="song-time">2:28</p></div>
                            </li>
                            <li class="cur-playlist-item">
                                <div class="song-item">
                                    <div class="playlist-song-div">
                                        <img class="playlist-song-image" src="https://f4.bcbits.com/img/a1517161160_10.jpg" alt="Song image">
                                        <div class="song-play-btn">
                                            <span class="medium-play-btn"> play_arrow </span>
                                        </div>
                                    </div>
                                    <div class="song-info">
                                        <a class="song-name" href="*">Result_Song_Name</a>
                                        <a class="song-artist" href="*">Result_Song_Artist</a>
                                    </div>
                                </div>
                                <div><p class="song-time">2:28</p></div>
                            </li>
                            <li class="cur-playlist-item">
                                <div class="song-item">
                                    <div class="playlist-song-div">
                                        <img class="playlist-song-image" src="https://f4.bcbits.com/img/a1517161160_10.jpg" alt="Song image">
                                        <div class="song-play-btn">
                                            <span class="medium-play-btn"> play_arrow </span>
                                        </div>
                                    </div>
                                    <div class="song-info">
                                        <a class="song-name" href="*">Result_Song_Name</a>
                                        <a class="song-artist" href="*">Result_Song_Artist</a>
                                    </div>
                                </div>
                                <div><p class="song-time">2:28</p></div>
                            </li>
                            <li class="cur-playlist-item">
                                <div class="song-item">
                                    <div class="playlist-song-div">
                                        <img class="playlist-song-image" src="https://f4.bcbits.com/img/a1517161160_10.jpg" alt="Song image">
                                        <div class="song-play-btn">
                                            <span class="medium-play-btn"> play_arrow </span>
                                        </div>
                                    </div>
                                    <div class="song-info">
                                        <a class="song-name" href="*">Result_Song_Name</a>
                                        <a class="song-artist" href="*">Result_Song_Artist</a>
                                    </div>
                                </div>
                                <div><p class="song-time">2:28</p></div>
                            </li>
                            <li class="cur-playlist-item">
                                <div class="song-item">
                                    <div class="playlist-song-div">
                                        <img class="playlist-song-image" src="https://f4.bcbits.com/img/a1517161160_10.jpg" alt="Song image">
                                        <div class="song-play-btn">
                                            <span class="medium-play-btn"> play_arrow </span>
                                        </div>
                                    </div>
                                    <div class="song-info">
                                        <a class="song-name" href="*">Result_Song_Name</a>
                                        <a class="song-artist" href="*">Result_Song_Artist</a>
                                    </div>
                                </div>
                                <div><p class="song-time">2:28</p></div>
                            </li>
                            <li class="cur-playlist-item">
                                <div class="song-item">
                                    <div class="playlist-song-div">
                                        <img class="playlist-song-image" src="https://f4.bcbits.com/img/a1517161160_10.jpg" alt="Song image">
                                        <div class="song-play-btn">
                                            <span class="medium-play-btn"> play_arrow </span>
                                        </div>
                                    </div>
                                    <div class="song-info">
                                        <a class="song-name" href="*">Result_Song_Name</a>
                                        <a class="song-artist" href="*">Result_Song_Artist</a>
                                    </div>
                                </div>
                                <div><p class="song-time">2:28</p></div>
                            </li>
                            <li class="cur-playlist-item">
                                <div class="song-item">
                                    <div class="playlist-song-div">
                                        <img class="playlist-song-image" src="https://f4.bcbits.com/img/a1517161160_10.jpg" alt="Song image">
                                        <div class="song-play-btn">
                                            <span class="medium-play-btn"> play_arrow </span>
                                        </div>
                                    </div>
                                    <div class="song-info">
                                        <a class="song-name" href="*">Result_Song_Name</a>
                                        <a class="song-artist" href="*">Result_Song_Artist</a>
                                    </div>
                                </div>
                                <div><p class="song-time">2:28</p></div>
                            </li>
                            <li class="cur-playlist-item">
                                <div class="song-item">
                                    <div class="playlist-song-div">
                                        <img class="playlist-song-image" src="https://f4.bcbits.com/img/a1517161160_10.jpg" alt="Song image">
                                        <div class="song-play-btn">
                                            <span class="medium-play-btn"> play_arrow </span>
                                        </div>
                                    </div>
                                    <div class="song-info">
                                        <a class="song-name" href="*">Result_Song_Name</a>
                                        <a class="song-artist" href="*">Result_Song_Artist</a>
                                    </div>
                                </div>
                                <div><p class="song-time">2:28</p></div>
                            </li>
                        </ol>
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
        const sidebar = null || document.getElementById('sidebar_container');
        sidebar.innerHTML = await Sidebar.render();
        await Sidebar.after_render();
    }
}


export default Playlist;