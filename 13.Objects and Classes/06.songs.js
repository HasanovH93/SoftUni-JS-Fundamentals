function playlist(input) {
    
    class Songs {
        constructor(playlist,name,time){
            this.playlist = playlist,
            this.name = name,
            this.time = time,
            this.print = () => {
                console.log(this.name)
            }
        }
    }
    let numOfSongs = input.shift();
    let desiredPlayList = input.pop();

    let songs = [];

    for(let i = 0; i < numOfSongs; i++) {
        let currLine = input[i];
        let currArr = currLine.split("_");
        let currSong = new Songs(currArr[0], currArr[1],currArr[2]);
        songs.push(currSong);
        
    }
    if(desiredPlayList === "all"){
        songs.forEach(s => s.print())
    }else {
      let filteredSongs = songs.filter(s => s.playlist === desiredPlayList);
      filteredSongs.forEach(s => s.print())
    }
}
playlist([3,
    'favourite_DownTown_3:14',
    'favourite_Kiss_4:16',
    'favourite_Smooth Criminal_4:01',
    'favorite']
    )