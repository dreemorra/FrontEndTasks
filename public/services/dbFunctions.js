export async function getItemImage(id){
    let ref = firebase.storage().ref();
    const imgRef = ref.child("/pics/" + id + ".png");
    const downloadURL = await imgRef.getDownloadURL();
    return downloadURL;
}

export async function getItems(value){
    const snapshot = await firebase.database().ref('/' + value).once('value');
    return snapshot.val();
}

export async function getSongMP3(id){
    console.log(id);
    let ref = firebase.storage().ref();
    const itemRef = ref.child("/songs/id" + id + ".mp3");
    const downloadURL = await itemRef.getDownloadURL();
    return downloadURL;
}

export async function pushPlaylist(user, list){
   
    console.log(user);

    const snapshot = await firebase.database().ref('/play_queue').once('value');
    const queues = snapshot.val();
    let findedUserId = 0;

    for(let [index,queue] of queues.entries()){
        if (!queue) continue;

        if (queue.email == user){
            findedUserId = index;
            break;
        }
    }

    console.log(findedUserId);

    firebase.database().ref('/play_queue/' + findedUserId + '/songs_list/').remove();
    let i = 1;
    for(let songId of list){
        firebase.database().ref('/play_queue/' + findedUserId + '/songs_list/' + i + '/id').set(songId);
        i = i + 1;
    }
    
}

export async function getPlaylistList(id){
    let ans =[];
    let snapshot = await firebase.database().ref('/playlists/' + id + '/songs').once("value");
    let songList = snapshot.val();
    for(let song of songList){
        if(!song)continue;

        ans.push(song.id);
    }
    return ans;
}