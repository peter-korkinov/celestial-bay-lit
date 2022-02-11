import {html} from '/src/lib.js';
import {register} from "../api/data.js";
import {notify} from "../common/notify.js";


function registerPage(ctx) {
    ctx.render(registerTemplate(onSubmit));

    async function onSubmit(event) {
        event.preventDefault();

        const formData = new FormData(event.target);
        const email = formData.get('email');
        const password = formData.get('password');
        const repeatPassword = formData.get('confirm-pass');

        if (email && password && repeatPassword){
            if (password === repeatPassword) {
                try {
                    await register(email, password);
                    ctx.updateNavBar();
                    ctx.page.redirect('/home');
                } catch (err) {
                    notify('error', err);
                }
            } else {
                notify('error', 'Passwords do not match!');
            }
        } else {
            notify('error', 'All fields are required');
        }
    }
}

const registerTemplate = (onSubmit) => html`
    <section id="login-page" class="login">
        <form id="login-form" action="" method="" @submit=${onSubmit}>
            <fieldset>
                <legend>Register</legend>
                <input type="text" name="email" id="email" placeholder="Email">
                <input type="password" name="password" id="password" placeholder="Password">
                <input type="password" name="confirm-pass" id="repeat-pass" placeholder="Repeat Password">
                <input class="btn" type="submit" value="Register">
            </fieldset>
        </form>
        <p class="switch-msg">Already have an account? You can <a href="/login">log in here</a></p>

    </section>
`;

export {
    registerPage
};