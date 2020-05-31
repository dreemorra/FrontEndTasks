import Sidebar          from '../components/Sidebar.js'
import Utils            from '../../services/Utils.js'
import * as dbFunctions from '../../services/dbFunctions.js'

let Upload = {

    render: async () => {
        return /*html*/ `
        <div style="display: flex;">
        <div id="sidebar_container"></div>
        <main id="main-container">
            <div class="content">
                <section class="currentPlaylist">
                    <div style="display: flex; flex-direction: column">
                        <div class="playlistMainInfo" style="padding: 20px; width: 25em">
                            <h1 class="playlist-name">Upload song</h1>
                            <h2 style="margin: 20px 0px 10px 0px;">Name</h2>
                            <input id="audio-name" class="playlistDescription">
                            <h2 style="margin: 10px 0px 10px 0px;">Author</h2>
                            <input id="audio-author" class="playlistDescription">
                            <h2 style="margin: 10px 0px 10px 0px;">Genre</h2>
                            <select name="genres" id="genres"></select>
                        </div>
                        <div class="playlist-actions">
                            <div style="margin: 30px 0px 30px 0px; display: flex;">
                                <label class="playlist-btn">
                                <input type="file" accept=".png" id="add-pic-button" style="display: none">
                                Add pic </label>
                                <p id="pic-name" style="margin: 10px 0px 10px 10px;"></p>
                            </div>
                            <div style="margin: 30px 0px 30px 0px; display: flex;">
                                <label class="playlist-btn">
                                <input type="file" accept=".mp3" id="add-song-button" style="display: none">
                                Add song </label>
                                <p id="file-name" style="margin: 10px 0px 10px 10px;"></p>
                            </div>
                            <div style="margin-top: 30px; display: flex;">
                                <button id="save-button" class="playlist-btn">Save</button>
                                <p id="error-text" style="margin: 10px 0px 10px 10px; color: red"></p>
                            </div>
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

        const sidebar = null || document.getElementById('sidebar_container');
        sidebar.innerHTML = await Sidebar.render();
        await Sidebar.after_render();

        const cover = document.getElementById('pic-name');
        const fileName = document.getElementById('file-name');
        const name = document.getElementById('audio-name');
        const author = document.getElementById('audio-author');
        const genres = document.getElementById('genres');
        const addPicButton = document.getElementById('add-pic-button');
        const addSongButton = document.getElementById('add-song-button');
        const saveButton = document.getElementById('save-button');

        const picId = await dbFunctions.getItems('song_pic_id/id');
        const songId = await dbFunctions.getItems('song_id/id');

        let user;        
        const users = await dbFunctions.getItems('users');
        for(const [index, userRef] of users.entries()){
            if (!userRef) continue;
            if (firebase.auth().currentUser && userRef.username == firebase.auth().currentUser.email) {
                user = userRef;
                break;
            }
        }

        const genreList = await dbFunctions.getItems('genres');
        console.log(genreList);
        for (const [index, itemRef] of genreList.entries()) {
            if (!itemRef) continue;
            let genreId = index;
            console.log(genreId);
            let genreSnapshot = await firebase.database().ref('/genres/' + genreId).once('value');
            let genre = genreSnapshot.val();
            let genreOpt = document.createElement('OPTION');
            genreOpt.value = genre.name;
            genreOpt.innerHTML = `${genre.name}`
            genres.appendChild(genreOpt);
        }

        let file = null;
        let picture = null;

        // Buttons
        addSongButton.addEventListener('change', (event) => {
            file = event.target.files[0];
            fileName.innerHTML = file.name;
        });

        addPicButton.addEventListener('change', (event) => {
            picture = event.target.files[0];
            cover.innerHTML = picture.name;
        });

        saveButton.addEventListener('click', e =>{
            if (!name.value || !author.value || !genres.value){
                document.getElementById('error-text').innerHTML = "Song must have all fields!"
            }else if (file){
                let storageRef = firebase.storage().ref('pics/id' + songId + '.mp3');
                storageRef.put(file);
                firebase.database().ref('/song_id/id').set(songId + 1);

                let thisPicId = 0;
                if (picture){
                    let storageRef = firebase.storage().ref('pics/idSongPic' + picId + '.png');
                    storageRef.put(picture);
                    firebase.database().ref('/song_pic_id/id').set(picId + 1);
                    thisPicId = picId;
                }

                firebase.database().ref('songs/' + songId).set({
                    name: name.value,
                    artist: author.value,
                    track_id: songId,
                    idPicture: ("idSongPic" + thisPicId),
                    idGenre: (genres.selectedIndex + 1),
                    genre: genres.value
                }, function(error) {
                    if (error) {
                        alert(error.message);
                    } else {
                        console.log('data saved succsessfully!');
                    }
                });

                // firebase.database().ref('users/' + user.id + '/likedPlaylists/' + (user.likedPlaylistsCount + 1)).set({
                //     id: user.likedPlaylistsCount + 1
                // });
                // firebase.database().ref('users/' + user.id).set({
                //     likedPlaylistsCount: user.likedPlaylistsCount + 1
                // });

                document.location.href = "/#/";
            } else {
                document.getElementById('error-text').innerHTML = "No file selected!";
            }
        });
    }
}


export default Upload;