const music=document.querySelector('audio');
const img= document.querySelector('img');
const play= document.getElementById('play');
const artist= document.getElementById('artist');
const title= document.getElementById('title');
const prev= document.getElementById('prev');
const next= document.getElementById('next');

const songs=[{
    audo:'song1',
    img: 'img1',
    title:'Ehna chauni Aa',
    artist:'Jassi gill'
},
{
    audo:'song2',
    img: 'img2',
    title:'beliya lekh',
    artist:'bpraak'
},
{
    audo:'song3',
    img: 'img3',
    title:'jugnu',
    artist:'badshah'
},
{
    audo:'song4',
    img: 'img4',
    title:'charr bottle vodka',
    artist:'honey singh'
},
{
    audo:'song15',
    img: 'img15',
    title:'one bottle down',
    artist:'honey singh'
},
{
    audo:'song16',
    img: 'img16',
    title:'love dose',
    artist:'honey singh'
},
{
    audo:'song17',
    img: 'img17',
    title:'saiyaanji',
    artist:'honey singh'
},

{
    audo:'song5',
    img: 'img5',
    title:'chann sitare',
    artist:'ammy virk'
},
{
    audo:'song11',
    img: 'img11',
    title:'teri jatti',
    artist:'ammy virk'
},
{
    audo:'song12',
    img: 'img12',
    title:'wand da naap',
    artist:'ammy virk'
},
{
    audo:'song13',
    img: 'img13',
    title:'khabbi seat',
    artist:'ammy virk'
},
{
    audo:'song14',
    img: 'img14',
    title:'jutti',
    artist:'ammy virk'
},
{
    audo:'song6',
    img: 'img6',
    title:'5tara',
    artist:'diljit dosanjh'
},
{
    audo:'song7',
    img: 'img7',
    title:'do you know',
    artist:'diljit dosanjh'
},
{
    audo:'song8',
    img: 'img8',
    title:'sardarji',
    artist:'diljit dosanjh'
},
{
    audo:'song9',
    img: 'img9',
    title:'pyar',
    artist:'diljit dosanjh'
},
{
    audo:'song10',
    img: 'img10',
    title:'lemonade',
    artist:'diljit dosanjh'
},
{
    audo:'song18',
    img: 'img18',
    title:'yaad piya ki aane lagi',
    artist:'neha kakkar'
},
{
    audo:'song19',
    img: 'img19',
    title:'coca cola',
    artist:'neha kakkar'
},
{
    audo:'song20',
    img: 'img20',
    title:'shiv tandav',
    artist:'shiv'
}]

let isplaying=false;
// for play
const playmusic= ()=>{
    isplaying=true;
    music.play();
    play.classList.replace('fa-play',"fa-pause");
    img.classList.add('anime');

};

// for pause
const pausemusic= ()=>{
    isplaying=false;
    music.pause();
    play.classList.replace("fa-pause","fa-play");
    img.classList.remove('anime');

};
play.addEventListener('click', ()=> {
    if(isplaying){
        pausemusic();
        } 
        else
        {
        playmusic()}
            });

const songload=(songs)=>{
    title.textContent=songs.title;
    artist.textContent = songs.artist ;
    music.src="audio/"+songs.audo+".mp3";
    img.src="images/"+songs.img+".jpeg";
}

songIndex=0;
const nextsong=()=>{
songIndex++;
songload(songs[songIndex] );
playmusic()
}
const prevsong=()=>{
songIndex--;
songload(songs[songIndex] );
playmusic()
}

next.addEventListener("click",nextsong);
prev.addEventListener("click",prevsong);
