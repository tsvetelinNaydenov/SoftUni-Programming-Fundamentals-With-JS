function solve (songsData){
    class Song{
        constructor(typeList, name, time){
            this.typeList = typeList;
            this.name = name;
            this.time = time;
        }
    }
    
    let typeList = songsData.pop();
    songsData.shift();
    let songArrOfObj = [];

    for (let song of songsData){
        let currentSong = song.split('_');
        let currentSongObj = new Song(currentSong[0], currentSong[1], currentSong[2]);
        songArrOfObj.push(currentSongObj);
    }

    if (typeList === 'all'){
        for (let songObj of songArrOfObj){
            console.log(songObj.name);
        }
    }
    else{
        for (let songObj of songArrOfObj){
            if (songObj.typeList === typeList){
                console.log(songObj.name);
            }
        }
    }
}

solve([4,
'favourite_DownTown_3:14',
'listenLater_Andalouse_3:24',
'favourite_In To The Night_3:58',
'favourite_Live It Up_3:48',
'listenLater']);
