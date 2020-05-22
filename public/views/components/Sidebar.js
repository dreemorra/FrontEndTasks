let Sidebar = {
    render: async () => {
        let view =  /*html*/`
        <div style="display: flex;height: 100%;">
        <aside class="sidebar">
            <nav>
                <div class="navigation">
                    <ul>
                        <li class="nav-item">
                            <span class="material-icons"> queue_music </span>
                            <a class="navigation-ref" href="#nav-playlists">Popular playlists</a></li>
                        <li class="nav-item">
                            <span class="material-icons"> search</span>
                            <a class="navigation-ref" href="#nav-search">Search</a></li>
                        <li class="nav-item">
                            <span class="material-icons"> person </span>
                            <a class="navigation-ref" href="#nav-artists">Artists</a></li>
                        <li class="nav-item">
                            <span class="material-icons"> music_note </span>
                            <a class="navigation-ref" href="#nav-genres">Genres</a></li>
                        <li class="nav-item">
                            <span class="material-icons"> album </span>
                            <a class="navigation-ref" href="#nav-albums">Albums</a></li>
                        <li id="lib_item" class="nav-item">
                            <span class="material-icons"> library_music </span>
                            <a class="navigation-ref" href="#nav-library">Your library</a></li>    
                    </ul>
                </div>
                <div id="playlists_list"class="marked_playlists">
                    <h2 id="marked-playlists-h">Playlists</h2>
                    <ul>
                        <li class="nav-item">
                            <span class="material-icons"> playlist_add </span>
                            <a class="navigation-ref" href="add-/#/playlist">New playlist</a></li>
                        <li class="nav-item">
                            <span class="material-icons"> favorite </span>
                            <a class="navigation-ref" href="/#/playlist">Liked songs</a></li>
                    </ul>
                    <ul>
                        <li class="nav-item"><a class="navigation-ref" href="/#/playlist">Playlist_Name</a></li>
                        <li class="nav-item"><a class="navigation-ref" href="/#/playlist">Playlist_Name</a></li>
                        <li class="nav-item"><a class="navigation-ref" href="/#/playlist">Playlist_Name</a></li>
                        <li class="nav-item"><a class="navigation-ref" href="/#/playlist">Playlist_Name</a></li>
                    </ul>
                </div>
            </nav>
        </aside>
        </div>
        `
        return view
    },
    after_render: async () => { 

        firebase.auth().onAuthStateChanged(firebaseUser => {
            if (firebaseUser){
                document.getElementById("playlists_list").classList.remove('hide');
                document.getElementById("lib_item").classList.remove('hide');
            }else{
                document.getElementById("playlists_list").classList.add('hide');
                document.getElementById("lib_item").classList.add('hide');
            }
        });
    }

}

export default Sidebar;
