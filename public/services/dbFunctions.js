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