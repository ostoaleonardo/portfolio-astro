const CLIENT_ID = import.meta.env.SPOTIFY_CLIENT_ID
const SECRET_ID = import.meta.env.SPOTIFY_SECRET_ID
const REFRESH_TOKEN = import.meta.env.SPOTIFY_REFRESH_TOKEN

const TOKEN_ENDPOINT = 'https://accounts.spotify.com/api/token'
const RECENTLY_PLAYED_ENDPOINT = 'https://api.spotify.com/v1/me/player/recently-played?limit=1'

const getAccessToken = async () => {
    const response = await fetch(TOKEN_ENDPOINT, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
            Authorization: 'Basic ' + btoa(CLIENT_ID + ':' + SECRET_ID)
        },
        body: new URLSearchParams({
            grant_type: 'refresh_token',
            refresh_token: REFRESH_TOKEN
        })
    })

    const data = await response.json()
    return data
}

const fetchData = async (accessToken: any, endPoint: string) => {
    const response = await fetch(endPoint, {
        headers: {
            Authorization: 'Bearer ' + accessToken,
        },
    })

    if (response.status === 204 || response.status > 400) {
        return null
    }

    return response.json()
}

export const getRecentlyPlayed = async () => {
    try {
        const { access_token } = await getAccessToken()
        const song = await fetchData(access_token, RECENTLY_PLAYED_ENDPOINT)
        return formatRecentlySong(song)
    } catch (error) {
        return null
    }
}

const formatRecentlySong = (song: any) => {
    if (!song) {
        return null
    }

    const track = song.items[0].track

    const image = track.album.images[0]?.url || ''
    const artist = track.artists.map((_artist: any) => _artist.name).join(', ')
    const title = track.name || ''

    return {
        title,
        artist,
        image,
    }
}
