let Login = {

    render: async () => {
        return /*html*/ `
        <section class="auth-section">
            <div class="backPage"></div>
            <form>
                <h2> Log in </h2>
                <p class="helpText">To continue, log in to Breewer</p>
                <input id="username_input" type="text" placeholder="Email" size="34">
                <input id="password_input" type="password" placeholder="Password" size="34">
                <p id="error_p" style="margin-top: 10px; color: red;"></p>
                <input type="submit" id="login-btn" class="btn-dark" value="Continue">
            </form>
        </section>
        `
    }
    // All the code related to DOM interactions and controls go in here.
    // This is a separate call as these can be registered only after the DOM has been painted
    , after_render: async () => {
        const log_btn = document.getElementById("login-btn");

        log_btn.addEventListener ("click",  () => {
            event.preventDefault();
            const email       = document.getElementById("username_input");
            const pass        = document.getElementById("password_input");
            
            if (email.value =='' | pass.value == '') {
                error_p.innerHTML = `The field(s) cannot be empty`
            } else {
            const auth = firebase.auth();
            const promise = auth.signInWithEmailAndPassword(email.value, pass.value);
            promise
                .then(function(regUser){
                    window.location.href = '/#/';
                })
                .catch(e =>  error_p.innerHTML = e.message); }
        });
    }
}

export default Login;