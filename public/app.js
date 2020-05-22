"use strict";

import Home         from './views/pages/Home.js'
import Error404     from './views/pages/Error404.js'
import PostShow     from './views/pages/PostShow.js'
import Register     from './views/pages/Register.js'
import Login        from './views/pages/Login.js'
import Playlist     from './views/pages/Playlist.js'

// import Upload       from './views/pages/Upload.js'
import Header       from './views/components/Header.js'
import Footer       from './views/components/Footer.js' 
import Utils        from './services/Utils.js'



 

const routes = {
    '/'                     : Home
    , '/playlist/:id'       : PostShow
    , '/signup'             : Register
    , '/login'              : Login
    , '/playlist'           : Playlist
    // , '/upload'             : Upload
};


// The router code. Takes a URL, checks against the list of supported routes and then renders the corresponding content page.
const router = async () => {

    // Lazy load view element:
    const header = null || document.getElementById('header_container');
    const content = null || document.getElementById('content_container');
    const footer = null || document.getElementById('footer_container');
    
    // Render the Header and footer of the page
    header.innerHTML = await Header.render();
    await Header.after_render();
    footer.innerHTML = await Footer.render();
    await Footer.after_render();


    // Get the parsed URl from the addressbar
    let request = Utils.parseRequestURL()

    // Parse the URL and if it has an id part, change it with the string ":id"
    let parsedURL = (request.resource ? '/' + request.resource : '/') + (request.id ? '/:id' : '') + (request.verb ? '/' + request.verb : '')
    
    // Get the page from our hash of supported routes.
    // If the parsed URL is not in our list of supported routes, select the 404 page instead
    let page = routes[parsedURL] ? routes[parsedURL] : Error404
    content.innerHTML = await page.render();
    await page.after_render();
  
}

// Listen on hash change:
// Listen on page load:
window.addEventListener('load', router);
window.addEventListener('hashchange', router);


