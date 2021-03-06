import {isLogged, getUserData} from "./common/util.js";
import {notify} from "./common/notify.js";
import { page, render } from "./lib.js";
import {logout} from "./api/data.js";

import {guestTemplate, loggedInTemplate} from "./views/navigation.js";
import {homePage} from "./views/home.js";
import {loginPage} from "./views/login.js";
import {registerPage} from "./views/register.js";


function updateNavBar() {
    if (isLogged()) {
        render(loggedInTemplate(getUserData().email, onLogout), navBar);
    } else {
        render(guestTemplate(), navBar);
    }
}

function decorateContext(ctx, next) {
    ctx.render = (template) => render(template, root);
    ctx.updateNavBar = updateNavBar;
    next();
}

async function onLogout() {
    try {
        const message = await logout();
        updateNavBar();
        page('/home');
        notify('info', message);
    } catch (err) {
        notify('error', err);
    }
}

const navBar = document.getElementById('mainav');
const root = document.getElementById('root');

page(decorateContext)
page('/home', homePage);
page('/', '/home');
page('/login', loginPage);
page('/register', registerPage);
// page('/create', createPage);
// page('/edit/:id', loadRecord, editPage);

updateNavBar();
page.start();