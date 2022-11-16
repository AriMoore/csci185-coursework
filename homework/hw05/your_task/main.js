const baseURL = 'https://www.apitutor.org/spotify/simple/v1/search';

function search (ev) {
    const term = document.querySelector('#search').value;
    console.log('search for:', term);
    // issue three Spotify queries at once...
    getTracks(term);
    getAlbums(term);
    getArtist(term);
    if (ev) {
        ev.preventDefault();
    }
}

async function getTracks (term) {
    const tracksEndpoint = baseURL + "?q=" + term + "&type=track";
    const data = await fetch(tracksEndpoint).then(response => response.json());
    const image = 
    `
        <section class="artist-card" id="3Nrfpe0tUJi4K4DXYWgMUX">
            <div>
                <img src="${data[0].image_url}">
                <h2>${data[0].name}</h2>
                <div class="footer">
                <a href="${data[0].spotify_url}" target="_blank">
                    view on spotify
                </a>
                </div>
            </div>
        </section>
    `
    document.querySelector('#tracks').innerHTML = image;
    console.log(tracksEndpoint, data);
}

async function getAlbums (term) {
    const albumsEndpoint = baseURL + "?q=" + term + "&type=album";
    const data = await fetch(albumsEndpoint).then(response => response.json());
    const image = 
    `
        <section class="artist-card" id="3Nrfpe0tUJi4K4DXYWgMUX">
            <div>
                <img src="${data[0].image_url}">
                <h2>${data[0].name}</h2>
                <div class="footer">
                <a href="${data[0].spotify_url}" target="_blank">
                    view on spotify
                </a>
                </div>
            </div>
        </section>
    `
    document.querySelector('#tracks').innerHTML = image;
    console.log(albumsEndpoint, data);
}

async function getArtist (term) {
    const artistEndpoint = baseURL + "?q=" + term + "&type=artist";
    const data = await fetch(artistEndpoint).then(response => response.json());
    if (data.length === 0) {
        document.querySelector('#artist').innerHTML = "No results found.";
        return;
    }
    const image = 
    `
        <section class="artist-card" id="3Nrfpe0tUJi4K4DXYWgMUX">
            <div>
                <img src="${data[0].image_url}">
                <h2>${data[0].name}</h2>
                <div class="footer">
                <a href="${data[0].spotify_url}" target="_blank">
                    view on spotify
                </a>
                </div>
            </div>
        </section>
    `
    document.querySelector('#artist').innerHTML = image;
    console.log(artistEndpoint, data[0].name, data[0].image_url);
};

document.querySelector('#search').onkeyup = function (ev) {
    // Number 13 is the "Enter" key on the keyboard
    console.log(ev.keyCode);
    if (ev.keyCode === 13) {
        search();
    }
}