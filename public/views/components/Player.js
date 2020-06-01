import * as dbFunctions from '../../services/dbFunctions.js'

let Player = {
    render: async () => {
        let view =  /*html*/`
        <section id="player-section">
          <div class="player-input">
            <input type="range" min="0" max="300" value="0" id="range">
          </div>
          <div class="player-content">
            <div style="display: flex">
              <div style="padding: 10px">
                <button id="player-prev" class="mdc-icon-button material-icons player-button">fast_rewind</button>
                <button id="player-play" class="mdc-icon-button material-icons player-button">play_arrow</button>
                <button id="player-next" class="mdc-icon-button material-icons player-button">fast_forward</button>
              </div style="display: flex; flex-direction: row">
              <div class="song-details" style="display: grid;">
                <img class="player-song-image song-image" id="song-img" src="">
                <p class="player-song-name song-name" id="player-name"></p>
                <p class="player-song-artist song-artist" id="player-author"></p>
              </div>
            </div>
            <div class="player-duration">
              <p class="player-duration-time" id="current-time">0:00</p>
            </div>
          </div>
        </section>

        <audio id="player">
            <!--source src="track.ogg" type="audio/ogg"/-->
            <!--source src="track.mp3" type="audio/mpeg"/-->
            Your browser does not support the audio element.
        </audio>
        `
        return view
    },
    after_render: async () => {
        const playButton = document.getElementById('player-play');
        const nextButton = document.getElementById('player-next');
        const prevButton = document.getElementById('player-prev');
        const curTime = document.getElementById('current-time');
        const player = document.getElementById('player');
        

        const section = document.getElementById('player-section');
        const pic = document.getElementById('song-img');
        const nameP = document.getElementById('player-name');
        const authorP = document.getElementById('player-author');

        let first = true;
        let currentSong  = 0;
        let currentUser;
        let songsQueue = [];

        async function getPlaylist() {
            let snapshot = await firebase.database().ref('/play_queue');
            snapshot.on("value", async function(snapshot) {
                let idList = snapshot.val();
                for(const [index,itemRef] of idList.entries()){
                    if (!itemRef)continue;
                    if (itemRef.email == currentUser){
                        const queueSongSnapshot = await firebase.database().ref('/play_queue/' + index + '/songs_list').once('value');
                        let songs = queueSongSnapshot.val();
                        console.log(songs);

                        songsQueue = [];
                        if (first && songs == null){
                            section.classList.add("hide");
                            break;
                        }else{
                            section.classList.remove("hide");
                        }
                        for(const song of songs){
                            if (!song) continue;
                            console.log(song.id);
                            songsQueue.push(song.id);
                        }
                       
                        currentSong = 0;
                        await getSong();
                        break;
                    }
                }
                console.log(first);
                if (!first){
                    play();
                }
                first = false;
            });
        }

        async function getSong(){
            player.src = await dbFunctions.getSongMP3(songsQueue[currentSong]);
            let songId = songsQueue[currentSong];
            let songSnapshot = await firebase.database().ref('/songs/' + songId).once('value');
            let song = songSnapshot.val();
            console.log(song);
            pic.src = await dbFunctions.getItemImage(song.idPicture);
            nameP.innerHTML = song.name;
            authorP.innerHTML = song.artist;
        }
       
        firebase.auth().onAuthStateChanged(async firebaseUser => {
            if (firebaseUser){
                document.getElementById('player_container').classList.remove("hide");
                first = true;
                currentUser = firebase.auth().currentUser.email;
                await getPlaylist();   
            }else{
                pause();
                document.getElementById('player_container').classList.add("hide");
            }
        });

        function play(){
            playButton.innerHTML = "pause";
            isPlay = true;
            player.play();
        }

        function pause(){
            playButton.innerHTML = "play_arrow";
            isPlay = false;
            player.pause();
        }

        async function next(){
            currentSong = currentSong + 1;
            if (currentSong == songsQueue.length){
                currentSong = 0;
            }
            await getSong();
            play();
        }

        async function prev(){
            currentSong = currentSong - 1;
            if (currentSong == -1){
                currentSong = songsQueue.length - 1;
            }
            await getSong();
            play();
        }

        let isPlay = false;

        playButton.addEventListener("click",async function(e) {
            if (isPlay){
                pause();
            }else{
                play();
            }
        });

        nextButton.addEventListener("click", async function(e){
            await next();
        });

        prevButton.addEventListener("click", async function(e){
            await prev();
        });

        player.addEventListener("ended", async function() {
            next();
        });

        player.addEventListener("timeupdate", function() {
            if (player.currentTime % 60 < 10){
                curTime.innerHTML = (player.currentTime / 60 | 0) + ":0" + (player.currentTime % 60 | 0);
            }else{
                curTime.innerHTML = (player.currentTime / 60 | 0) + ":" + (player.currentTime % 60 | 0);
            }
            range.value = (player.currentTime / player.duration) * 300 | 0;
        });

        range.addEventListener('input', function () {
            player.currentTime = range.value / 300 * player.duration;
        }, false);
    }

}

export default Player;