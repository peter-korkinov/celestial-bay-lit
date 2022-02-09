import {html} from '/src/lib.js';


const loggedInTemplate = (email, onLogout) => html`
    <ul class="clear">
        <li class="active"><a href="/">Home</a></li>
        <li><a class="drop" href="javascript:void(0)">Pages</a>
            <ul>
                <li><a href="/pages/gallery.html">Gallery</a></li>
                <li><a href="/pages/full-width.html">Full Width</a></li>
                <li><a href="/pages/sidebar-left.html">Sidebar Left</a></li>
                <li><a href="/pages/sidebar-right.html">Sidebar Right</a></li>
                <li><a href="/pages/basic-grid.html">Basic Grid</a></li>
                <li><a href="/pages/font-icons.html">Font Icons</a></li>
            </ul>
        </li>
        <li><a class="drop" href="#">Dropdown</a>
            <ul>
                <li><a href="javascript:void(0)">Level 2</a></li>
                <li><a class="drop" href="javascript:void(0)">Level 2 + Drop</a>
                    <ul>
                        <li><a href="#">Level 3</a></li>
                        <li><a href="#">Level 3</a></li>
                        <li><a href="#">Level 3</a></li>
                    </ul>
                </li>
                <li><a href="#">Level 2</a></li>
            </ul>
        </li>
        <li><a href="/galaxies">Galaxies</a></li>
        <li><a href="/posts">Posts</a></li>
        <li class="active"><a href="/profile">My Profile</a></li>
        <li class="active"><a href="/logout">Log Out</a></li>
    </ul>
`;

const guestTemplate = () => html`
    <ul class="clear">
        <li class="active"><a href="/">Home</a></li>
        <li><a class="drop" href="javascript:void(0)">Pages</a>
            <ul>
                <li><a href="/pages/gallery.html">Gallery</a></li>
                <li><a href="/pages/full-width.html">Full Width</a></li>
                <li><a href="/pages/sidebar-left.html">Sidebar Left</a></li>
                <li><a href="/pages/sidebar-right.html">Sidebar Right</a></li>
                <li><a href="/pages/basic-grid.html">Basic Grid</a></li>
                <li><a href="/pages/font-icons.html">Font Icons</a></li>
            </ul>
        </li>
        <li><a class="drop" href="#">Dropdown</a>
            <ul>
                <li><a href="javascript:void(0)">Level 2</a></li>
                <li><a class="drop" href="javascript:void(0)">Level 2 + Drop</a>
                    <ul>
                        <li><a href="#">Level 3</a></li>
                        <li><a href="#">Level 3</a></li>
                        <li><a href="#">Level 3</a></li>
                    </ul>
                </li>
                <li><a href="#">Level 2</a></li>
            </ul>
        </li>
        <li><a href="/galaxies">Galaxies</a></li>
        <li><a href="/posts">Posts</a></li>
        <li class="active"><a href="/login">Log In</a></li>
        <li class="active"><a href="/register">Register</a></li>
    </ul>
`;

export {
    loggedInTemplate,
    guestTemplate
};
