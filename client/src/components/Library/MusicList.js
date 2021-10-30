import classes from './MusicList.module.css';
import React from 'react'
import { useRef } from 'react'
const MusicList = () => {
    const titleRef = useRef()
    const songs = [
        {
            "acousticness": "0.00146",
            "artists": "['The Weeknd']",
            "danceability": "0.514",
            "duration_ms": "200040",
            "energy": "0.73",
            "explicit": "0",
            "id": "0VjIjW4GlUZAMYd2vXMi3b",
            "instrumentalness": "0.0000954",
            "key": "1",
            "liveness": "0.0897",
            "loudness": "-5.934",
            "mode": "1",
            "name": "Blinding Lights",
            "popularity": "100",
            "release_date": "03/20/2020",
            "speechiness": "0.0598",
            "tempo": "171.005",
            "valence": "0.334",
            "year": "2020"
        },
        {
            "acousticness": "0.247",
            "artists": "['DaBaby', 'Roddy Ricch']",
            "danceability": "0.746",
            "duration_ms": "181733",
            "energy": "0.69",
            "explicit": "1",
            "id": "7ytR5pFWmSjzHJIeQkgog4",
            "instrumentalness": "0",
            "key": "11",
            "liveness": "0.101",
            "loudness": "-7.956",
            "mode": "1",
            "name": "ROCKSTAR (feat. Roddy Ricch)",
            "popularity": "99",
            "release_date": "04/17/2020",
            "speechiness": "0.163999999999999",
            "tempo": "89.977",
            "valence": "0.497",
            "year": "2020"
        },
        { "acousticness": "0.731", "artists": "['Powfu', 'beabadoobee']", "danceability": "0.726", "duration_ms": "173333", "energy": "0.431", "explicit": "0", "id": "7eJMfftS33KTjuF7lTsMCx", "instrumentalness": "0", "key": "8", "liveness": "0.696", "loudness": "-8.765", "mode": "0", "name": "death bed (coffee for your head) (feat. beabadoobee)", "popularity": "97", "release_date": "02/08/2020", "speechiness": "0.135", "tempo": "144.026", "valence": "0.348", "year": "2020" },
        { "acousticness": "0.233", "artists": "['THE SCOTTS', 'Travis Scott', 'Kid Cudi']", "danceability": "0.716", "duration_ms": "165978", "energy": "0.537", "explicit": "1", "id": "39Yp9wwQiSRIDOvrVg7mbk", "instrumentalness": "0", "key": "0", "liveness": "0.157", "loudness": "-7.648", "mode": "0", "name": "THE SCOTTS", "popularity": "96", "release_date": "04/24/2020", "speechiness": "0.0514", "tempo": "129.978999999999", "valence": "0.28", "year": "2020" },
        { "acousticness": "0.104", "artists": "['Roddy Ricch']", "danceability": "0.895999999999999", "duration_ms": "196653", "energy": "0.586", "explicit": "1", "id": "0nbXyq5TXYPCO7pr3N8S4I", "instrumentalness": "0", "key": "10", "liveness": "0.79", "loudness": "-6.687", "mode": "0", "name": "The Box", "popularity": "95", "release_date": "12/06/2019", "speechiness": "0.0559", "tempo": "116.971", "valence": "0.642", "year": "2019" },
        { "acousticness": "0.305", "artists": "['BENEE', 'Gus Dapperton']", "danceability": "0.863", "duration_ms": "223480", "energy": "0.631", "explicit": "1", "id": "4nK5YrxbMGZstTLbvj6Gxw", "instrumentalness": "0.0000304", "key": "7", "liveness": "0.123", "loudness": "-4.689", "mode": "1", "name": "Supalonely", "popularity": "95", "release_date": "11/15/2019", "speechiness": "0.0534", "tempo": "128.977", "valence": "0.817", "year": "2019" },
        { "acousticness": "0.0686", "artists": "['Surf Mesa', 'Emilee']", "danceability": "0.674", "duration_ms": "176547", "energy": "0.774", "explicit": "0", "id": "62aP9fBQKYKxi7PDXwcUAS", "instrumentalness": "0.00188", "key": "11", "liveness": "0.393", "loudness": "-7.567", "mode": "0", "name": "ily (i love you baby) (feat. Emilee)", "popularity": "95", "release_date": "11/26/2019", "speechiness": "0.0892", "tempo": "112.05", "valence": "0.33", "year": "2019" },
        { "acousticness": "0.321", "artists": "['Drake']", "danceability": "0.834", "duration_ms": "247059", "energy": "0.454", "explicit": "1", "id": "127QTOFJsJQp5LbJbu3A1y", "instrumentalness": "0.00000615", "key": "1", "liveness": "0.114", "loudness": "-9.75", "mode": "0", "name": "Toosie Slide", "popularity": "95", "release_date": "04/03/2020", "speechiness": "0.201", "tempo": "81.618", "valence": "0.837", "year": "2020" },
        { "acousticness": "0.692", "artists": "['Tones And I']", "danceability": "0.824", "duration_ms": "209438", "energy": "0.588", "explicit": "0", "id": "2XU0oxnq2qxCpomAAuJY8K", "instrumentalness": "0.000104", "key": "6", "liveness": "0.149", "loudness": "-6.4", "mode": "0", "name": "Dance Monkey", "popularity": "94", "release_date": "10/17/2019", "speechiness": "0.0924", "tempo": "98.027", "valence": "0.513", "year": "2019" },
        { "acousticness": "0.749", "artists": "['StaySolidRocky']", "danceability": "0.728", "duration_ms": "147800", "energy": "0.431", "explicit": "0", "id": "5RqR4ZCCKJDcBLIn4sih9l", "instrumentalness": "0", "key": "6", "liveness": "0.0996", "loudness": "-9.966", "mode": "0", "name": "Party Girl", "popularity": "94", "release_date": "04/21/2020", "speechiness": "0.0622", "tempo": "130.022", "valence": "0.629", "year": "2020" },
        { "acousticness": "0.0264", "artists": "['6ix9ine']", "danceability": "0.611", "duration_ms": "132303", "energy": "0.688", "explicit": "1", "id": "4NhDYoQTYCdWHTvlbGVgwo", "instrumentalness": "0", "key": "1", "liveness": "0.251", "loudness": "-5.688", "mode": "1", "name": "GOOBA", "popularity": "94", "release_date": "05/08/2020", "speechiness": "0.341", "tempo": "178.462", "valence": "0.393", "year": "2020" },
        { "acousticness": "0.021", "artists": "['Lady Gaga', 'Ariana Grande']", "danceability": "0.672", "duration_ms": "182200", "energy": "0.855", "explicit": "0", "id": "24ySl2hOPGCDcxBxFIqWBu", "instrumentalness": "0", "key": "9", "liveness": "0.322999999999999", "loudness": "-3.764", "mode": "1", "name": "Rain On Me (with Ariana Grande)", "popularity": "94", "release_date": "05/22/2020", "speechiness": "0.0397", "tempo": "123.056", "valence": "0.645999999999999", "year": "2020" },
        { "acousticness": "0.223", "artists": "['Ariana Grande', 'Justin Bieber']", "danceability": "0.597", "duration_ms": "228482", "energy": "0.45", "explicit": "0", "id": "4HBZA5flZLE435QTztThqH", "instrumentalness": "0", "key": "8", "liveness": "0.382", "loudness": "-6.658", "mode": "1", "name": "Stuck with U (with Justin Bieber)", "popularity": "94", "release_date": "05/08/2020", "speechiness": "0.0418", "tempo": "178.765", "valence": "0.537", "year": "2020" },
        { "acousticness": "0.183", "artists": "['Surfaces']", "danceability": "0.878", "duration_ms": "158571", "energy": "0.525", "explicit": "0", "id": "1Cv1YLb4q0RzL6pybtaMLo", "instrumentalness": "0", "key": "5", "liveness": "0.0714", "loudness": "-6.832", "mode": "1", "name": "Sunday Best", "popularity": "93", "release_date": "01/06/2019", "speechiness": "0.0578", "tempo": "112.022", "valence": "0.694", "year": "2019" },
        { "acousticness": "0.256", "artists": "['Doja Cat']", "danceability": "0.787", "duration_ms": "237893", "energy": "0.672999999999999", "explicit": "1", "id": "3Dv1eDb0MEgF93GpLXlucZ", "instrumentalness": "0.00000357", "key": "11", "liveness": "0.0904", "loudness": "-4.577", "mode": "0", "name": "Say So", "popularity": "93", "release_date": "11/07/2019", "speechiness": "0.158", "tempo": "110.962", "valence": "0.785999999999999", "year": "2019" },
        { "acousticness": "0.0125", "artists": "['Dua Lipa']", "danceability": "0.794", "duration_ms": "183290", "energy": "0.792999999999999", "explicit": "0", "id": "6WrI0LAC5M1Rw2MnX2ZvEg", "instrumentalness": "0", "key": "11", "liveness": "0.0952", "loudness": "-4.521", "mode": "0", "name": "Don't Start Now", "popularity": "93", "release_date": "10/31/2019", "speechiness": "0.0842", "tempo": "123.941", "valence": "0.677", "year": "2019" },
        { "acousticness": "0.0847", "artists": "['Travis Scott']", "danceability": "0.841", "duration_ms": "243837", "energy": "0.728", "explicit": "1", "id": "6gBFPUFcJLzWGx4lenP6h2", "instrumentalness": "0", "key": "7", "liveness": "0.149", "loudness": "-3.37", "mode": "1", "name": "goosebumps", "popularity": "92", "release_date": "09/16/2016", "speechiness": "0.0484", "tempo": "130.049", "valence": "0.43", "year": "2016" },
        { "acousticness": "0.123", "artists": "['Trevor Daniel']", "danceability": "0.784", "duration_ms": "159382", "energy": "0.43", "explicit": "0", "id": "4TnjEaWOeW0eKTKIEvJyCa", "instrumentalness": "0", "key": "10", "liveness": "0.0887", "loudness": "-8.756", "mode": "0", "name": "Falling", "popularity": "92", "release_date": "10/05/2018", "speechiness": "0.0364", "tempo": "127.087", "valence": "0.236", "year": "2018" },
        { "acousticness": "0.00513", "artists": "['Travis Scott']", "danceability": "0.834", "duration_ms": "312820", "energy": "0.73", "explicit": "1", "id": "2xLMifQCjDGFmkHkpNLD9h", "instrumentalness": "0", "key": "8", "liveness": "0.124", "loudness": "-3.714", "mode": "1", "name": "SICKO MODE", "popularity": "92", "release_date": "08/03/2018", "speechiness": "0.222", "tempo": "155.007999999999", "valence": "0.446", "year": "2018" }
    ]
    return (
        <>
            <div className={classes.content} ref={titleRef}>
                <h2 className={classes.title}>Playlist</h2>
                {songs.map((music) => (
                    <div className={classes.music_row}>
                        <p className="music">{music.name}</p>
                        <p className="music">{(music.duration_ms / 60000).toFixed(2)}</p>
                    </div>
                ))}
            </div>
        </>
    )
}
export default MusicList;