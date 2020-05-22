let Header = {
    render: async () => {
        let view =  /*html*/`
        <header class="header">
        <div id="logo">
            <a href="/#/">Breewer</a>
        </div>
        <div id = "auth">
            <a id="Login-link" class="btn-light" href="/#/login">Log in</a>
            <a id="Signup-link" class="btn-light" href="/#/signup">Sign up</a>
            <p id="Username-p" class="username hide"></p>
            <button id="btnLogout" class="btn-light hide">Log out</button>
        </div>
        </header>
        `
        return view
    },
    after_render: async () => {
        const log_out_btn = document.getElementById("btnLogout");
        const log_in_link = document.getElementById("Login-link");
        const register_link = document.getElementById("Signup-link");
        const username_p = document.getElementById("Username-p");

        btnLogout.addEventListener('click', e=> {
            firebase.auth().signOut();
        })

        firebase.auth().onAuthStateChanged(firebaseUser => {
            if (firebaseUser){
                log_in_link.classList.add('hide');
                register_link.classList.add('hide');
                log_out_btn.classList.remove('hide');
                username_p.classList.remove('hide');
                //console.log(firebaseUser.uid);
                //console.log(firebaseUser.email);
                username_p.innerHTML="You're logged in as: " + firebaseUser.email; 
            }else{
                log_in_link.classList.remove('hide');
                register_link.classList.remove('hide');
                log_out_btn.classList.add('hide');
                username_p.innerHTML = "Logged in.";
                username_p.classList.add('hide');
            }
        });
    }

}

export default Header;