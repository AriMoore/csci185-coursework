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
    console.log(tracksEndpoint);
    const data = await fetch(tracksEndpoint).then(response => response.json());
    console.log(data[0].artist.name, data[0].album.image_url);
    document.querySelector('#tracks').innerHTML = "";
    for (let i = 0; i < 5; i++) {
        const template = `
            <section class="track-item preview" onclick="playtrack('${data[i].id}')">
                <img src="${data[i].album.image_url}">
                <i class="fas fa-play play-track" aria-hidden="true"></i>
                <div class="label">
                    <h2>${data[i].name}</h2>
                    <p>
                        ${data[i].artist.name}
                    </p>
                </div>
            </section>
        `
        document.querySelector('#tracks').insertAdjacentHTML('beforeend', template);
    }
}

async function getAlbums (term) {
    const albumsEndpoint = baseURL + "?q=" + term + "&type=album";
    console.log(albumsEndpoint);
    const data = await fetch(albumsEndpoint).then(response => response.json());
    console.log(data[0].name);
    for (let i = 0; i < data.length; i++) {
        const image = 
        `
            <section class="album-card" id="2lATw9ZAVp7ILQcOKPCPqp">
                <div>
                    <img src="${data[i].image_url}">
                    <h2>${data[i].name}</h2>
                    <div class="footer">
                        <a href="${data[i].spotify_url}" target="_blank">
                            view on spotify
                        </a>
                    </div>
                </div>
            </section>
        `;
        document.querySelector('#albums').insertAdjacentHTML('beforeend', image);
    }
}

async function getArtist (term) {
    const artistsEndpoint = baseURL + "?q=" + term + "&type=artist";
    console.log(artistsEndpoint);
    const data = await fetch(artistsEndpoint).then(response => response.json());
    console.log(data[0]);
    const image = 
    `
        <section class="artist-card" id="3Nrfpe0tUJi4K4DXYWgMUX">
            <div>
                <img alt="Photo of ${data[0].name}" src="${data[0].image_url}">
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
}

function playtrack(id) {
    const template = `
    <iframe style="border-radius:12px" 
        src="https://open.spotify.com/embed/track/${id}?utm_source=generator&theme=0" 
        width="100%" 
        height="352" 
        frameBorder="0" 
        allowfullscreen="" 
        allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" 
        loading="lazy"></iframe>
    `;
    document.querySelector('#artist').innerHTML = template;
}

document.querySelector('#search').onkeyup = function (ev) {
    // Number 13 is the "Enter" key on the keyboard
    console.log(ev.keyCode);
    if (ev.keyCode === 13) {
        search();
    }
}