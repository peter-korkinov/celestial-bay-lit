import {html} from '/src/lib.js';
// import {notify} from "../common/notify.js";


async function homePage(ctx) {
    ctx.render(homeTemplate());
}

const homeTemplate = () => html`
    <div id="pageintro" class="hoc clear">
        <article>
            <h3 class="heading">qui intelligit, hic venit</h3>
            <p>Biggest selection of galaxies in the world</p>
            <footer>
                <ul class="nospace inline pushright">
                    <li><a class="btn" href="#">Log in</a></li>
                    <li><a class="btn inverse" href="#">Register</a></li>
                </ul>
            </footer>
        </article>
    </div>
`;

export {
    homePage
};