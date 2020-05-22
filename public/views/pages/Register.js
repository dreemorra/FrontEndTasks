let Register = {

    render: async () => {
        return /*html*/ `
        <section class="auth-section">
            <div class="backPage"></div>
            <form>
                <h2> Sign up </h2>
                <p class="helpText">To continue, sign up on Breewer</p>
                <input id="username_input" type="text" placeholder="Username" >
                <input id="pass_input" type="password" placeholder="Password" size="34">
                <input id="confirm_pass_input" type="password" placeholder="Confirm password" size="34">
                <p id="error_p" style="margin-top: 10px; color: red;"></p>
                <input type="submit" id="login-btn" class="btn-dark" value="Continue">
            </form>
        </section>
        `
    }
    // All the code related to DOM interactions and controls go in here.
    // This is a separate call as these can be registered only after the DOM has been painted
    , after_render: async () => {

        document.getElementById("login-btn").addEventListener ("click",  () => {
            event.preventDefault();
            const email       = document.getElementById("username_input");
            const pass        = document.getElementById("pass_input");
            const repeatPass  = document.getElementById("confirm_pass_input");

            if (pass.value != repeatPass.value) {
                error_p.innerHTML = `The passwords don't match`
            } else if (email.value =='' | pass.value == '' | repeatPass == '') {
                error_p.innerHTML = `The field(s) cannot be empty`
            } else {
                const auth = firebase.auth();
                const promise = auth.createUserWithEmailAndPassword(email.value, pass.value);
                promise
                    .then(function(regUser){
                        window.location.href = '/#/';
                    })
                    .catch(alert(e.message));
                alert(`User with email ${email.value} was successfully submitted!`)
            }    
        })
    }
}

export default Register;